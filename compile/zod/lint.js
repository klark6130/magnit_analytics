#!/usr/bin/env node

const zod = require('./index');

function start() {
  zod.lintResources();
}

start();
