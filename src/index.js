'use strict';

const path = require('path');

const constants = require('./constants');
const ConfigUtils = require('./lib/configUtils');
const Directory = require('./lib/directory');
const File = require('./lib/file');

function loadConfig(rootDirName) {
  const parentDir = `${rootDirName}/src/configs`;
  const configFiles = Directory.readdir(parentDir);
  const configMap = {};
  let outputDir = null;

  for (let file of configFiles) {
    const configDetail = ConfigUtils.loadYAMLConfig(`${parentDir}/${file}`);
    const obj = path.parse(file);
    if (obj.ext !== '.yml') continue;
    const itemName = constants.CONFIG_ITEM_NAME[obj.name] || `_${obj.name}`;
    configMap[itemName] = configDetail;
    if (constants.CONFIG_ITEM_NAME.package === obj.name) {
      outputDir = configDetail['output_dir'];
    }
  }

  if (!outputDir) return;
  Directory.createSync(`${rootDirName}${outputDir}`);
  File.createSync(`${rootDirName}${outputDir}/_configs.json`, JSON.stringify(configMap));
}

module.exports = {
  loadConfig
};
