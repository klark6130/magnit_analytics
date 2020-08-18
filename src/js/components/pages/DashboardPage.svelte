<script>
  import FinancialDashboard from 'components/dashboards/FinancialDashboard.svelte';
  import OperationalDashboard from 'components/dashboards/OperationalDashboard.svelte';
  import Header from 'components/header/Header.svelte';
  import Menu from 'components/menu/Menu.svelte';
  import Tooltip from 'components/tooltip/Tooltip.svelte';
  import AsideMenu from 'components/aside/AsideMenu.svelte';

  const DASHBOARDS = {
    financial: FinancialDashboard,
    operational: OperationalDashboard,
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
