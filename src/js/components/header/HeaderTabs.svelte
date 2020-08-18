<script>
  import NavLink from 'components/core/navLink/NavLink.svelte';

  export let dashboard;
  export let indicator;

  let isActive
</script>

<nav
  class="txcm-headerTabs">
    <NavLink
      linkClass="txcm-headerTab"
      to={`/dashboard/${dashboard}/${indicator}`}>
        Срезы
    </NavLink>
    <NavLink
      linkClass="txcm-headerTab"
      to={`/dashboard/${dashboard}/${indicator}/factors`}>
        Факторы
    </NavLink>
</nav>
