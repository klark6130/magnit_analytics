<script>
  import NavLink from 'components/core/navLink/NavLink.svelte';
  import ListFilter from 'components/list/ListFilter.svelte'
  import AsideGroupFinancial from './AsideGroupFinancial.svelte'
  import AsideGroupOperational from './AsideGroupOperational.svelte'
</script>

<nav
  class="txcm-asideNavigation">
    <div
      class="txcm-asideNavigationHeader">
        Выбор показателя
    </div>
    <ListFilter />
    <AsideGroupFinancial />
    <AsideGroupOperational />
</nav>
