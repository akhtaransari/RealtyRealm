const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { abi, evm } = require('./build/PropertyListing.json');

// Replace with your mnemonic and RPC URL
const mnemonic = 'Your mnemonic';
const rpcUrl = 'https://data-seed-prebsc-1-s1.bnbchain.org:8545'; // RPC URL for Matic Mumbai testnet

// Initialize provider and web3 instance
const provider = new HDWalletProvider(mnemonic, rpcUrl);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const gasPrice = '10000000000'; // Set a higher gas price
  const contract = new web3.eth.Contract(abi);

  const result = await contract
    .deploy({ data: '0x' + evm.bytecode.object })
    .send({ gas: '3000000', gasPrice, from: accounts[0] });

  console.log('Contract deployed to', result.options.address);

  provider.engine.stop();
};

deploy();
