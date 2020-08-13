<script>
  import { initIndicators } from 'state/indicators';
  import DashboardListFilter from 'components/dashboardList/DashboardListFilter.svelte';
  import DashboardIndicatorsActive from './DashboardIndicatorsActive.svelte';
  import DashboardIndicatorList from './DashboardIndicatorList.svelte';

  export let config;

  initIndicators(config);
</script>

<div
  class="txcm-dashboardIndicatorsHeader">
    Добавить показатели
</div>
<DashboardListFilter />
<DashboardIndicatorsActive
  {config} />
<DashboardIndicatorList
  {config} />
