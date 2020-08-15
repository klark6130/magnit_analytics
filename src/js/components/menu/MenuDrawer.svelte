<script>
  import NavLink from 'components/core/navLink/NavLink.svelte';
  import Overlay from 'components/core/overlay/Overlay.svelte';
  import { getUIState } from 'state/ui';
  import MenuNavigation from './MenuNavigation.svelte';
  import MenuTemplates from './MenuTemplates.svelte';
  import MenuUser from './MenuUser.svelte';
  import MenuDashboardNavigation from './MenuDashboardNavigation.svelte';

  const menu = getUIState('menu');

  $: isActive = $menu;

  function close() {
    $menu = false;
  }

  function onCloseClick() {
    close();
  }

  function onOverayClose() {
    close();
  }
</script>

<Overlay
  {isActive}
  on:overlayclose={onOverayClose}>
    <div
      class="txcm-menuDrawer"
      class:txcm-menuDrawer-is-active={isActive}>
        <svg
          class="txcm-menuLogo">
            <use
              xlink:href="#txspt-icons-logo" />
        </svg>
        <NavLink
          linkClass="txcm-menuDrawerLanguage"
          to="/">
            en
        </NavLink>
        <MenuNavigation />
        <MenuTemplates />
        <MenuUser />
        <MenuDashboardNavigation />
        <button
          class="txcm-drawerClose"
          on:click={onCloseClick}>
            Закрыть
        </button>
    </div>
</Overlay>
