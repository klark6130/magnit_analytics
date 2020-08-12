import App from './components/App.svelte';
import { initUI } from './state/ui';

function startApp() {
  initUI();
  return new App({ target: document.body });
}

startApp();
