<script>
  import DashboardDrawer from 'components/dashboardDrawer/DashboardDrawer.svelte';
  import DashboardIndicators from './DashboardIndicators.svelte';

  export let config;
</script>

<DashboardDrawer
  store="indDrawer">
    <DashboardIndicators
      {config} />
</DashboardDrawer>
