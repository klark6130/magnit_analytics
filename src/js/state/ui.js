import { initState, updateData, changeData, toggleData, getStateData, getState, subscribe } from '../utilities/state';

const UI_INITIAL_STATE = {
  menu: false,
  menuDashNav: false,
  aside: false,
  indicators: false,
  locale: 'ru',
};

let uiState;

export function initUI() {
  uiState = initState({ ...UI_INITIAL_STATE });
}

export function updateUI(update) {
  updateData(uiState, update);
}

export function changeUI(change) {
  changeData(uiState, change);
}

export function toggleUI(keys) {
  toggleData(uiState, keys);
}

export function subscribeUI(key, task) {
  return subscribe(uiState, key, task);
}

export function getUIData(keys) {
  return getStateData(uiState, keys);
}

export function getUIState(keys) {
  return getState(uiState, keys);
}
