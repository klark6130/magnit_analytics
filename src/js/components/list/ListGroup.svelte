<script>
  export let label;

  let isActive = false;

  function toggle() {
    isActive = !isActive;
  }

  function onToggleClick() {
    toggle();
  }
</script>

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
<div
  class="txcm-listGroup"
  class:txcm-listGroup-is-active={isActive}>
    <slot />
</div>
