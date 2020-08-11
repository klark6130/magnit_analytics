<script>
  import { Router } from 'svelte-routing';
  import Header from './header/Header.svelte';
  import DashboardFilter from './dashboardFilter/DashboardFilter.svelte';
  import Menu from './menu/Menu.svelte';
</script>

<Router>
  <Header />
  <DashboardFilter />
  <Menu />
</Router>
