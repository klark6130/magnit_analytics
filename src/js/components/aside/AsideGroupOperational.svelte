<script>
  import { default as config } from 'configs/navigationOperational.json';
  import ListGroup from 'components/list/ListGroup.svelte';
  import NavLink from 'components/core/navLink/NavLink.svelte';
</script>

<div
  class="txcm-asideNavGroup">
    <NavLink
      linkClass="txcm-asideNavLink"
      to="/">
        Операционный дашборд
    </NavLink>
    {#each config as group, index}
      <ListGroup
        label={group.label}>
          {#each group.links as link}
            <NavLink
              linkClass="txcm-asideNavGroupLink"
              to={link.href}>
                {link.label}
            </NavLink>
          {/each}
      </ListGroup>
    {/each}
</div>
