<script>
  import FilterGroup from './FilterGroup.svelte';

  export let config;
</script>

<div class="txcm-filter">
  {#each config as group}
    <FilterGroup
      {group} />
  {/each}
</div>
