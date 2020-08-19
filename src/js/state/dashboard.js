import { initState, updateData, getStateData, getState, subscribe } from '../utilities/state';

const DASHBOARD_INITIAL_STATE = {
  units: 0,
};

let dashboardState;

function generateInititalState() {
  const date = new Date();
  const dateYoY = date - 86400000;
  return {
    date,
    dateYoY,
    ...DASHBOARD_INITIAL_STATE,
  };
}

export function initDashboard() {
  dashboardState = initState(generateInititalState());
}

export function updateDashboard(update) {
  updateData(dashboardState, update);
}

export function subscribeDashboard(key, task) {
  return subscribe(dashboardState, key, task);
}

export function getDashboardData(keys) {
  return getStateData(dashboardState, keys);
}

export function getDashboardState(keys) {
  return getState(dashboardState, keys);
}
