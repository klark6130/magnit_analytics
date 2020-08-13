<script>
  import NavLink from 'components/core/navLink/NavLink.svelte';
  import { toggleUI } from '../../state/ui';

  function onToggleClick() {
    toggleUI('menuDashNav');
  }
</script>

<nav
  class="txcm-menuDrawerNavigation">
    <NavLink
      linkClass="txcm-menuDrawerNavLink"
      to="/">
        Финансовый дашборд
    </NavLink>
    <NavLink
      linkClass="txcm-menuDrawerNavLink"
      to="/">
        Операционный дашборд
    </NavLink>
    <button
      class="txcm-menuDrawerNavExpand"
      on:click={onToggleClick}>
        Выбрать показатель
    </button>
</nav>
