'use strict';

const _json = Symbol('json');

/**
 * Common variables.
 */
class Variables {
  constructor() {
    this[_json] = {};
    // all configs here
    this[_json].default = {
      outputDir: '/.output',
      configsFile: '_configs.json'
    };
    this[_json].package = {};
    this[_json].directory = {};
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

  /**
   * Setter for object package.
   * 
   * @param {Object} value - package config object
   */
  set package(value) {
    Object.assign(this[_json].package, value);
  }

  /**
   * Getter for object package.
   * 
   * @returns {Object} package config object
   */
  get package() {
    return this[_json].package;
  }

  /**
   * Setter for object directory.
   * 
   * @param {Object} value - directory config object
   */
  set directory(value) {
    Object.assign(this[_json].directory, value);
  }

  /**
   * Getter for object directory.
   * 
   * @returns {Object} directory config object
   */
  get directory() {
    return this[_json].directory;
  }
}

module.exports = new Variables();
