<script>
  import ListGroup from 'components/list/ListGroup.svelte';
  import NavLink from 'components/core/navLink/NavLink.svelte';
  import { filterNavigationCategories } from 'utilities/listFilter';

  export let categories;
  export let filter;

  $: filtered = filterNavigationCategories(categories, filter);
</script>

{#each filtered as group}
  <ListGroup
    label={group.label}
    count={filtered.length}
    length={group.length}
    {filter}>
      {#each group.links as link}
        <NavLink
          linkClass="txcm-asideNavGroupLink"
          to={link.href}>
            {link.label}
            <svg
              class="txcm-asideNavGroupLinkIcon">
                <use
                  xlink:href="#txspt-icons-checkmark" />
            </svg>
        </NavLink>
      {/each}
  </ListGroup>
{/each}
