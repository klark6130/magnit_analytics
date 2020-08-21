<script>
  import IndicatorsMenu from 'components/indicators/IndicatorsMenu.svelte';
  import IndicatorsToggle from 'components/indicators/IndicatorsToggle.svelte';

  export let config;
</script>

<IndicatorsToggle />
<IndicatorsMenu
  {config} />
