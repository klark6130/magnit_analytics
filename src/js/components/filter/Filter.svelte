<script>
  import FilterGroup from './FilterGroup.svelte';

  export let config;

  let filter;

  function shouldScroll(deltaX, deltaY) {
    return Math.abs(deltaX) > 0 && Math.abs(deltaX) > Math.abs(deltaY);
  }

  function scrollFilter(deltaX) {
    filter.scrollLeft += deltaX;
  }

  function onWheel(event) {
    const { deltaX, deltaY } = event;
    if (shouldScroll(deltaX, deltaY)) {
      event.preventDefault();
      event.stopPropagation();
      scrollFilter(deltaX);
    }
  }
</script>

<div
  class="txcm-filter"
  bind:this={filter}
  on:wheel={onWheel}>
    {#each config as group}
      <FilterGroup
        {group} />
    {/each}
</div>
