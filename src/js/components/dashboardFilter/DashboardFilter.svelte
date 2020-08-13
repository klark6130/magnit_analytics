<script>
  import { initFilter } from 'state/filter';
  import DashboardFilterGroup from './DashboardFilterGroup.svelte';

  export let config;

  initFilter(config);
</script>

<div class="txcm-dashboardFilter">
  {#each config as group}
    <DashboardFilterGroup
      {group} />
  {/each}
</div>
