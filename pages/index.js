import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { providers, Contract } from 'ethers';
import Web3Modal from 'web3modal';
import styles from '../styles/Home.module.css'
import { whitelistAbi, contractAddress } from './constants';

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [joinedWhitelist, setJoinedWhitelist] = useState(false);
  const [loading, setLoading] = useState(false);
  const [numberOfWhitelisted, setNumberOfWhitelisted] = useState(0);
  const web3ModalRef = useRef();
  const abi = whitelistAbi.abi;

  // this function returns provider/signer
  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // if user is not connected to Rinkeby, throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 4) {
      window.alert("Please change the network to Rinkeby testnet")
      throw new Error("change  network to Rinkeby");
    }

    // if signer is needed, then return signer
    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }

    return web3Provider;
  }

  // add address to whitelist 
  const addAddressToWhitelist = async () => {
    try {
      // need signer since it's a write tx
      let signer = await getProviderOrSigner(true);

      // createt new instance of Contract with signer
      let whitelistContract = new Contract(contractAddress, abi, signer);

      // call addAddressToWhitelist from the contract
      let tx = await whitelistContract.addAddressToWhitelist();
      setLoading(true);
      await tx.wait();
      setLoading(false);

      // address is whitelist
      setJoinedWhitelist(true);

      // get the number of whitelisted address
      await getNumberOfWhitelisted();
    } catch (err) {
      console.log(err);
    }
  }

  const getNumberOfWhitelisted = async () => {
    try {
      // get provider, since it's only a read function
      let provider = await getProviderOrSigner();
      let whitelistContract = new Contract(contractAddress, abi, provider);
      const _numberOfWhitelisted = await whitelistContract.numAddressesWhitelisted();
      console.log(_numberOfWhitelisted)
      console.log(`number of whitelisted: ${_numberOfWhitelisted}`)
      setNumberOfWhitelisted(_numberOfWhitelisted);
    } catch (err) {
      console.log(err);
    }
  }

  const checkIfAddressInWhitelist = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const whitelistContract = new Contract(contractAddress, abi, signer);
      const address = await signer.getAddress();
      const _joinedWhitelist = await whitelistContract.whitelistedAddress(address);
      console.log(`whitelisted: ${joinedWhitelist}`)
      setJoinedWhitelist(_joinedWhitelist);
    } catch (err) {
      console.log(err);
    }
  }

  const connectWallet = async () => {
    console.log('connect wallet..')
    try {
      await getProviderOrSigner();
      // if the user rejects to connect, then error should be thrown
      setWalletConnected(true);
      checkIfAddressInWhitelist();
      getNumberOfWhitelisted();
    } catch (err) {
      console.log(err);
    }
  }

  const renderButton = () => {
    if (walletConnected) {
      if (joinedWhitelist) {
        return (
          <div className={styles.description}>
            Thanks for joining the whitelist! Mint date: TBD
          </div>
        )
      } else if (loading) {
        return <button className={styles.button} disabled>Loading...</button>
      } else {
        return (
          <button onClick={addAddressToWhitelist} className={styles.button}>
            Join the Whitelist
          </button>
        )
      }
    } else {
      return (
        <button onClick={connectWallet} className={styles.button}>
          Connect your wallet
        </button>
      )
    }
  }

  useEffect(() => {
    console.log(walletConnected);
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: 'rinkeby',
        providerOptions: {},
        disableInjectedProvider: false
      });
      connectWallet();
    }
  }, [walletConnected])

  return (
    <div>
      <Head>
        <title>Whitelist Dapp</title>
        <meta name="description" content="Whitelist-Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div>
          <h1 className={styles.title}>Welcome to Crypto Devs!</h1>
          <div className={styles.description}>
            Its an NFT collection for developers in Crypto.
          </div>
          <div className={styles.description}>
            {numberOfWhitelisted} have already joined the Whitelist
          </div>
          {renderButton()}
        </div>
        <div>
          <img className={styles.image} src="./crypto-devs.svg" />
        </div>
      </div>

      <footer className={styles.footer}>
        Made with &#10084; by Crypto Devs
      </footer>
    </div>
  )
}
