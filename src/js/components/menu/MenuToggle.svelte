<script>
  import { toggleUI, updateUI } from '../../state/ui';

  function onToggleClick() {
    toggleUI('menu');
    updateUI({ menuDashNav: false });
  }
</script>

<button
  class="txcm-menuToggle"
  on:click={onToggleClick}>
    Меню
</button>
