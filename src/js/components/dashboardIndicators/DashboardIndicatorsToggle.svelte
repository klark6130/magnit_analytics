<script>
  import { toggleUI } from 'state/ui';

  function onToggleClick() {
    toggleUI('indDrawer');
  }
</script>

<button
  class="txcm-dashboardIndicatorsToggle"
  on:click={onToggleClick}>
    Добавить показатели
</button>
