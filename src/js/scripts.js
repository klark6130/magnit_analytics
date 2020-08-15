import { initUI } from 'state/ui';
import App from 'components/App.svelte';

function startApp() {
  initUI();
  return new App({ target: document.body });
}

startApp();
