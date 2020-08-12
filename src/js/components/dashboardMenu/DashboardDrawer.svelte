<script>
  import { onDestroy } from 'svelte';
  import Overlay from 'core/overlay/Overlay.svelte';
  import { subscribeUI, updateUI } from '../../state/ui';
  import DashboardNavigation from './DashboardNavigation.svelte';

  export let isActive = false;

  const unsubscribeUI = subscribeUI('dashDrawer', onDashDrawerChange);

  function onDashDrawerChange(update) {
    isActive = update;
  }

  function onCloseClick() {
    updateUI({ dashDrawer: false });
  }

  onDestroy(unsubscribeUI);
</script>

<Overlay
  {isActive}>
  <div
    class="txcm-dashboardDrawer"
    class:txcm-dashboardDrawer-is-active={isActive}>
      <DashboardNavigation />
      <button
        class="txcm-dashboardDrawerClose"
        on:click={onCloseClick}>
          Закрыть
      </button>
  </div>
</Overlay>
