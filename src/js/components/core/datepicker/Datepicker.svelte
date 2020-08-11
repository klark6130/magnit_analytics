<script>
  export let label = null;

  function renderToggleLabel() {
    if (label) return `Март 2020 (${label})`;
    return 'Март 2020';
  }
</script>

<button
  class="txcm-datepickerToggle">
    {renderToggleLabel()}
</button>
