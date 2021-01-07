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
}

module.exports = File;
