<script>
  import { initFilter } from 'state/filter';
  import FilterGroup from './FilterGroup.svelte';

  export let config;

  initFilter(config);
</script>

<div class="txcm-filter">
  {#each config as group}
    <FilterGroup
      {group} />
  {/each}
</div>
