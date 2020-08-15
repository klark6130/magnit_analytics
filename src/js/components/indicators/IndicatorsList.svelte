<script>
  import ListGroup from 'components/list/ListGroup.svelte';
  import IndicatorsControl from './IndicatorsControl.svelte';

  export let config;
</script>

{#each config as group}
  <ListGroup
    label={group.label}>
      {#each group.indicators as indicator (indicator.name)}
        <IndicatorsControl
          {...indicator}
          exclude={true} />
      {/each}
  </ListGroup>
{/each}
