<script>
  import HeaderDatepicker from './HeaderDatepicker.svelte';
  import HeaderDatepickerYOY from './HeaderDatepickerYOY.svelte';
  import HeaderUnits from './HeaderUnits.svelte';

  export let dashboard;

  $: isUnitsActive = dashboard === 'financial';
</script>

<HeaderDatepicker />
<HeaderDatepickerYOY />
{#if isUnitsActive}
  <HeaderUnits />
{/if}
