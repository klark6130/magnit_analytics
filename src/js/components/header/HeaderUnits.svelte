<script>
  import Stepper from 'core/stepper/Stepper.svelte';

  export let units = 0;
  export let options = [{
    label: '% от выр.',
    value: 0,
  }, {
    label: 'млн. руб',
    value: 1,
  }];
</script>

<Stepper
  theme="txcm-unitStepper"
  name="uintOptions"
  pick={units}
  {options} />
