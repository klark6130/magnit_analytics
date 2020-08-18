<script>
  import NavLink from 'components/core/navLink/NavLink.svelte';
  import { i18n } from 'utilities/internationalization';
</script>

<nav
  class="txcm-menuDrawerTemplates">
    <div
      use:i18n
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
