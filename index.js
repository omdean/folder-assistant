'use strict';

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const index = require('./src/index');

// index.loadConfig(__dirname);
// index.init();

const argv = yargs(hideBin(process.argv)).alias('key', 'ke').array('ke').parse();
console.log(argv);
