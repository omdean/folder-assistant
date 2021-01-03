'use strict';

const fs = require('fs');

const Output = require('./output');
const constants = require('./constants');

const fsPromise = fs.promises;

/**
 * Directory operation class
 */
class Directory {
  constructor() {
  }

  /**
   * To create new directory by specific path.
   * 
   * @param {string} path - absolute path
   */
  static async create(path) {
    try {
      if (fs.existsSync(path)) return;
      await fsPromise.mkdir(path);
      Output.stdout(constants.ACTION.createDir, `"${path}"`);
    } catch (error) {
      Output.stderr(constants.ACTION.createDir, error);
    }
  }

  /**
   * To delete the specific directory.
   * 
   * @param {string} path - absolute path
   */
  static delete(path) {

  }
}

module.exports = Directory;
