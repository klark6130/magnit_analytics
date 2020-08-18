<script>
  import Int from 'components/core/internationalization/Int.svelte';
  import { getUIState, updateUI } from 'state/ui';

  export let dashboard;

  const aside = getUIState('aside');

  $: label = renderLabel(dashboard);

  function renderLabel() {
    if (dashboard === 'financial') return 'Финансовый дашборд';
    return 'Операционный дашборд';
  }

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
    <Int
      key={label} />
</button>
