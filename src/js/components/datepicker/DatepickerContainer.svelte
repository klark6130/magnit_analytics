<script>
  import DatepickerSectionMonth from './DatepickerSectionMonth.svelte';
  import DatepickerSectionQuarters from './DatepickerSectionQuarters.svelte';
  import DatepickerSectionYears from './DatepickerSectionYears.svelte';
  import DatepickerPrecision from './DatepickerPrecision.svelte';

  export let precision;
  export let name;
  export let isActive;
</script>

<div
  class="txcm-datepickerContainer"
  class:txcm-datepickerContainer-is-active={isActive}
  on:click|stopPropagation>
    <div
      class="txcm-datepickerSections">
        <DatepickerSectionMonth
          {precision} />
        <DatepickerSectionQuarters
          {precision} />
        <DatepickerSectionYears
          {precision} />
    </div>
    <DatepickerPrecision
      bind:precision
      {name} />
    <button
      class="txcm-datepickerSubmit">
        Выбрать
    </button>
</div>
