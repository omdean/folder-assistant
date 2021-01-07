'use strict';

const fs = require('fs');
const YAML = require('yaml');

class ConfigUtils {

  /**
   * To load config file with yaml format.
   * 
   * @param {String} filePath - config file path
   * 
   * @returns {Object} content in JSON format
   */
  static loadYAMLConfig(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    return YAML.parse(content);
  }
}

module.exports = ConfigUtils;
