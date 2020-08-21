<script>
  import { getActiveIndicatorsState } from 'state/indicators';
  import KPIRow from 'components/kpi/KPIRow.svelte';

  export let config;

  const indicators = Object.values(config).reduce(flattenCategories, {});
  const activeIndicators = getActiveIndicatorsState();

  function flattenCategories(results, group) {
    return { ...results, ...group.indicators.reduce(flattenIndicators, {}) };
  }

  function flattenIndicators(acc, indicator) {
    return { ...acc, [indicator.name]: indicator };
  }
</script>

<section
  class="txcm-overviewSection">
    {#each $activeIndicators as activeIndicator}
      <KPIRow
        indicator={indicators[activeIndicator]} />
    {/each}
</section>
