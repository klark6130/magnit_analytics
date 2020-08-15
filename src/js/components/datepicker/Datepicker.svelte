<script>
  import DatepickerToggle from './DatepickerToggle.svelte';
  import DatepickerContainer from './DatepickerContainer.svelte';

  export let label = null;
  export let name;
  export let precision = 0;

  let isActive;
</script>

<div
  class="txcm-datepickerHolder">
    <DatepickerToggle
      bind:isActive
      {label} />
    <DatepickerContainer
      bind:precision
      {isActive}
      {name} />
</div>
