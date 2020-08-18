<script context="module">
  function isCloseKey(keyCode) {
    return keyCode === 27;
  }

  function isPrevKey(keyCode) {
    return keyCode === 38;
  }

  function isNextKey(keyCode) {
    return keyCode === 40;
  }

  function isEnterKey(keyCode) {
    return keyCode === 13;
  }
</script>

<script>
  import SelectOption from './SelectOption.svelte';

  export let label;
  export let pick;
  export let name;
  export let options;
  export let theme = '';

  let node;

  let highlight = null;
  let isActive = false;

  $: updateEvents(isActive);
  $: hide(pick);

  function hasSelected() {
    return pick !== null;
  }

  function findHighlight() {
    if (pick) return options.findIndex(option => option.value === pick);
    return 0;
  }

  function renderToggleLabel() {
    if (pick === null) return label;
    return options[pick].label;
  }

  function show() {
    isActive = true;
  }

  function highlightPrev() {
    if (highlight === null) highlight = findHighlight();
    if (highlight === 0) highlight = options.length - 1;
    else highlight -= 1;
  }

  function highlightNext() {
    if (highlight === null) highlight = findHighlight();
    if (highlight === (options.length - 1)) highlight = 0;
    else highlight += 1;
  }

  function pickHighlighted() {
    if (isActive && highlight !== null) {
      if (pick !== options[highlight].value) pick = options[highlight].value;
      else pick = null;
    }
  }

  function hide() {
    if (isActive) isActive = false;
  }

  function scrollOptions(delta) {
    if (delta !== 0) {
      const step = delta < 0 ? -32 : 32;
      requestAnimationFrame(() => { node.scrollTop += step; });
    }
  }

  function onToggleClick() {
    if (!isActive) setTimeout(show, 5);
  }

  function onWindowClick() {
    hide();
  }

  function onKeyUp({ keyCode }) {
    if (isCloseKey(keyCode)) hide();
    else if (isPrevKey(keyCode)) highlightPrev();
    else if (isNextKey(keyCode)) highlightNext();
    else if (isEnterKey(keyCode)) pickHighlighted();
  }

  function onWheel({ deltaY }) {
    scrollOptions(deltaY);
  }

  function subscribeWindow() {
    window.addEventListener('click', onWindowClick);
    window.addEventListener('keyup', onKeyUp);
    if (node) node.addEventListener('wheel', onWheel);
  }

  function unsubscribeWindow() {
    window.removeEventListener('click', onWindowClick);
    window.removeEventListener('keyup', onKeyUp);
    if (node) node.addEventListener('wheel', onWheel);
  }

  function updateEvents() {
    if (isActive) subscribeWindow();
    else unsubscribeWindow();
  }
</script>

<div
  class={`txcm-select ${theme}`}>
    <button
      class="txcm-selectToggle"
      class:txcm-selectToggle-has-selected={hasSelected(pick)}
      on:click={onToggleClick}>
        {renderToggleLabel(pick)}
        <svg
          class="txcm-selectToggleIcon">
            <use
              xlink:href="#txspt-icons-fatArrow" />
        </svg>
    </button>
    <ul
      class="txcm-selectOptions"
      class:txcm-selectOptions-is-active={isActive}
      bind:this={node}>
        {#each options as option, index}
          <SelectOption
            bind:pick
            bind:highlight
            {...option}
            {name}
            {index}
            {isActive} />
        {/each}
    </ul>
</div>
