<script>
  import { Link } from 'svelte-routing';

  export let to;
  export let linkClass;

  function getProps({ isCurrent }) {
    if (isCurrent) return { class: `${linkClass} ${linkClass}-is-active` };
    return { class: linkClass };
  }
</script>

<Link
  {to}
  {getProps}>
    <slot />
</Link>
