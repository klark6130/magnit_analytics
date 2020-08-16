<script>
  export let label;
  export let note = null;
  export let isActive;

  $: updateEvents(isActive);

  function show() {
    isActive = true;
  }

  function hide() {
    isActive = false;
  }

  function isCloseKey(keyCode) {
    return keyCode === 27;
  }

  function onKeyUp({ keyCode }) {
    if (isCloseKey(keyCode) && isActive) hide();
  }

  function onWindowClick() {
    hide();
  }

  function subscribeWindow() {
    window.addEventListener('click', onWindowClick);
    window.addEventListener('keyup', onKeyUp);
  }

  function unsubscribeWindow() {
    window.removeEventListener('click', onWindowClick);
    window.removeEventListener('keyup', onKeyUp);
  }

  function updateEvents() {
    if (isActive) subscribeWindow();
    else unsubscribeWindow();
  }

  function renderToggleLabel() {
    if (note) return `${label} (${note})`;
    return label;
  }

  function onToggleClick() {
    if (!isActive) setTimeout(show, 5);
  }
</script>

<button
  class="txcm-datepickerToggle"
  class:txcm-datepickerToggle-is-active={isActive}
  on:click={onToggleClick}>
    {renderToggleLabel()}
    <svg
      class="txcm-datepickerToggleIcon">
        <use
          xlink:href="#txspt-icons-fatArrow" />
    </svg>
</button>
