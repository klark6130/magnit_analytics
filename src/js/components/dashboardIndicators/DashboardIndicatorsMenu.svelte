<script>
  import DashboardDrawer from '../dashboardDrawer/DashboardDrawer.svelte';
  import DashboardIndicators from './DashboardIndicators.svelte';
</script>

<DashboardDrawer
  store="indDrawer">
    <DashboardIndicators />
</DashboardDrawer>
