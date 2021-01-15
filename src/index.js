'use strict';

const path = require('path');

const constants = require('./constants');
const ConfigUtils = require('./lib/configUtils');
const Directory = require('./lib/directory');
const File = require('./lib/file');
const variables = require('./lib/variables');

function loadConfig(rootDirName) {
  const {
    outputDir: outputRelativeDir,
    configsFile: configsFileName
  } = variables.default;
  const outputDir = `${rootDirName}${outputRelativeDir}`;
  const configsFilePath = `${outputDir}/${configsFileName}`;
  const content = File.readSync(configsFilePath);

  if (content) {
    variables.json = JSON.parse(content);
    return;
  }

  const parentDir = `${rootDirName}/src/configs`;
  const configFiles = Directory.readdir(parentDir);
  const configMap = {};

  for (let file of configFiles) {
    const configDetail = ConfigUtils.loadYAMLConfig(`${parentDir}/${file}`);
    const obj = path.parse(file);
    if (obj.ext !== '.yml') continue;
    const itemName = constants.CONFIG_ITEM_NAME[obj.name] || `_${obj.name}`;
    configMap[itemName] = configDetail;
    variables[itemName] = configDetail;
  }

  Directory.createSync(outputDir);
  File.createSync(configsFilePath, JSON.stringify(configMap));
}

function init() {
  const { rootDir, subDirs = [] } = variables.directory;
  Directory.createSync(rootDir);
  for (let dir of subDirs) {
    Directory.createSync(`${rootDir}/${dir.name}`);
  }
}

module.exports = {
  loadConfig,
  init
};
