<script>
  import { tick } from 'svelte';
  import { Router, Route, navigate } from 'svelte-routing';
  import { initUser } from '../state/user';
  import Dashboard from './dashboard/Dashboard.svelte';
  import LoginPage from './pages/LoginPage.svelte';
  import LogoutPage from './pages/LogoutPage.svelte';
  import RootPage from './pages/RootPage.svelte';
  import LoadingPage from './pages/LoadingPage.svelte';
  import ErrorPage from './pages/ErrorPage.svelte';

  function login() {
    return Promise.resolve({
      success: true,
      redirect: '/dashboard/financial/',
      result: {
        name: 'Buzz Killington',
        photo: 'https://picsum.photos/30/30',
        templates: [],
      },
    });
  }

  function nextStep({ success, result, redirect }) {
    if (success) {
      initUser(result);
      navigate(redirect);
    } else {
      navigate('/login');
    }
  }

  function initApp() {
    return login().then(nextStep);
  }
</script>

<Router>
  {#await initApp()}
    <LoadingPage />
  {:then}
      <Route
        path="/dashboard/*details">
        <Dashboard />
      </Route>
      <Route
        path="/login">
          <LoginPage />
      </Route>
      <Route
        path="/logout">
          <LogoutPage />
      </Route>
      <Route
        path="/">
          <RootPage />
      </Route>
  {:catch error}
    <ErrorPage
      {error}/>
  {/await}
</Router>
