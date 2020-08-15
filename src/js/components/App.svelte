<script>
  import { Router, Route, navigate } from 'svelte-routing';
  import { user } from 'utilities/api';
  import { initUser } from 'state/user';
  import AuthPage from './pages/AuthPage.svelte';
  import DashboardPage from './pages/DashboardPage.svelte';
  import DefaultPage from './pages/DefaultPage.svelte';
  import ErrorPage from './pages/ErrorPage.svelte';
  import LoadingPage from './pages/LoadingPage.svelte';
  import LogoutPage from './pages/LogoutPage.svelte';

  function next({ success, result }) {
    if (success) initUser(result);
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
        path="/dashboard/:section/*settings"
        component={DashboardPage} />
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
