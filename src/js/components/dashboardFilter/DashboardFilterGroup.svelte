<script>
  import DashboardFilterElement from './DashboardFilterElement.svelte';

  export let group;
</script>

<div class="txcm-dashboardFilterGroup">
  {#each group as element}
    <DashboardFilterElement
      {element} />
  {/each}
</div>
