import { default as config } from 'configs/api.json';

function generateURL(endpoint) {
  return `${config.apiBase}/${endpoint}`;
}

function getFromServer(endpoint) {
  const url = generateURL(endpoint);
  return fetch(url).then(processResponse);
}

function postToServer(endpoint, data) {
  const url = generateURL(endpoint);
  const options = { method: 'POST', body: JSON.stringify(data) };
  return fetch(url, options).then(processResponse);
}

function processResponse(response) {
  return response.json();
}

export function user() {
  return getFromServer('user');
}

export function auth(login, password) {
  return postToServer('auth', { login, password });
}

export function logout() {
  return postToServer('logout');
}
