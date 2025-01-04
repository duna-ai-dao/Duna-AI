import { ethers } from 'ethers';
import { wallet, provider } from '../config/blockchain';

export const compileAndDeployContract = async (solidityCode: string): Promise<string> => {
  const compilerInput = {
    language: 'Solidity',
    sources: {
      'contract.sol': {
        content: solidityCode,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['abi', 'evm.bytecode'],
        },
      },
    },
  };

  const compiledContract = JSON.parse(await provider.send('eth_compileSolidity', [JSON.stringify(compilerInput)]));
  const contractData = compiledContract.contracts['contract.sol'];
  const contractName = Object.keys(contractData)[0];
  const contract = contractData[contractName];

  const factory = new ethers.ContractFactory(contract.abi, contract.evm.bytecode.object, wallet);
  const deployedContract = await factory.deploy();
  await deployedContract.waitForDeployment()
  return deployedContract.getAddress();
};
