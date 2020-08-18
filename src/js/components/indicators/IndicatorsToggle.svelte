<script>
  import { getUIState, updateUI } from 'state/ui';

  const indicators = getUIState('indicators');

  function show() {
    updateUI({ indicators: true });
  }

  function onToggleClick() {
    if (!$indicators) setTimeout(show, 5);
  }
</script>

<button
  class="txcm-indicatorsToggle"
  on:click={onToggleClick}>
    <svg
      class="txcm-indicatorsToggleIcon">
        <use
          xlink:href="#txspt-icons-plus" />
    </svg>
    Добавить показатели
</button>
