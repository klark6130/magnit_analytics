<script>
  import Pick from 'core/pick/Pick.svelte';
  import Select from 'core/select/Select.svelte';
  import Stepper from 'core/stepper/Stepper.svelte';

  const ELEMENTS = {
    stepper: Stepper,
    pick: Pick,
    select: Select,
  };

  export let element;

  function pickElement(type) {
    if (ELEMENTS[type]) return ELEMENTS[type];
    return ELEMENTS.financial;
  }
</script>

<svelte:component
  this={pickElement(element.type)}
  {...element.content} />
