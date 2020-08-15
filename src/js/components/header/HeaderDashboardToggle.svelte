<script>
  import { toggleUI } from 'state/ui';

  function onToggleClick() {
    toggleUI('aside');
  }
</script>

<button
  class="txcm-dashboardToggle"
  on:click={onToggleClick}>
    Финансовый дашборд
    <svg
      class="txcm-dashboardToggleArrow">
        <use
          xlink:href="#txspt-icons-fatArrow" />
    </svg>
</button>
