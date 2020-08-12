<script>
  import NavLink from 'core/navLink/NavLink.svelte';
  import DashboardListFilter from '../dashboardListFilter/DashboardListFilter.svelte'
  import DashboardNavigationFinancialGroups from './DashboardNavigationFinancialGroups.svelte'
  import DashboardNavigationOperationslGroups from './DashboardNavigationOperationslGroups.svelte'
</script>

<nav
  class="txcm-dashboardNavigation">
    <div
      class="txcm-dashboardNavigationHeader">
        Выбор показателя
    </div>
    <DashboardListFilter />
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
