<script>
  import NavLink from 'core/navLink/NavLink.svelte';
</script>

<nav
  class="txcm-menuDrawerTemplates">
    <div
      class="txcm-menuDrawerTemplatesHeader">
        Шаблоны
    </div>
    <NavLink
      linkClass="txcm-menuDrawerTemplateLink"
      to="/">
        EBITDA главное
    </NavLink>
    <NavLink
      linkClass="txcm-menuDrawerTemplateLink"
      to="/">
        EBITDA по форматам
    </NavLink>
    <NavLink
      linkClass="txcm-menuDrawerTemplateLink"
      to="/">
        Выручка/мост
    </NavLink>
    <button
      class="txcm-menuDrawerAddTemplate">
        Добавить в шаблоны
    </button>
</nav>
