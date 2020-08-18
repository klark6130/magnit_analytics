<script>
  import { initIndicators } from 'state/indicators';
  import ListFilter from 'components/list/ListFilter.svelte';
  import IndicatorsActiveList from './IndicatorsActiveList.svelte';
  import IndicatorsList from './IndicatorsList.svelte';

  export let config;

  let filter = '';

  initIndicators(config);
</script>

<div
  class="txcm-indicatorsHeader">
    Добавить показатели
</div>
<ListFilter
  bind:value={filter} />
<IndicatorsActiveList
  {config} />
<IndicatorsList
  {config}
  {filter} />
