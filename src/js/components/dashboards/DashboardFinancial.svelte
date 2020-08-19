<script>
  import { default as filterConfig } from 'configs/financial/filter.json';
  import { default as indicatorsConfig } from 'configs/financial/indicators.json';
  import Dashboard from './Dashboard.svelte';
</script>

<Dashboard
  {filterConfig}
  {indicatorsConfig} />
