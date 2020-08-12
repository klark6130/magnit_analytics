<script>
  import SelectOption from './SelectOption.svelte';

  export let name;
  export let options;
  export let pick;
  export let theme = null;

  function renderToggleLabel() {
    return options[pick].label;
  }
</script>

<div
  class={`txcm-select ${theme}`}>
    <button
      class="txcm-selectToggle">
        {renderToggleLabel(pick)}
    </button>
    <ul
      class="txcm-selectOptions">
        {#each options as option, index}
          <SelectOption
            bind:pick
            {...option}
            {name}
            {index}/>
        {/each}
    </ul>
</div>
