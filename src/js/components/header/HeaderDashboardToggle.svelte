<script>
  import { getUIState, updateUI } from 'state/ui';

  const aside = getUIState('aside');

  function show() {
    updateUI({ aside: true });
  }

  function onToggleClick() {
    if (!$aside) setTimeout(show, 5);
  }
</script>

<button
  class="txcm-dashboardToggle"
  on:click={onToggleClick}>
    <svg
      class="txcm-dashboardToggleArrow">
        <use
          xlink:href="#txspt-icons-fatArrow" />
    </svg>
    Финансовый дашборд
</button>
