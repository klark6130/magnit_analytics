<script>
  import { default as config } from 'configs/operationalNavigation.json';
  import DashboardListGroup from 'components/dashboardList/DashboardListGroup.svelte';
  import NavLink from 'components/core/navLink/NavLink.svelte';
</script>

<div
  class="txcm-dashboardNavGroup">
    <NavLink
      linkClass="txcm-dashboardNavLink"
      to="/">
        Операционный дашборд
    </NavLink>
    {#each config as group, index}
      <DashboardListGroup
        label={group.label}>
          {#each group.links as link}
            <NavLink
              linkClass="txcm-dashboardNavGroupLink"
              to={link.href}>
                {link.label}
            </NavLink>
          {/each}
      </DashboardListGroup>
    {/each}
</div>
