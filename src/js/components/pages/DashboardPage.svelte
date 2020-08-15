<script>
  import FinancialDashboard from 'components/dashboards/FinancialDashboard.svelte';
  import OperationalDashboard from 'components/dashboards/OperationalDashboard.svelte';
  import ExportDashboard from 'components/dashboards/ExportDashboard.svelte';
  import Header from 'components/header/Header.svelte';
  import Menu from 'components/menu/Menu.svelte';
  import AsideMenu from 'components/aside/AsideMenu.svelte';

  const DASHBOARDS = {
    financial: FinancialDashboard,
    operational: OperationalDashboard,
    export: ExportDashboard,
  };

  export let location;
  export let section;
  export let settings;

  function pickDashboard(key) {
    if (DASHBOARDS[key]) return DASHBOARDS[key];
    return DASHBOARDS.financial;
  }
</script>

<Header
  {section} />
<Menu />
<AsideMenu />
<svelte:component
  this={pickDashboard(section)}
  {settings} />
