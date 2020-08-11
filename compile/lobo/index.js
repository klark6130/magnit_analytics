/* eslint no-process-env: "off" */
/* eslint no-use-before-define: "off" */

const path = require('path');
const { exec } = require('child_process');
const chalk = require('chalk');
const rollup = require('rollup');
const rollupCommonJS = require('@rollup/plugin-commonjs');
const { nodeResolve: rollupResolve } = require('@rollup/plugin-node-resolve');
const rollupSvelte = require('rollup-plugin-svelte');
const rollupIncludePaths = require('rollup-plugin-includepaths');
const mxy = require('../mxy');
const metallo = require('../metallo');

const ICON = path.join(__dirname, 'lobo.jpg');

const ROLLUP_OPTIONS = {
  output: {
    sourcemap: true,
    format: 'iife',
    name: generateName(process.env.npm_package_name),
  },
  plugins: [
    rollupSvelte({
      dev: true,
    }),
    rollupResolve({
      browser: true,
      dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/'),
    }),
    rollupIncludePaths({
      include: {},
      paths: [metallo.getPath('js').include],
      external: [],
      extensions: ['.js', '.svele'],
    }),
    rollupCommonJS(),
  ],
};

function onError(error) {
  mxy.error(error, ICON);
}

function logMessage(from) {
  console.log(`${chalk.white('🐺 processing scripts:')} ${chalk.black(chalk.bgWhite(` ${from} `))}\n`);
}

function logSuccess(start, from) {
  console.log(`${chalk.white('🐺 scripts successfully processed:')} ${chalk.bgWhite(` ${chalk.black(`${from} – ${process.hrtime(start)[0]}s`)} `)}\n`);
  mxy.notify('scripts successfully processed', from, ICON);
}

function generateName(name) {
  return name ?
    name
      .replace(/^@yf(?:tools?|components?|apps?|utilities|stores?|t|c|a|u|s)\//u, '')
      .replace(/-(?:.)/gu, match => match.replace('-', '').toUpperCase())
    :
    'lobo';
}

function processSvelte(input) {
  return rollup.rollup({ input, plugins: ROLLUP_OPTIONS.plugins });
}

function saveJS(bundle, file) {
  return bundle.write({ file, ...ROLLUP_OPTIONS.output });
}

function processScripts({ from, to }) {
  const start = process.hrtime();
  logMessage(from);
  return processSvelte(from)
    .then(bundle => saveJS(bundle, to))
    .then(() => logSuccess(start, from))
    .catch(onError);
}

function buildScripts({ from, to }) {
  const start = process.hrtime();
  logMessage(from);
  return processSvelte(from)
    .then(bundle => saveJS(bundle, to))
    .then(() => logSuccess(start, from))
    .catch(onError);
}

function lintScripts() {
  const esLintProcess = exec(`./node_modules/.bin/eslint ${metallo.getPath('js').from} --color`);
  esLintProcess.on('exit', (code) => { if (code !== 0) throw new Error('Linting errors'); });
  esLintProcess.stdout.pipe(process.stdout);
  esLintProcess.stderr.pipe(process.stderr);
}

function testScripts() {
  process.env.NODE_ICU_DATA = './node_modules/full-icu';
  const jestProcess = exec(`./node_modules/.bin/jest ${metallo.getPath('js').from} --colors --coverage`);
  jestProcess.on('exit', (code) => { if (code !== 0) throw new Error('Failing tests'); });
  jestProcess.stdout.pipe(process.stdout);
  jestProcess.stderr.pipe(process.stderr);
}

exports.generateName = generateName;
exports.processScripts = processScripts;
exports.buildScripts = buildScripts;
exports.lintScripts = lintScripts;
exports.testScripts = testScripts;
