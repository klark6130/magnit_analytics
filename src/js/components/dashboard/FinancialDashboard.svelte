<script>
  import DashboardFilter from '../dashboardFilter/DashboardFilter.svelte';
  import DashboardIndicatorsMenu from '../dashboardIndicators/DashboardIndicatorsMenu.svelte';
  import DashboardIndicatorsToggle from '../dashboardIndicators/DashboardIndicatorsToggle.svelte';

  export let settings;
</script>

<DashboardFilter />
<DashboardIndicatorsMenu />
<DashboardIndicatorsToggle />
