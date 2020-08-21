<script>
  import Datepicker from 'components/datepicker/Datepicker.svelte';
  import { getDashboardState } from 'state/dashboard';

  const date = getDashboardState('date');

  let value = $date;

  $: $date = value;
</script>

<Datepicker
  bind:value />
