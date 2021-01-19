'use strict';

const index = require('../src/index');

class InitCommand {
  constructor() {
    this.command = 'init';
    this.desc = 'initialize folders by the default config';
  }

  builder() {
    return {};
  }

  handler(argv) {
    index.loadConfig(argv._custom.workingDir);
    index.init();
  }
}

module.exports = new InitCommand();
