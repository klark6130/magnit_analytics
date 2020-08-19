<script>
  import { onDestroy } from 'svelte';
  import Filter from 'components/filter/Filter.svelte';
  import Indicators from 'components/indicators/Indicators.svelte';
  import Overview from 'components/overview/Overview.svelte';
  import { initFilter, subscribeFilterAll } from 'state/filter';
  import { initIndicators } from 'state/indicators';

  export let filterConfig;
  export let indicatorsConfig;

  initFilter(filterConfig);
  initIndicators(indicatorsConfig);

  let conditions = {};

  const unsubscribeFilter = subscribeFilterAll(onFilterUpdate);

  function unsubscribe() {
    unsubscribeFilter.forEach((unsubscribeKey) => { unsubscribeKey(); });
  }

  function onFilterUpdate(key, update) {
    const shouldUpdate = Object.prototype.hasOwnProperty.call(conditions, key);
    conditions[key] = update;
    if (shouldUpdate) conditions = conditions;
  }

  onDestroy(unsubscribe);
</script>

<Filter
  config={filterConfig} />
<Indicators
  config={indicatorsConfig} />
<Overview />
