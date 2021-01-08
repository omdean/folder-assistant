'use strict';

const _pkgLevelVar = Symbol('pkgLevelVar');

/**
 * Common variables.
 */
class Variables {
 constructor() {
   // package level variables
   this[_pkgLevelVar] = {
     default: {
      output_dir: '/.output',
      configs_file: '_configs.json'
     }
   };
 }

  set pkg(varValue) {
    Object.assign(this[_pkgLevelVar], varValue);
  }

  get pkg() {
    return this[_pkgLevelVar];
  }
}

module.exports = new Variables();
