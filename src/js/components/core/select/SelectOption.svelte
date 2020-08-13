<script>
  export let pick;
  export let name;
  export let index;
  export let value;
  export let label;

  const id = `${name}-${index}`;
</script>

<li
  class="txcm-selectOption">
    <input
      class="txcm-selectInput"
      type="radio"
      bind:group={pick}
      {name}
      {id}
      {value}>
    <label
      class="txcm-selectLabel"
      for={id}>
        {label}
    </label>
</li>
