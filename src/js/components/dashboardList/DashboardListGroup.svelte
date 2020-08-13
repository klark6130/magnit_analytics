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
  class="txcm-dashboardListGroupToggle"
  class:txcm-dashboardListGroupToggle-is-active={isActive}
  on:click={onToggleClick}>
    {label}
</button>
<div
  class="txcm-dashboardListGroup"
  class:txcm-dashboardListGroup-is-active={isActive}>
    <slot />
</div>
