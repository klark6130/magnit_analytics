<script>
  import Datepicker from 'components/datepicker/Datepicker.svelte';
  import { getDashboardState } from 'state/dashboard';

  const dateYoY = getDashboardState('dateYoY');

  let value = $dateYoY;

  $: $dateYoY = value;
</script>

<Datepicker
  bind:value
  note="YoY" />
