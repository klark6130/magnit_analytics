<script>
  import KPICell from './KPICell.svelte';

  export let indicator;
</script>

<div
  class="txcm-kpiRow">
  <div
    class="txcm-kpiLabel">
      {indicator.label}
  </div>
  <KPICell />
  <KPICell />
</div>
