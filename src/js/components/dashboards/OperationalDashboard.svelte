<script>
  import IndicatorsMenu from 'components/indicators/IndicatorsMenu.svelte';
  import IndicatorsToggle from 'components/indicators/IndicatorsToggle.svelte';
  import Filter from 'components/filter/Filter.svelte';
  import { default as filterConfig } from 'configs/filterOperational.json';
  import { default as indicatorsConfig } from 'configs/indicatorsOperational.json';

  export let settings;
</script>

<Filter
  config={filterConfig} />
<IndicatorsMenu
  config={indicatorsConfig} />
<IndicatorsToggle />
