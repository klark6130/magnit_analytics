<script>
  import { default as filterConfig } from 'configs/operational/filter.json';
  import { default as indicatorsConfig } from 'configs/operational/indicators.json';
  import Dashboard from './Dashboard.svelte';
</script>

<Dashboard
  {filterConfig}
  {indicatorsConfig} />
