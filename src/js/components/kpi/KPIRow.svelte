<script>
  import { cubicInOut } from 'svelte/easing';
  import KPICell from './KPICell.svelte';

  export let indicator;
  export let data;

  function fly(node, { delay = 0, duration = 200 }) {
    const opacity = +getComputedStyle(node).opacity;

    return {
      delay,
      duration,
      css: (ratio) => {
        const eased = cubicInOut(ratio);
        return `
          opacity: ${eased * opacity};
          margin-bottom: ${(1 - eased) * -110}px;
        `;
      },
    };
  }
</script>

<div
  class="txcm-kpiRow"
  transition:fly|local>
  <div
    class="txcm-kpiLabel">
      {indicator.label}
  </div>
  <KPICell
    {...data} />
</div>
