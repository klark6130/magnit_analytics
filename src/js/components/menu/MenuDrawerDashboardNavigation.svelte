<script>
  import { onDestroy } from 'svelte';
  import { subscribeUI } from '../../state/ui';
  import DashboardNavigation from '../dashboardMenu/DashboardNavigation.svelte';

  export let isActive = false;

  const unsubscribeUI = subscribeUI('menuDashNav', onDashNavChange);

  function onDashNavChange(update) {
    isActive = update;
  }

  onDestroy(unsubscribeUI);
</script>

<div
  class="txcm-menuDrawerDashboardNav"
  class:txcm-menuDrawerDashboardNav-is-active={isActive}>
    <DashboardNavigation />
</div>
