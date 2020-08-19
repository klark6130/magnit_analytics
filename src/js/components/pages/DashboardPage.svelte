<script>
  import DashboardFinancial from 'components/dashboards/DashboardFinancial.svelte';
  import DashboardOperational from 'components/dashboards/DashboardOperational.svelte';
  import Header from 'components/header/Header.svelte';
  import Menu from 'components/menu/Menu.svelte';
  import Tooltip from 'components/tooltip/Tooltip.svelte';
  import AsideMenu from 'components/aside/AsideMenu.svelte';

  const DASHBOARDS = {
    financial: DashboardFinancial,
    operational: DashboardOperational,
  };

  export let dashboard;
  export let indicator;

  function pickDashboard(key) {
    if (DASHBOARDS[key]) return DASHBOARDS[key];
    return DASHBOARDS.financial;
  }
</script>

<Header
  {dashboard}
  {indicator} />
<Menu />
<AsideMenu />
<svelte:component
  this={pickDashboard(dashboard)} />
<Tooltip />
