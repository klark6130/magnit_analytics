<script>
  import HeaderDashboardToggle from './HeaderDashboardToggle.svelte';
  import HeaderTabs from './HeaderTabs.svelte';
  import HeaderFilter from './HeaderFilter.svelte';
  import HeaderNavigation from './HeaderNavigation.svelte';

  export let section;
</script>

<header
  class="txcm-header">
    <HeaderDashboardToggle />
    <HeaderTabs />
    <HeaderFilter />
    <HeaderNavigation />
</header>
