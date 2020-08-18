<script>
  import { getUIState } from 'state/ui';

  const tooltip = getUIState('tooltip');

  $: style = updateStyle($tooltip);

  function isActive() {
    return !!$tooltip;
  }

  function updateStyle() {
    if ($tooltip) return `transform: translate(${$tooltip.position.x}px, ${$tooltip.position.y}px)`;
    return '';
  }

  function renderContent() {
    if ($tooltip && $tooltip.content) return $tooltip.content;
    return '';
  }

  function renderSideClass() {
    if ($tooltip) {
      if ($tooltip.side === 'bottom') return ' txcm-tooltip-is-bottom';
      else if ($tooltip.side === 'right') return ' txcm-tooltip-is-right';
      else if ($tooltip.side === 'left') return ' txcm-tooltip-is-left';
      return ' txcm-tooltip-is-top';
    }
    return '';
  }
</script>

<div
  class={`txcm-tooltip${renderSideClass($tooltip)}`}
  class:txcm-tooltip-is-active={isActive($tooltip)}
  {style}>
    <div class="txcm-tooltipContent">
      {renderContent($tooltip)}
    </div>
</div>
