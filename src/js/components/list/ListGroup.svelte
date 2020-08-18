<script>
  export let label;
  export let count;
  export let length;
  export let filter;

  let isOpened = false;

  $: isEmpty = length > 0;
  $: isSingle = count === 1;
  $: isFiltered = !!filter;
  $: isActive = isSingle || isOpened || isFiltered;

  function toggle() {
    isOpened = !isOpened;
  }

  function onToggleClick() {
    toggle();
  }
</script>

{#if !isEmpty}
  {#if !isSingle}
    <button
      class="txcm-listGroupToggle"
      class:txcm-listGroupToggle-is-active={isActive}
      on:click={onToggleClick}>
        {label}
        <svg
          class="txcm-listGroupToggleIcon">
            <use
              xlink:href="#txspt-icons-fatArrow" />
        </svg>
    </button>
  {/if}
  <div
    class="txcm-listGroup"
    class:txcm-listGroup-is-active={isActive}>
      <slot />
  </div>
{/if}
