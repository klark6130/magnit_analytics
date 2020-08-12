<script>
  import StepperOption from './StepperOption.svelte';

  export let name;
  export let options;
  export let pick;
  export let cancel = false;
  export let theme = null;
</script>

<ul
  class={`txcm-stepper ${theme}`}>
    {#each options as option, index}
      <StepperOption
        bind:pick
        {...option}
        {name}
        {cancel}
        {index}/>
    {/each}
</ul>
