<script>
  import { createEventDispatcher } from 'svelte';
  import { focusTrap } from 'utilities/focusTrap';

  export let isActive;

  const dispatch = createEventDispatcher();

  $: switchKeys(isActive);

  function isCloseKey(keyCode) {
    return keyCode === 27;
  }

  function subscribeKeys() {
    window.addEventListener('keyup', onKeyUp);
  }

  function unsubscribeKeys() {
    window.removeEventListener('keyup', onKeyUp);
  }

  function switchKeys() {
    if (isActive) subscribeKeys();
    else unsubscribeKeys();
  }

  function hide() {
    if (isActive) dispatch('overlayclose');
  }

  function onKeyUp({ keyCode }) {
    if (isCloseKey(keyCode) && isActive) hide();
  }
</script>

<div
  use:focusTrap
  class="txcm-overlay"
  class:txcm-overlay-is-visible={isActive}>
    <slot />
</div>
