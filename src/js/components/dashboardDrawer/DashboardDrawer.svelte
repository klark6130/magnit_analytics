<script>
  import { onDestroy } from 'svelte';
  import Overlay from 'core/overlay/Overlay.svelte';
  import { subscribeUI, updateUI } from '../../state/ui';

  export let store;
  export let isActive = false;

  const unsubscribeUI = subscribeUI(store, onDashDrawerChange);

  function onDashDrawerChange(update) {
    isActive = update;
  }

  function onCloseClick() {
    updateUI({ [store]: false });
  }

  onDestroy(unsubscribeUI);
</script>

<Overlay
  {isActive}>
  <div
    class="txcm-dashboardDrawer"
    class:txcm-dashboardDrawer-is-active={isActive}>
      <slot />
      <button
        class="txcm-dashboardDrawerClose"
        on:click={onCloseClick}>
          Закрыть
      </button>
  </div>
</Overlay>
