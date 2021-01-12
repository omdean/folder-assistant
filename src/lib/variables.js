'use strict';

const _json = Symbol('json');

/**
 * Common variables.
 */
class Variables {
  constructor() {
    // all configs here
    this[_json] = {
      default: {
        outputDir: '/.output',
        configsFile: '_configs.json'
      }
    };
  }

  /**
   * Updating configs.
   */
  set json(value) {
    Object.assign(this[_json], value);
  }

  get json() {
    return this[_json];
  }

  /**
   * Setting package level configs.
   * 
   * @param {Object} value - value
   */
  set pkg(value) {
    this[_json].package = value;
  }

  get pkg() {
    return this[_json].package;
  }
}

module.exports = new Variables();
