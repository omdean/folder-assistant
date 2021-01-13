'use strict';

const PackageLevelVariables = require('./packageLevelVariables');

class DirLevelVariables extends PackageLevelVariables {
  constructor(symbol) {
    super(symbol);
    this[symbol].directory = {};
  }

  /**
   * Setter for object directory.
   * 
   * @param {Object} value - dir related configs
   */
  set directory(value) {
    Object.assign(this[symbol].directory, value);
  }

  /**
   * Getter for object directory.
   * 
   * @returns {Object} directory config object
   */
  get directory() {
    return this[symbol].directory;
  }
}

module.exports = DirLevelVariables;
