<script>
  export let value = 141311;
  export let subValue = 24286;
  export let addValues = [22.76, 26203, 11.83, 14950]
</script>

<div
  class="txcm-kpiCell">
    <div
      class="txcm-kpiCellValue">
        {value}
    </div>
    <div
      class="txcm-kpiCellSubValue">
        {subValue}
    </div>
    {#each addValues as addValue}
      <div
        class="txcm-kpiCellAddValue">
          {addValue}
      </div>
    {/each}
</div>
