<script>
  const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
</script>

<ul
  class="txcm-datepickerQuarters">
    {#each quarters as quarter}
      <li
        class="txcm-datepickerQuarter">
          <button
            class="txcm-datepickerQuarterButton">
              {quarter}
          </button>
      </li>
    {/each}
</ul>
