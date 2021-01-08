'use strict';

const fs = require('fs');

const fsPromise = fs.promises;

class File {
  /**
   * To create file. 
   *
   * @param {String} filePath - file path
   * @param {String} content - file content
   */
  static async create(filePath, content) {
    await fsPromise.writeFile(filePath, content);
  }

  /**
   * To create file in synchronous way.
   *
   * @param {String} filePath - file path
   * @param {String} content - file content
   */
  static createSync(filePath, content) {
    fs.writeFileSync(filePath, content);
  }

  /**
   * To read file.
   *
   * @param {String} filePath - file path
   */
  static async read(filePath) {
    try {
      return await fsPromise.readFile(filePath, 'utf-8');
    } catch (error) {
      return null;
    }
  }

  /**
   * To read file in synchronous way.
   *
   * @param {String} filePath - file path
   */
  static readSync(filePath) {
    try {
      return fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
      return null;
    }
  }
}

module.exports = File;
