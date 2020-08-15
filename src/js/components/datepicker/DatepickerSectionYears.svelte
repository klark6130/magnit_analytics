<script>
  const years = [2017, 2018, 2019, 2020, 2021, 2022];

  export let precision;

  function renderStatus() {
    if (precision === 4) return 'txcm-datepickerSection-years-is-active';
    return 'txcm-datepickerSection-years-is-inactive';
  }
</script>

<div
  class={`txcm-datepickerSection ${renderStatus(precision)}`}>
    <ul
      class="txcm-datepickerYears">
        {#each years as year}
          <li
            class="txcm-datepickerYear">
              <button
                class="txcm-datepickerYearButton">
                  {year}
              </button>
          </li>
        {/each}
    </ul>
</div>
