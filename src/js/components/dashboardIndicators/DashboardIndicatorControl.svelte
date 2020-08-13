<script>
  import { onDestroy } from 'svelte';
  import { fly } from 'svelte/transition';
  import { updateIndicators, subscribeIndicators, getIndicatorsData } from 'state/indicators';

  export let name;
  export let label;
  export let note = '';
  export let status;
  export let value;

  const id = `indicatorToggle-${name}`;

  let checked = getIndicatorsData(name) || status;

  const unsubscribeIndicator = subscribeIndicators(name, onIndicatorUpdate);

  $: updateIndicatorValue(checked);

  onDestroy(unsubscribeIndicator);

  function onIndicatorUpdate(update) {
    checked = update;
  }

  function updateIndicatorValue() {
    updateIndicators({ [name]: checked });
  }
</script>

<input
  class="txcm-dashboardIndicatorInput"
  type="checkbox"
  bind:checked
  {id}
  {value}>
<label
  class="txcm-dashboardIndicatorControl"
  for={id}
  in:fly="{{ x: -100, duration: 200 }}"
  out:fly="{{ x: -100, duration: 200 }}">
    {label}
    {#if note}
      <span
        class="txcm-dashboardIndicatorNote">
          {note}
      </span>
    {/if}
</label>
