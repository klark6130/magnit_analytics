<script>
  export let precision;
  export let month;
  export let quarter;

  export let highlitedQuarter = null;
  export let quarterOptions;

  function isActive(index) {
    return precision === 3 && index === quarter;
  }

  function onOptionClick({ target }) {
    precision = 3;
    quarter = parseInt(target.dataset.option, 10);
    month = quarter * 3;
  }

  function onOptionMouseOver({ target }) {
    highlitedQuarter = parseInt(target.dataset.option, 10);
  }

  function onOptionMouseOut() {
    highlitedQuarter = null;
  }
</script>

<ol
  class="txcm-datepickerQuarters">
    {#each quarterOptions as quarterOption, index}
      <li
        class="txcm-datepickerQuarter">
          <button
            class="txcm-datepickerQuarterButton"
            class:txcm-datepickerQuarterButton-is-active={isActive(index, quarter, precision)}
            data-option={index}
            on:click={onOptionClick}
            on:mouseover={onOptionMouseOver}
            on:mouseout={onOptionMouseOut}>
              {quarterOption}
          </button>
      </li>
    {/each}
</ol>
