<script>
  import { calculateWeekNumber } from 'utilities/date';
  import DatepickerToggle from './DatepickerToggle.svelte';
  import DatepickerContainer from './DatepickerContainer.svelte';

  export let value;
  export let start = null;
  export let note = null;

  const precisionOptions = ['D', 'W', 'M', 'Q', 'Y'];
  const monthOptions = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const quarterOptions = ['Q1', 'Q2', 'Q3', 'Q4'];
  const yearOptions = [2017, 2018, 2019, 2020, 2021, 2022];

  const now = start ? new Date(start) : new Date();
  const dayValue = now.getDate();
  const monthValue = now.getMonth();
  const yearValue = now.getFullYear();

  let isActive = false;

  let precision = 0;
  let day = dayValue;
  let month = monthValue;
  let year = yearOptions.indexOf(yearValue);
  let week = calculateWeekNumber(day, month, year);
  let quarter = Math.floor(month / 3);

  $: value = updateValue(year, quarter, month, week, day);

  function updateValue() {
    const timestamp = Date.UTC(yearOptions[year], month, day);
    const date = new Date(timestamp);
    return date.getTime();
  }
</script>

<div
  class="txcm-datepickerHolder">
    <DatepickerToggle
      bind:isActive
      {day}
      {month}
      {year}
      {monthOptions}
      {yearOptions}
      {note} />
    <DatepickerContainer
      {isActive}
      {precisionOptions}
      {monthOptions}
      {quarterOptions}
      {yearOptions}
      bind:precision
      bind:day
      bind:week
      bind:month
      bind:quarter
      bind:year />
</div>
