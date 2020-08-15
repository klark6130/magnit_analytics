<script>
  import FilterElement from './FilterElement.svelte';

  export let group;
</script>

<div class="txcm-filterGroup">
  {#each group as element}
    <FilterElement
      {element} />
  {/each}
</div>
