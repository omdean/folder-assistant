'use strict';

const dirLevelVars = require('./models/dirLevelVariables');

const _json = Symbol('json');

/**
 * Common variables.
 */
class Variables extends dirLevelVars {
  constructor() {
    super(_json);
    // all configs here
    this[_json].default = {
      outputDir: '/.output',
      configsFile: '_configs.json'
    };
  }

  /**
   * Setter for update specific variables.
   */
  set json(value) {
    const { directory = {}, package : pkg = {} } = value;
    this.directory = directory;
    this.package = pkg;
  }

  /**
   * Getter for object contain all variables.
   */
  get json() {
    return this[_json];
  }

  /**
   * Setter for default configs.
   * 
   * @param {Object} value - value
   */
  set default(value) {
    Object.assign(this[_json].default, value);
  }

  /**
   * Getter for default configs.
   */
  get default() {
    return this[_json].default;
  }
}

module.exports = new Variables();
