<script>
  import { getUserState } from 'state/user';
  import NavLink from 'components/core/navLink/NavLink.svelte';

  const name = getUserState('name');
  const photo = getUserState('photo');
  const profile = getUserState('profile');
</script>

<nav
  class="txcm-navigation">
    <NavLink
      linkClass="txcm-navigationLink"
      to="/dashboard/export">
        <svg
          class="txcm-navigationExportIcon">
            <use
              xlink:href="#txspt-icons-export" />
        </svg>
    </NavLink>
    <a
      class="txcm-navigationLink"
      href={$profile}
      target="_blank">
        <img
          class="txcm-navigationImage"
          src={$photo}
          alt={$name}>
    </a>
</nav>
