export const contractAddress = "0x3B942e2d5c29411E4315F9dd9dc7EB501318028e";

export const whitelistAbi = {
  "_format": "hh-sol-artifact-1",
  "contractName": "Whitelist",
  "sourceName": "contracts/Whitelist.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "_maxWhitelist",
          "type": "uint8"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "addAddressToWhitelist",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxWhitelistedAddresses",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "numAddressesWhitelisted",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "whitelistedAddress",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405161079338038061079383398181016040528101906100329190610067565b806000806101000a81548160ff021916908360ff160217905550506100b4565b6000815190506100618161009d565b92915050565b60006020828403121561007957600080fd5b600061008784828501610052565b91505092915050565b600060ff82169050919050565b6100a681610090565b81146100b157600080fd5b50565b6106d0806100c36000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806331a72188146100515780634011d7cd1461006f5780638e7314d91461008d578063c30796ab14610097575b600080fd5b6100596100c7565b6040516100669190610505565b60405180910390f35b6100776100d8565b6040516100849190610505565b60405180910390f35b6100956100eb565b005b6100b160048036038101906100ac91906103a5565b6102ab565b6040516100be919061047a565b60405180910390f35b60008054906101000a900460ff1681565b600260009054906101000a900460ff1681565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610178576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161016f906104c5565b60405180910390fd5b60008054906101000a900460ff1660ff16600260009054906101000a900460ff1660ff16106101dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101d3906104e5565b60405180910390fd5b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506102726040518060400160405280601e81526020017f41646472657373202573206973206e6f772077686974656c6973746564210000815250336102cb565b6001600260008282829054906101000a900460ff16610291919061053c565b92506101000a81548160ff021916908360ff160217905550565b60016020528060005260406000206000915054906101000a900460ff1681565b61036382826040516024016102e1929190610495565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610367565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60008135905061039f81610683565b92915050565b6000602082840312156103b757600080fd5b60006103c584828501610390565b91505092915050565b6103d781610573565b82525050565b6103e681610585565b82525050565b60006103f782610520565b610401818561052b565b93506104118185602086016105be565b61041a81610620565b840191505092915050565b6000610432601a8361052b565b915061043d82610631565b602082019050919050565b6000610455601b8361052b565b91506104608261065a565b602082019050919050565b610474816105b1565b82525050565b600060208201905061048f60008301846103dd565b92915050565b600060408201905081810360008301526104af81856103ec565b90506104be60208301846103ce565b9392505050565b600060208201905081810360008301526104de81610425565b9050919050565b600060208201905081810360008301526104fe81610448565b9050919050565b600060208201905061051a600083018461046b565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610547826105b1565b9150610552836105b1565b92508260ff03821115610568576105676105f1565b5b828201905092915050565b600061057e82610591565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060ff82169050919050565b60005b838110156105dc5780820151818401526020810190506105c1565b838111156105eb576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f596f752068617665206265656e2077686974656c697374656421000000000000600082015250565b7f4e6f206d6f72652077686974656c69737420617661696c61626c650000000000600082015250565b61068c81610573565b811461069757600080fd5b5056fea26469706673582212205cf0d0b22c30d21d76855e0de276ae21d5d718ce8f1bc195075915d26231635764736f6c63430008040033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806331a72188146100515780634011d7cd1461006f5780638e7314d91461008d578063c30796ab14610097575b600080fd5b6100596100c7565b6040516100669190610505565b60405180910390f35b6100776100d8565b6040516100849190610505565b60405180910390f35b6100956100eb565b005b6100b160048036038101906100ac91906103a5565b6102ab565b6040516100be919061047a565b60405180910390f35b60008054906101000a900460ff1681565b600260009054906101000a900460ff1681565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610178576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161016f906104c5565b60405180910390fd5b60008054906101000a900460ff1660ff16600260009054906101000a900460ff1660ff16106101dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101d3906104e5565b60405180910390fd5b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506102726040518060400160405280601e81526020017f41646472657373202573206973206e6f772077686974656c6973746564210000815250336102cb565b6001600260008282829054906101000a900460ff16610291919061053c565b92506101000a81548160ff021916908360ff160217905550565b60016020528060005260406000206000915054906101000a900460ff1681565b61036382826040516024016102e1929190610495565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610367565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60008135905061039f81610683565b92915050565b6000602082840312156103b757600080fd5b60006103c584828501610390565b91505092915050565b6103d781610573565b82525050565b6103e681610585565b82525050565b60006103f782610520565b610401818561052b565b93506104118185602086016105be565b61041a81610620565b840191505092915050565b6000610432601a8361052b565b915061043d82610631565b602082019050919050565b6000610455601b8361052b565b91506104608261065a565b602082019050919050565b610474816105b1565b82525050565b600060208201905061048f60008301846103dd565b92915050565b600060408201905081810360008301526104af81856103ec565b90506104be60208301846103ce565b9392505050565b600060208201905081810360008301526104de81610425565b9050919050565b600060208201905081810360008301526104fe81610448565b9050919050565b600060208201905061051a600083018461046b565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610547826105b1565b9150610552836105b1565b92508260ff03821115610568576105676105f1565b5b828201905092915050565b600061057e82610591565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060ff82169050919050565b60005b838110156105dc5780820151818401526020810190506105c1565b838111156105eb576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f596f752068617665206265656e2077686974656c697374656421000000000000600082015250565b7f4e6f206d6f72652077686974656c69737420617661696c61626c650000000000600082015250565b61068c81610573565b811461069757600080fd5b5056fea26469706673582212205cf0d0b22c30d21d76855e0de276ae21d5d718ce8f1bc195075915d26231635764736f6c63430008040033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}