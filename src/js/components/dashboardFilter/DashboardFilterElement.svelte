<script>
  import Stepper from 'core/stepper/Stepper.svelte';

  export let element;
</script>

{#if element.type === 'stepper'}
  <Stepper
    {...element.content}/>
{:else if element.type === 'picker'}
  <Stepper
    {...element.content}/>
{/if}
