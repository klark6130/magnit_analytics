const chalk = require('chalk');
const concurrently = require('concurrently');
const path = require('path');
const glob = require('glob');
const grundy = require('../grundy');
const lobo = require('../lobo');
const starro = require('../starro');
const mxy = require('../mxy');
const metallo = require('../metallo');

const ICON = path.join(__dirname, 'zod.jpg');

const CONCURRENTLY_PROCESSES = [
  'node ./compile/amazo/start.js',
  'node ./compile/bizarro/start.js',
  'node ./compile/mongul/start.js',
];

const CONCURRENTLY_OPTIONS = {
  prefix: 'none',
  killOthers: ['failure', 'success'],
  restartTries: 3,
};

function onError(error) {
  mxy.error(error, ICON);
}

function logMessage() {
  console.log(`${chalk.bgBlue(chalk.white('🎖️  development processes started '))}\n`);
  mxy.notify('development started', 'development processes have started', ICON);
}

function logStop() {
  console.log(`${chalk.bgBlue(chalk.white('🎖️  development processes stopped '))}\n`);
}

function logBuildMessage() {
  console.log(`${chalk.bgBlue(chalk.white('🎖️  building resources '))}\n`);
}

function logLintMessage() {
  console.log(`${chalk.bgBlue(chalk.white('🎖️  linting resources '))}\n`);
}

function logTestMessage() {
  console.log(`${chalk.bgBlue(chalk.white('🎖️  testing resources '))}\n`);
}

function startDevelopment() {
  logMessage();
  concurrently(CONCURRENTLY_PROCESSES, CONCURRENTLY_OPTIONS)
    .then(logStop)
    .catch(onError);
}

function detectToPath(type, filename) {
  if (type === 'styles') return `${metallo.getPath('styles').buildTo}/${filename}.css`;
  return `${metallo.getPath('js').buildTo}/${filename}.js`;
}

function buildResource(from, task, type) {
  const ext = path.extname(from);
  const filename = path.basename(from, ext);
  const to = detectToPath(type, filename);
  return task({ from, to });
}

function buildResourcePaths(type, from, task) {
  return new Promise((resolve) => {
    glob(from, (error, matches) => {
      if (matches.length > 0) Promise.all(matches.map(match => buildResource(match, task, type))).then(resolve);
      else resolve();
    });
  });
}

function buildResourceType(type) {
  if (type === 'styles') {
    const where = `${metallo.getPath('styles').from}/*.{css,scss}`;
    return buildResourcePaths(type, where, starro.buildStyles);
  } else if (type === 'js') {
    const where = `${metallo.getPath('js').from}/*.{js,svelte}`;
    return buildResourcePaths(type, where, lobo.buildScripts);
  }
  return Promise.resolve();
}

function buildResources() {
  const markupTo = path.join(metallo.getPath('markup').buildTo, metallo.getConfigComponent('markup'));
  logBuildMessage();
  const builds = [
    grundy.generateHTML(markupTo),
    buildResourceType('styles'),
    buildResourceType('js'),
  ];
  return Promise.all(builds);
}

function checkResourcePaths(where, task) {
  return new Promise((resolve) => {
    glob(where, (error, matches) => {
      if (matches.length > 0) task();
      resolve();
    });
  });
}

function checkResources(type, task) {
  if (type === 'styles') {
    const where = `${metallo.getPath('styles').from}/**/*.{css,scss}`;
    return checkResourcePaths(where, task);
  } else if (type === 'js') {
    const where = `${metallo.getPath('js').from}/**/*.test.js`;
    return checkResourcePaths(where, task);
  }
  return Promise.resolve();
}

function lintResources() {
  logLintMessage();
  checkResources('styles', starro.lintStyles);
  checkResources('js', lobo.lintScripts);
}

function testResources() {
  logTestMessage();
  checkResources('js', lobo.testScripts);
}

exports.startDevelopment = startDevelopment;
exports.buildResources = buildResources;
exports.lintResources = lintResources;
exports.testResources = testResources;
