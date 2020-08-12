<script>
  import { Router, Route, navigate } from 'svelte-routing';
  import { initUser } from '../state/user';
  import DashboardPage from './dashboard/DashboardPage.svelte';
  import LoginPage from './pages/LoginPage.svelte';
  import LogoutPage from './pages/LogoutPage.svelte';
  import LoadingPage from './pages/LoadingPage.svelte';
  import ErrorPage from './pages/ErrorPage.svelte';
  import DefaultPage from './pages/DefaultPage.svelte';

  function login() {
    return Promise.resolve({
      success: true,
      result: {
        name: 'Buzz Killington',
        photo: 'https://picsum.photos/30/30',
        templates: [],
      },
    });
  }

  function next({ success, result }) {
    if (success) initUser(result);
    else navigate('/login');
  }

  function initialize() {
    return login().then(next);
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
        component={LoginPage} />
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
