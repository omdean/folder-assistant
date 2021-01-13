'use strict';

class PackageLevelVariables {
  constructor(symbol) {
    this[symbol] = {};
    this.pkg = this[symbol].package = {};
  }

  /**
   * Setter for object package.
   * 
   * @param {Object} value - package config object
   */
  set package(value) {
    Object.assign(this[symbol].package, value);
  }

  /**
   * Getter for object package.
   * 
   * @returns {Object} package config object
   */
  get package() {
    return this[symbol].package;
  }
}

module.exports = PackageLevelVariables;
