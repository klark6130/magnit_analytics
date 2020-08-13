<script>
  import { toggleUI } from 'state/ui';

  function onToggleClick() {
    toggleUI('dashDrawer');
  }
</script>

<button
  class="txcm-dashboardToggle"
  on:click={onToggleClick}>
    Финансовый дашборд
</button>
