<script>
  import DatepickerSwitcher from './DatepickerSwitcher.svelte';
  import DatepickerWeeks from './DatepickerWeeks.svelte';
  import DatepickerDays from './DatepickerDays.svelte';

  export let precision;

  const options = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

  function renderStatus() {
    if (precision <= 1) return 'txcm-datepickerSection-month-is-active';
    return 'txcm-datepickerSection-month-is-inactive';
  }
</script>

<div
  class={`txcm-datepickerSection ${renderStatus(precision)}`}>
    <DatepickerSwitcher
      {options} />
    <DatepickerWeeks />
    <DatepickerDays />
</div>
