<script>
  import { Router, Route, navigate } from 'svelte-routing';
  import { user } from 'utilities/api';
  import { initUser } from 'state/user';
  import AuthPage from './pages/AuthPage.svelte';
  import DashboardPage from './pages/DashboardPage.svelte';
  import DefaultPage from './pages/DefaultPage.svelte';
  import ErrorPage from './pages/ErrorPage.svelte';
  import ExportPage from './pages/ExportPage.svelte';
  import LoadingPage from './pages/LoadingPage.svelte';
  import LogoutPage from './pages/LogoutPage.svelte';

  function next({ success, results }) {
    if (success) initUser(results);
    else navigate('/login');
  }

  function initialize() {
    return user().then(next);
  }
</script>

<Router>
  {#await initialize()}
    <LoadingPage />
  {:then}
      <Route
        path="/dashboard/:dashboard/*indicator"
        component={DashboardPage} />
      <Route
        path="/export"
        component={ExportPage} />
      <Route
        path="/login"
        component={AuthPage} />
      <Route
        path="/logout"
        component={LogoutPage} />
      <Route
        component={DefaultPage} />
  {:catch error}
    <ErrorPage
      {error}/>
  {/await}
</Router>
