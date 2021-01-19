'use strict';

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

function mwLoadConfig(argv) {
  argv._custom = {
    workingDir: __dirname
  };
}

const fd = yargs(hideBin(process.argv))
  .commandDir('cmds')
  .middleware([mwLoadConfig])
  .help();

console.log(fd.argv);
