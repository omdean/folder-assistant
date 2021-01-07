'use strict';

const fs = require('fs');

const Output = require('../output');
const constants = require('../constants');

const fsPromise = fs.promises;

/**
 * Directory operation class
 */
class Directory {
  constructor() {
  }

  static readdir(path) {
    // fs.Dirent
    const dirent = fs.readdirSync(path, { withFileTypes: true });
    const result = [];
    for (let item of dirent) {
      if (!item.isFile()) continue;
      result.push(item.name);
    }
    return result;
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
   * To create new directory in synchronous way.
   * 
   * @param {string} path - absolute path
   */
  static createSync(path) {
    try {
      if (fs.existsSync(path)) return;
      fs.mkdirSync(path);
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
