<script>
  import Stepper from 'core/stepper/Stepper.svelte';

  export let units = 0;
  export let options = [{
    label: '% от выр.',
    step: 0,
  }, {
    label: 'млн. руб',
    step: 1,
  }];
</script>

<Stepper
  theme="txcm-unitStepper"
  name="uintOptions"
  steps={units}
  {options} />
