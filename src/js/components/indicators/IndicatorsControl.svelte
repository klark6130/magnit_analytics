<script>
  import { onDestroy } from 'svelte';
  import { cubicInOut } from 'svelte/easing';
  import { updateIndicators, subscribeIndicators, getIndicatorsData } from 'state/indicators';

  export let name;
  export let label;
  export let note = '';
  export let status;
  export let value;
  export let exclude = false;

  const id = `indicatorToggle-${name}`;

  let checked = getIndicatorsData(name) || status;

  const unsubscribeIndicator = subscribeIndicators(name, onIndicatorUpdate);

  $: updateIndicatorValue(checked);

  onDestroy(unsubscribeIndicator);

  function fly(node, { delay = 0, duration = 200 }) {
    const opacity = +getComputedStyle(node).opacity;

    return {
      delay,
      duration,
      css: (ratio) => {
        const eased = cubicInOut(ratio);
        return `
          opacity: ${eased * opacity};
          margin-bottom: ${(1 - eased) * -32}px;
        `;
      },
    };
  }

  function onIndicatorUpdate(update) {
    checked = update;
  }

  function updateIndicatorValue() {
    updateIndicators({ [name]: checked });
  }
</script>

{#if !exclude || (exclude && !checked)}
  <input
    class="txcm-indicatorsInput"
    type="checkbox"
    bind:checked
    {id}
    {value}>
  <label
    class="txcm-indicatorsControl"
    for={id}
    transition:fly>
      {label}
      {#if note}
        <span
          class="txcm-indicatorsNote">
            {note}
        </span>
      {/if}
      <svg
        class="txcm-indicatorsControlIcon"
        class:txcm-indicatorsControlIcon-is-visible={checked}>
          <use
            xlink:href="#txspt-icons-checkmark" />
      </svg>
  </label>
{/if}
