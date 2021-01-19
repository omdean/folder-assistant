'use strict';

const path = require('path');
const os = require('os');

const constants = require('./constants');
const ConfigUtils = require('./lib/configUtils');
const Directory = require('./lib/directory');
const File = require('./lib/file');
const variables = require('./lib/variables');

const homedir = os.homedir();

function loadConfig(workingDir) {
  const {
    outputDir: outputRelativeDir,
    configsFile: configsFileName
  } = variables.default;
  const outputDir = `${homedir}/${outputRelativeDir}`;
  const configsFilePath = `${outputDir}/${configsFileName}`;
  const content = File.readSync(configsFilePath);

  if (content) {
    variables.json = JSON.parse(content);
    return;
  }

  // the directory that contain config files
  const parentDir = `${workingDir}/configs`;
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

  // cache all configs into one file.
  Directory.createSync(outputDir);
  File.createSync(configsFilePath, JSON.stringify(configMap));
}

function init() {
  const { rootDir, subDirs = [] } = variables.directory;
  const fullPath = `${homedir}/${rootDir}`;
  Directory.createSync(fullPath);
  for (let dir of subDirs) {
    Directory.createSync(`${fullPath}/${dir.name}`);
  }
}

module.exports = {
  loadConfig,
  init
};
