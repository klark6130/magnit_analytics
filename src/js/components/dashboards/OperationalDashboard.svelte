<script>
  import IndicatorsMenu from 'components/indicators/IndicatorsMenu.svelte';
  import IndicatorsToggle from 'components/indicators/IndicatorsToggle.svelte';
  import Filter from 'components/filter/Filter.svelte';
  import { default as filterConfig } from 'configs/operational/filter.json';
  import { default as indicatorsConfig } from 'configs/operational/indicators.json';
</script>

<Filter
  config={filterConfig} />
<IndicatorsMenu
  config={indicatorsConfig} />
<IndicatorsToggle />
