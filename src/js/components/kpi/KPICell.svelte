<script>
  import { formatNumber as fn } from 'utilities/formatters';

  export let name;
  export let value = null;
  export let subValue = null;
  export let addValues = [];
</script>

<div
  class="txcm-kpiCell">
    {#if value !== null}
      <div
        class="txcm-kpiCellValue">
          <svg
            class="txcm-kpiCellValueIcon txcm-kpiCellValueIcon-is-growing">
              <use
                xlink:href="#txspt-icons-fatArrow" />
          </svg>
          {fn(value)}
      </div>
    {/if}
    {#if subValue !== null}
      <div
        class="txcm-kpiCellSubValue">
          {fn(subValue)}
      </div>
    {/if}
    {#each addValues as addValue}
      <div
        class="txcm-kpiCellAddValue">
          {fn(addValue)}
      </div>
    {/each}
</div>
