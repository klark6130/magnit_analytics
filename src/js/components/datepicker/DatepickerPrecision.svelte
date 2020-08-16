<script>
  export let precision;
  export let precisionOptions;

  function isActive(index) {
    return index === precision;
  }

  function onOptionClick({ target }) {
    precision = parseInt(target.dataset.option, 10);
  }
</script>

<div class="txcm-datepickerPrecision">
  Грануляция
  <ul
    class="txcm-datepickerPrecisionOptions">
      {#each precisionOptions as precisionOption, index}
        <li
          class="txcm-datepickerPrecisionOption">
            <button
              class="txcm-datepickerPrecisionButton"
              class:txcm-datepickerPrecisionButton-is-active={isActive(index, precision)}
              data-option={index}
              on:click={onOptionClick}>
                {precisionOption}
            </button>
        </li>
      {/each}
  </ul>
</div>
