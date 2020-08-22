import { initUI } from 'state/ui';
import { initFormatters } from 'utilities/formatters';
import App from 'components/App.svelte';

function startApp() {
  initFormatters();
  initUI();
  return new App({ target: document.body });
}

startApp();
