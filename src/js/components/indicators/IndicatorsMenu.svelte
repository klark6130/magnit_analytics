<script>
  import Drawer from 'components/drawer/Drawer.svelte';
  import Indicators from './Indicators.svelte';

  export let config;
</script>

<Drawer
  store="indicators">
    <Indicators
      {config} />
</Drawer>
