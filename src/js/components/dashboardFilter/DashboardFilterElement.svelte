<script>
  import Pick from 'core/pick/Pick.svelte';
  import Select from 'core/select/Select.svelte';
  import Stepper from 'core/stepper/Stepper.svelte';

  export let element;
</script>

{#if element.type === 'stepper'}
  <Stepper
    {...element.content}/>
{:else if element.type === 'pick'}
  <Pick
    {...element.content}/>
{:else if element.type === 'select'}
  <Select
    {...element.content}/>
{/if}
