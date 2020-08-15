<script>
  import SelectOption from './SelectOption.svelte';

  export let pick;
  export let name;
  export let options;
  export let theme = '';

  function renderToggleLabel() {
    return options[pick].label;
  }
</script>

<div
  class={`txcm-select ${theme}`}>
    <button
      class="txcm-selectToggle">
        {renderToggleLabel(pick)}
        <svg
          class="txcm-selectToggleIcon">
            <use
              xlink:href="#txspt-icons-fatArrow" />
        </svg>
    </button>
    <ul
      class="txcm-selectOptions">
        {#each options as option, index}
          <SelectOption
            bind:pick
            {...option}
            {name}
            {index} />
        {/each}
    </ul>
</div>
