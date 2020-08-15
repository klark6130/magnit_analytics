<script>
  export let options;
  export let pick = 0;

  const max = options.length - 1;

  function onPrevClick() {
    pick = Math.max(0, pick - 1);
  }

  function onNextClick() {
    pick = Math.min(max, pick + 1);
  }
</script>

<div
  class="txcm-datepickerSwitcher">
    {options[pick]}
    <button
      class="txcm-datepickerSwitcherPrev"
      class:txcm-datepickerSwitcherPrev-is-inactive={pick === 0}
      on:click={onPrevClick}>
        Предыдущий год
        <svg
          class="txcm-datepickerSwitcherPrevIcon">
            <use
              xlink:href="#txspt-icons-angleArrow" />
        </svg>
    </button>
    <button
      class="txcm-datepickerSwitcherNext"
      class:txcm-datepickerSwitcherNext-is-inactive={pick === max}
      on:click={onNextClick}>
        Следующий год
        <svg
          class="txcm-datepickerSwitcherNextIcon">
            <use
              xlink:href="#txspt-icons-angleArrow" />
        </svg>
    </button>
</div>
