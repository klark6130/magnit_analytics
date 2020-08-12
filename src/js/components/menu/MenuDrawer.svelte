<script>
  import { onDestroy } from 'svelte';
  import NavLink from 'core/navLink/NavLink.svelte';
  import Overlay from 'core/overlay/Overlay.svelte';
  import { subscribeUI } from '../../state/ui';
  import MenuDrawerNavigation from './MenuDrawerNavigation.svelte';
  import MenuDrawerTemplates from './MenuDrawerTemplates.svelte';
  import MenuDrawerUser from './MenuDrawerUser.svelte';
  import MenuDrawerDashboardNavigation from './MenuDrawerDashboardNavigation.svelte';

  let isActive = false;

  const unsubscribeUI = subscribeUI('menu', onMenuChange);

  function onMenuChange(update) {
    isActive = update;
  }

  onDestroy(unsubscribeUI);
</script>

<Overlay
  {isActive}>
    <div
      class="txcm-menuDrawer"
      class:txcm-menuDrawer-is-active={isActive}>
        <img
          class="txcm-menuLogo"
          src="https://picsum.photos/24/24"
          alt="Магнит">
        <NavLink
          linkClass="txcm-menuDrawerLanguage"
          to="/">
            en
        </NavLink>
        <MenuDrawerNavigation />
        <MenuDrawerTemplates />
        <MenuDrawerUser />
        <MenuDrawerDashboardNavigation />
    </div>
</Overlay>
