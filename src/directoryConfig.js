'use strict';

const fs = require('fs');
const path = require('path');
const YAML = require('yaml');

const Directory = require('./directory');

const DEFAULT_FILE_PATH = path.join(__dirname, '../dir_config.yml');

class DirectoryConfig {
  constructor(filePath) {
    this.configFilePath = filePath || DEFAULT_FILE_PATH;
    this._load();
  }

  _load() {
    const content = fs.readFileSync(this.configFilePath, 'utf8');
    this.json = YAML.parse(content);
  }

  async init() {
    const { root_dir, sub_dirs } = this.json;
    if (!root_dir) return;
    await Directory.create(root_dir);
  }
}

module.exports = new DirectoryConfig();
