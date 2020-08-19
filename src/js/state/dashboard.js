import { initState, updateData, getStateData, getState, subscribe } from '../utilities/state';

const DASHBOARD_INITIAL_STATE = {
  units: 0,
};

let dashboardState;

function generateDates() {
  const date = new Date();
  const timestamp = date.getTime();
  const timestampYoY = date.setFullYear(date.getFullYear() - 1);
  return {
    date: timestamp,
    dateYoY: timestampYoY,
  };
}

function generateInititalState() {
  return {
    ...generateDates(),
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
