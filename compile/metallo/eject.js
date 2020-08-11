#!/usr/bin/env node

const metallo = require('./index');

function eject() {
  const types = process.argv.slice(2);
  const [ category ] = types;
  if (category === 'component') metallo.ejectComponentConfigs();
  else if (category === 'library') metallo.ejectLibraryConfigs();
  else if (category === 'store') metallo.ejectStoreConfigs();
  else metallo.ejectConfigs(types);
}

eject();
