<script>
  import Overlay from 'components/core/overlay/Overlay.svelte';
  import { getUIState } from 'state/ui';
  import MenuLanguage from './MenuLanguage.svelte';
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
      class:txcm-menuDrawer-is-active={isActive}
      on:click|stopPropagation>
        <svg
          class="txcm-menuLogo">
            <use
              xlink:href="#txspt-icons-logo" />
        </svg>
        <MenuLanguage />
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
