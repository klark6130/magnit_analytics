<script>
  import DashboardDrawer from 'components/dashboardDrawer/DashboardDrawer.svelte';
  import DashboardNavigation from './DashboardNavigation.svelte';
</script>

<DashboardDrawer
  store="dashDrawer">
    <DashboardNavigation />
</DashboardDrawer>
