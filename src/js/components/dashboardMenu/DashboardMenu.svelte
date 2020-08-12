<script>
  import DashboardDrawer from '../dashboardDrawer/DashboardDrawer.svelte';
  import DashboardNavigation from './DashboardNavigation.svelte';
</script>

<DashboardDrawer
  store="dashDrawer">
    <DashboardNavigation />
</DashboardDrawer>
