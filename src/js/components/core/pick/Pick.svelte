<script>
  export let pick;
  export let name;
  export let label;
  export let theme = null;
</script>

<input
  class="txcm-pickInput"
  type="checkbox"
  bind:checked={pick}
  id={name}>
<label
  class={`txcm-pick ${theme}`}
  for={name}>
    {label}
</label>
