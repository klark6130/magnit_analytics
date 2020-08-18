<script>
  import HeaderDashboardToggle from './HeaderDashboardToggle.svelte';
  import HeaderTabs from './HeaderTabs.svelte';
  import HeaderFilter from './HeaderFilter.svelte';
  import HeaderNavigation from './HeaderNavigation.svelte';

  export let dashboard;
  export let indicator;

  $: isTabsActive = indicator;
</script>

<header
  class="txcm-header">
    <HeaderDashboardToggle />
    {#if isTabsActive}
      <HeaderTabs
        {dashboard}
        {indicator} />
    {/if}
    <HeaderFilter
      {dashboard} />
    <HeaderNavigation />
</header>
