<script>
  import { default as config } from 'configs/financial/navigation.json';
  import NavLink from 'components/core/navLink/NavLink.svelte';
  import AsideGroup from './AsideGroup.svelte';

  export let filter;
</script>

<div
  class="txcm-asideNavGroup">
    <NavLink
      linkClass="txcm-asideNavLink"
      to="/dashboard/financial">
        Финансовый дашборд
        <svg
          class="txcm-asideNavLinkIcon">
            <use
              xlink:href="#txspt-icons-checkmark" />
        </svg>
    </NavLink>
    <AsideGroup
      categories={config}
      {filter} />
</div>
