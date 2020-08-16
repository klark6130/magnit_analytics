<script>
  import DatepickerSwitcher from './DatepickerSwitcher.svelte';
  import DatepickerOptionWeeks from './DatepickerOptionsWeeks.svelte';
  import DatepickerOptionDays from './DatepickerOptionsDays.svelte';

  export let precision;
  export let day;
  export let week;
  export let month;
  export let year;

  export let monthOptions;
  export let yearOptions;

  function renderStatus() {
    if (precision <= 1) return 'txcm-datepickerSection-month-is-active';
    return 'txcm-datepickerSection-month-is-inactive';
  }
</script>

<div
  class={`txcm-datepickerSection ${renderStatus(precision)}`}>
    <DatepickerSwitcher
      bind:pick={month}
      options={monthOptions} />
    <DatepickerOptionWeeks
      bind:precision
      bind:day
      bind:week
      bind:month
      bind:year
      {yearOptions} />
    <DatepickerOptionDays
      bind:precision
      bind:day
      bind:week
      bind:month
      bind:year
      {yearOptions} />
</div>
