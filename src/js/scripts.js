import App from './components/App.svelte';

function startApp() {
  return new App({ target: document.body });
}

startApp();
