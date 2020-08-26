import { writable, get } from 'svelte/store';

let store;

function onDataUpdate(event) {
  store.set(event.detail);
}

function subscribeUpdates() {
  window.addEventListener('dataupdate', onDataUpdate);
}

function unsubscribeUpdates() {
  window.removeEventListener('dataupdate', onDataUpdate);
}

export function initData(data) {
  store = writable(data);
  subscribeUpdates();
}

export function subscribeData(task) {
  return store.subscribe(task);
}

export function getData() {
  return get(store);
}

export function getDataStore() {
  return store;
}

export function destroy() {
  unsubscribeUpdates();
}
