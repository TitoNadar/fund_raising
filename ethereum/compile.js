const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

 //deletes the folder in a single command
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);            

//read the contract file and compiling
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;    