<script>
  import Stepper from 'components/core/stepper/Stepper.svelte';
  import { getDashboardState } from 'state/dashboard';

  const UNIT_OPTIONS = [{
    label: '% от выр.',
    value: 0,
  }, {
    label: 'млн. руб',
    value: 1,
  }];

  const units = getDashboardState('units');

  let value = $units;

  $: $units = value;
</script>

<Stepper
  name="uintOptions"
  bind:pick={value}
  options={UNIT_OPTIONS} />
