<script context="module">
  import { updateFilter, getFilterState } from 'state/filter';
  import Pick from 'components/core/pick/Pick.svelte';
  import Select from 'components/core/select/Select.svelte';
  import Stepper from 'components/core/stepper/Stepper.svelte';

  const ELEMENTS = {
    stepper: Stepper,
    pick: Pick,
    select: Select,
  };

  const PROPS = {
    stepper: ['cancel', 'options'],
    pick: ['label', 'value'],
    select: ['label', 'options'],
  };

  function pickElement(type) {
    if (ELEMENTS[type]) return ELEMENTS[type];
    return ELEMENTS.pick;
  }

  function pickProps(element) {
    const { type, data } = element;
    const names = PROPS[type] || PROPS.pick;
    return names.reduce((props, name) => ({ ...props, [name]: data[name] }), {});
  }
</script>

<script>
  export let element;

  const { data } = element;
  const { name } = data;
  const store = getFilterState(name);

  let pick = $store;

  $: updateFilterValue(pick);

  function updateFilterValue() {
    updateFilter({ [name]: pick });
  }
</script>

<svelte:component
  this={pickElement(element.type)}
  {...pickProps(element)}
  {name}
  bind:pick={pick} />
