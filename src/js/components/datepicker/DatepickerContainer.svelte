<script>
  import DatepickerSectionMonth from './DatepickerSectionMonth.svelte';
  import DatepickerSectionQuarters from './DatepickerSectionQuarters.svelte';
  import DatepickerSectionYears from './DatepickerSectionYears.svelte';
  import DatepickerPrecision from './DatepickerPrecision.svelte';

  export let isActive;

  export let precision;
  export let day;
  export let week;
  export let month;
  export let quarter;
  export let year;

  export let precisionOptions;
  export let monthOptions;
  export let quarterOptions;
  export let yearOptions;
</script>

<div
  class="txcm-datepickerContainer"
  class:txcm-datepickerContainer-is-active={isActive}
  on:click|stopPropagation>
    <div
      class="txcm-datepickerSections">
        <DatepickerSectionMonth
          bind:precision
          bind:day
          bind:week
          bind:month
          bind:year
          {monthOptions}
          {yearOptions} />
        <DatepickerSectionQuarters
          bind:precision
          bind:month
          bind:quarter
          bind:year
          {monthOptions}
          {quarterOptions}
          {yearOptions} />
        <DatepickerSectionYears
          bind:precision
          bind:year
          {yearOptions} />
    </div>
    <DatepickerPrecision
      bind:precision
      {precisionOptions} />
    <button
      class="txcm-datepickerSubmit">
        Выбрать
    </button>
</div>
