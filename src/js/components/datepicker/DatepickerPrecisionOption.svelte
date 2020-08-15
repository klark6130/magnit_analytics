<script>
  export let precision;
  export let name;
  export let index;
  export let label;

  const id = `${name}-${index}`;
</script>

<input
  class="txcm-datepickerPrecisionInput"
  type="radio"
  {name}
  {id}
  bind:group={precision}
  value={index}>
<label
  class="txcm-datepickerPrecisionLabel"
  for={id}>
    {label}
</label>
