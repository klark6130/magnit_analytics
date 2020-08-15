<script>
  import { getActiveIndicatorsState } from 'state/indicators';
  import IndicatorsControl from './IndicatorsControl.svelte';

  export let config;

  const options = config.reduce((flat, group) => [ ...flat, ...group.indicators], []);
  const store = getActiveIndicatorsState();

  let active = [];

  $: updateActive($store);

  function findActiveIndicator(name) {
    return options.find(option => option.name === name);
  }

  function updateActive() {
    active = $store.map(findActiveIndicator);
  }
</script>

<div class="txcm-indicatorsActive">
  {#each active as indicator (`${indicator.name}Active`)}
    <IndicatorsControl
      {...indicator} />
  {/each}
</div>
