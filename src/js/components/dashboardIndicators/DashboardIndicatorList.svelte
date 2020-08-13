<script>
  import DashboardListGroup from 'components/dashboardList/DashboardListGroup.svelte';
  import DashboardIndicatorControl from './DashboardIndicatorControl.svelte';

  export let config;
</script>

{#each config as group}
  <DashboardListGroup
    label={group.label}>
      {#each group.indicators as indicator (indicator.name)}
        <DashboardIndicatorControl
          {...indicator} />
      {/each}
  </DashboardListGroup>
{/each}
