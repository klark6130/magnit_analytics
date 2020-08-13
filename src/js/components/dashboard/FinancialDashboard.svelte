<script>
  import { default as filterConfig } from 'configs/financialFilter.json';
  import { default as indicatorsConfig } from 'configs/financialIndicators.json';
  import DashboardFilter from 'components/dashboardFilter/DashboardFilter.svelte';
  import DashboardIndicatorsMenu from 'components/dashboardIndicators/DashboardIndicatorsMenu.svelte';
  import DashboardIndicatorsToggle from 'components/dashboardIndicators/DashboardIndicatorsToggle.svelte';

  export let settings;
</script>

<DashboardFilter
  config={filterConfig} />
<DashboardIndicatorsMenu
  config={indicatorsConfig} />
<DashboardIndicatorsToggle />
