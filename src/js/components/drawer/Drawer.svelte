<script>
  import { getUIState } from 'state/ui';
  import Overlay from 'components/core/overlay/Overlay.svelte';

  export let store;

  const drawer = getUIState(store);

  $: isActive = $drawer;

  function close() {
    $drawer = false;
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
      class="txcm-drawer"
      class:txcm-drawer-is-active={isActive}>
        <slot />
        <button
          class="txcm-drawerClose"
          on:click={onCloseClick}>
            Закрыть
        </button>
    </div>
</Overlay>
