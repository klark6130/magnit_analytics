<script>
  import ListGroup from 'components/list/ListGroup.svelte';
  import { filterIndicatorCategories } from 'utilities/listFilter';
  import IndicatorsControl from './IndicatorsControl.svelte';

  export let config;
  export let filter;

  $: filtered = filterIndicatorCategories(config, filter);
</script>

{#each filtered as group}
  <ListGroup
    label={group.label}
    count={filtered.length}
    length={group.length}
    {filter}>
      {#each group.indicators as indicator (indicator.name)}
        <IndicatorsControl
          {...indicator}
          exclude={true} />
      {/each}
  </ListGroup>
{/each}
