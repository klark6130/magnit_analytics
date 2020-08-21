<script>
  export let label;
  export let pick;
  export let highlight;
  export let name;
  export let index;
  export let value;
  export let isActive;

  let node;

  const id = `${name}-${index}`;

  $: updateEvents(isActive);
  $: scrollPickIntoView(pick);
  $: scrollActiveIntoView(isActive);
  $: scrollHighlightIntoView(highlight);

  function scrollPickIntoView() {
    if (node && pick === value) node.scrollIntoView({ block: 'nearest' });
  }

  function scrollHighlightIntoView() {
    if (node && highlight === index) node.scrollIntoView({ block: 'nearest' });
  }

  function scrollActiveIntoView() {
    if (node && isActive && pick === value) node.scrollIntoView({ block: 'center' });
  }

  function isHighlighted() {
    return highlight === index;
  }

  function onOptionClick(event) {
    if (pick === value) {
      event.preventDefault();
      pick = null;
    }
  }

  function onMouseOver({ target }) {
    highlight = parseInt(target.dataset.option, 10);
  }

  function subscribeClick() {
    if (node) {
      node.addEventListener('click', onOptionClick);
      node.addEventListener('mouseover', onMouseOver);
    }
  }

  function unsubscribeClick() {
    if (node) {
      node.removeEventListener('click', onOptionClick);
      node.removeEventListener('mouseover', onOptionClick);
    }
  }

  function updateEvents() {
    if (isActive) subscribeClick();
    else unsubscribeClick();
  }
</script>

<li
  class="txcm-selectOption">
    <input
      class="txcm-selectInput"
      type="radio"
      bind:group={pick}
      {name}
      {id}
      {value}>
    <label
      class="txcm-selectLabel"
      class:txcm-selectLabel-is-highlighted={isHighlighted(highlight)}
      for={id}
      data-option={index}
      bind:this={node}>
        {label}
    </label>
</li>
