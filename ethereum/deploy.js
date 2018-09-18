const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'armor master barely giraffe marriage crew hope erosion jewel topple shoot merit',
  'https://rinkeby.infura.io/v3/d5e1672c3512408da61bbab85fb26e3c'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '5000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
