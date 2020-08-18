<script>
  import { default as config } from 'configs/operational/navigation.json';
  import NavLink from 'components/core/navLink/NavLink.svelte';
  import AsideGroup from './AsideGroup.svelte';

  export let filter;
</script>

<div
  class="txcm-asideNavGroup">
    <NavLink
      linkClass="txcm-asideNavLink"
      to="/dashboard/operational">
        Операционный дашборд
    </NavLink>
    <AsideGroup
      categories={config}
      {filter} />
</div>
