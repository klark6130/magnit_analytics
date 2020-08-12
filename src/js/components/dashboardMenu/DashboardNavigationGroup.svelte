<script>
  import NavLink from 'core/navLink/NavLink.svelte';

  export let label;
  export let links;

  let isActive = false;

  function toggle() {
    isActive = !isActive;
  }

  function onToggleClick() {
    toggle();
  }
</script>

<button
  class="txcm-dashboardNavGroupToggle"
  class:txcm-dashboardNavGroupToggle-is-active={isActive}
  on:click={onToggleClick}>
    {label}
</button>
<div
  class="txcm-dashboardNavGroup"
  class:txcm-dashboardNavGroup-is-active={isActive}>
    {#each links as link}
      <NavLink
        linkClass="txcm-dashboardNavGroupLink"
        to={link.href}>
          {link.label}
      </NavLink>
    {/each}
</div>
