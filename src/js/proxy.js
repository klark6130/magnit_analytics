/* eslint no-var: "off" */
/* eslint prefer-destructuring: "off" */
/* eslint prefer-template: "off" */

var baseURL = 'http://private-4d06fb-magnit1.apiary-mock.com/';

function processResponse(response) {
  return response.json();
}

function dispatchUpdateEvent(data) {
  const event = new CustomEvent('dataupdate', { detail: data.results });
  window.dispatchEvent(event);
}

function fetchRequest(url) {
  fetch(url)
    .then(processResponse)
    .then(dispatchUpdateEvent);
}

function requestDataWithOption() {
  var url = baseURL + 'datawithoptions';
  fetchRequest(url);
}

function requestDefaultData() {
  var url = baseURL + 'defaultdata';
  fetchRequest(url);
}

function checkOption(option) {
  return option !== null;
}

function requestData(conditions) {
  var withOptions = Object.values(conditions).some(checkOption);
  if (withOptions) requestDataWithOption();
  else requestDefaultData();
}

function onDataRequest(event) {
  var detail = event.detail;
  requestData(detail);
}

window.addEventListener('datarequest', onDataRequest);
