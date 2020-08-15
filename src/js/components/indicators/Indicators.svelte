<script>
  import { initIndicators } from 'state/indicators';
  import ListFilter from 'components/list/ListFilter.svelte';
  import IndicatorsActiveList from './IndicatorsActiveList.svelte';
  import IndicatorsList from './IndicatorsList.svelte';

  export let config;

  initIndicators(config);
</script>

<div
  class="txcm-indicatorsHeader">
    Добавить показатели
</div>
<ListFilter />
<IndicatorsActiveList
  {config} />
<IndicatorsList
  {config} />
