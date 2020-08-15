<script>
  import DatepickerPrecisionOption from './DatepickerPrecisionOption.svelte';

  export let precision;
  export let name;

  const options = ['D', 'W', 'M', 'Q', 'Y'];
</script>

<div class="txcm-datepickerPrecision">
  Грануляция
  <div
    class="txcm-datepickerPrecisionOptions">
      {#each options as label, index}
        <DatepickerPrecisionOption
          bind:precision
          {name}
          {label}
          {index}/>
      {/each}
  </div>
</div>
