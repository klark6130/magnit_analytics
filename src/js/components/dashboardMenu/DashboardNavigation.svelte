<script>
  import NavLink from 'components/core/navLink/NavLink.svelte';
  import DashboardListFilter from 'components/dashboardList/DashboardListFilter.svelte'
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
    <DashboardNavigationFinancialGroups />
    <DashboardNavigationOperationslGroups />
</nav>
