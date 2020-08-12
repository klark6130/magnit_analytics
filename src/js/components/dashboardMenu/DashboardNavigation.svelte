<script>
  import NavLink from 'core/navLink/NavLink.svelte';
  import DashboardNavigationFilter from './DashboardNavigationFilter.svelte'
  import DashboardNavigationFinancialGroups from './DashboardNavigationFinancialGroups.svelte'
  import DashboardNavigationOperationslGroups from './DashboardNavigationOperationslGroups.svelte'
</script>

<nav
  class="txcm-dashboardNavigation">
    <div
      class="txcm-dashboardNavigationHeader">
        Выбор показателя
    </div>
    <DashboardNavigationFilter />
    <NavLink
      linkClass="txcm-dashboardNavLink"
      to="/">
        Финансовый дашборд
    </NavLink>
    <DashboardNavigationFinancialGroups />
    <NavLink
      linkClass="txcm-dashboardNavLink"
      to="/">
        Операционный дашборд
    </NavLink>
    <DashboardNavigationOperationslGroups />
</nav>
