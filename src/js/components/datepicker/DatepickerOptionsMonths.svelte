<script>
  export let precision;
  export let month;
  export let quarter;

  export let highlitedQuarter;
  export let monthOptions;

  function isActive(index) {
    return precision === 2 && index === month;
  }

  function isHighlighted(index) {
    const monthQuarter = Math.floor(index / 3);
    return (precision === 3 && monthQuarter === quarter) || highlitedQuarter === monthQuarter;
  }

  function onOptionClick({ target }) {
    precision = 2;
    month = parseInt(target.dataset.option, 10);
    quarter = Math.floor(month / 3);
  }
</script>

<ol
  class="txcm-datepickerMonths">
    {#each monthOptions as monthOption, index}
      <li
        class="txcm-datepickerMonth">
          <button
            class="txcm-datepickerMonthButton"
            class:txcm-datepickerMonthButton-is-active={isActive(index, month, precision)}
            class:txcm-datepickerMonthButton-is-highlighted={isHighlighted(index, quarter, precision, highlitedQuarter)}
            data-option={index}
            on:click={onOptionClick}>
              {monthOption}
          </button>
      </li>
    {/each}
</ol>
