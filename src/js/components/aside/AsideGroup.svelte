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
      {#each group.indicators as indicator}
        <NavLink
          linkClass="txcm-asideNavGroupLink"
          to={indicator.href}>
            {indicator.label}
            <svg
              class="txcm-asideNavGroupLinkIcon">
                <use
                  xlink:href="#txspt-icons-checkmark" />
            </svg>
        </NavLink>
      {/each}
  </ListGroup>
{/each}
