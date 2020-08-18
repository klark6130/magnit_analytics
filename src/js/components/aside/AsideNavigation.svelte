<script>
  import ListFilter from 'components/list/ListFilter.svelte';
  import AsideNavigationFinancial from './AsideNavigationFinancial.svelte';
  import AsideNavigationOperational from './AsideNavigationOperational.svelte';

  let filter = '';
</script>

<nav
  class="txcm-asideNavigation">
    <div
      class="txcm-asideNavigationHeader">
        Выбор показателя
    </div>
    <ListFilter
      bind:value={filter} />
    <AsideNavigationFinancial
      {filter} />
    <AsideNavigationOperational
      {filter} />
</nav>
