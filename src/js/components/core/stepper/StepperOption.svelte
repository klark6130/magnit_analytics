<script>
  export let steps;
  export let step;
  export let name;
  export let index;
  export let label;

  const id = `${name}-${index}`;
</script>

<li
  class="txcm-stepperOption">
    <input
      class="txcm-stepperInput"
      type="radio"
      {name}
      {id}
      bind:group={steps}
      value={step}>
    <label
      class="txcm-stepperLabel"
      for={id}>
        {label}
    </label>
</li>
