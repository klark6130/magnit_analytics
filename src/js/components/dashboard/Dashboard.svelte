<script>
  import { Route } from 'svelte-routing';
  import Header from '../header/Header.svelte';
  import DashboardDrawer from '../dashboardMenu/DashboardDrawer.svelte';
  import Menu from '../menu/Menu.svelte';
  import FinancialDashboard from './FinancialDashboard.svelte';
  import OperationalDashboard from './OperationalDashboard.svelte';
  import ExportDashboard from './ExportDashboard.svelte';
</script>

<Header />
<Menu />
<DashboardDrawer />
<Route
  path="/dashboard/financial/*settings">
    <FinancialDashboard />
</Route>
<Route
  path="/dashboard/operational/*settings">
    <OperationalDashboard />
</Route>
<Route
  path="/dashboard/export/*settings">
    <ExportDashboard />
</Route>
