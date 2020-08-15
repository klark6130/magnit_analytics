<script>
  import DatepickerSwitcher from './DatepickerSwitcher.svelte';
  import DatepickerQuarters from './DatepickerQuarters.svelte';
  import DatepickerMonths from './DatepickerMonths.svelte';

  export let precision;

  const options = [2017, 2018, 2019, 2020, 2021, 2022];

  let prevPrecision = precision;

  function renderStatus() {
    if (precision > 1 && precision <= 3) {
      if (prevPrecision === 4) {
        prevPrecision = precision;
        return 'txcm-datepickerSection-quarters-is-activeFromLeft';
      } else if (prevPrecision <= 1) {
        prevPrecision = precision;
        return 'txcm-datepickerSection-quarters-is-activeFromRight';
      }
      prevPrecision = precision;
      return 'txcm-datepickerSection-quarters-is-active';
    } else if (prevPrecision > 1 && prevPrecision <= 3) {
      prevPrecision = precision;
      if (precision === 4) return 'txcm-datepickerSection-quarters-is-inactiveToLeft';
      return 'txcm-datepickerSection-quarters-is-inactiveToRight';
    }
    prevPrecision = precision;
    return 'txcm-datepickerSection-quarters-is-inactive';
  }
</script>

<div
  class={`txcm-datepickerSection ${renderStatus(precision)}`}>
    <DatepickerSwitcher
      {options} />
    <DatepickerQuarters />
    <DatepickerMonths />
</div>
