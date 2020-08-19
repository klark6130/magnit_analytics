<script>
  import Drawer from 'components/drawer/Drawer.svelte';
  import IndicatorsDrawer from './IndicatorsDrawer.svelte';

  export let config;
</script>

<Drawer
  store="indicators">
    <IndicatorsDrawer
      {config} />
</Drawer>
