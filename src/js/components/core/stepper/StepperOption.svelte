<script>
  export let pick;
  export let value;
  export let name;
  export let index;
  export let label;
  export let cancel;

  const id = `${name}-${index}`;
</script>

<li
  class="txcm-stepperOption">
    <input
      class="txcm-stepperInput"
      type="radio"
      bind:group={pick}
      {name}
      {id}
      {value}>
    <label
      class="txcm-stepperLabel"
      for={id}>
        {label}
    </label>
</li>
