<script>
  import { getActiveIndicatorsState } from 'state/indicators';
  import { getDataStore } from 'state/data';
  import KPIRow from 'components/kpi/KPIRow.svelte';

  export let config;

  const data = getDataStore();
  const activeIndicators = getActiveIndicatorsState();

  const indicators = Object.values(config).reduce(flattenCategories, {});

  $: indicatorData = $data ? Object.values($data).reduce(flattenIndicators, {}) : null;

  function flattenCategories(results, group) {
    return { ...results, ...group.indicators.reduce(flattenIndicators, {}) };
  }

  function flattenIndicators(acc, indicator) {
    return { ...acc, [indicator.name]: indicator };
  }
</script>

<section
  class="txcm-overviewSection">
  {#if indicatorData}
    {#each $activeIndicators as activeIndicator (activeIndicator)}
      <KPIRow
        indicator={indicators[activeIndicator]}
        data={indicatorData[activeIndicator]} />
    {/each}
  {/if}
</section>
