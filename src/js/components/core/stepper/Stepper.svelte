<script>
  import StepperOption from './StepperOption.svelte';

  export let name;
  export let options;
  export let steps;
  export let theme = null;
</script>

<ul
  class={`txcm-stepper ${theme}`}>
    {#each options as option, index}
      <StepperOption
        {...option}
        {steps}
        {name}
        {index}/>
    {/each}
</ul>
