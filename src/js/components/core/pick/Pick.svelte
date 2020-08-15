<script>
  export let pick;
  export let name;
  export let value;
  export let label;
  export let theme = '';

  function onPickChange() {
    if (!pick) pick = value;
    else pick = null;
  }
</script>

<input
  class="txcm-pickInput"
  type="checkbox"
  id={name}
  checked={pick}
  on:change={onPickChange}>
<label
  class={`txcm-pick ${theme}`}
  for={name}>
    {label}
</label>
