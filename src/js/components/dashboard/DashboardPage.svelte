<script>
  import Header from 'components/header/Header.svelte';
  import DashboardMenu from 'components/dashboardMenu/DashboardMenu.svelte';
  import Menu from 'components/menu/Menu.svelte';
  import FinancialDashboard from './FinancialDashboard.svelte';
  import OperationalDashboard from './OperationalDashboard.svelte';
  import ExportDashboard from './ExportDashboard.svelte';

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
<DashboardMenu />
<svelte:component
  this={pickDashboard(section)}
  {settings} />
