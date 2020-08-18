<script>
  export let value;

  function onCancelClick() {
    value = '';
  }
</script>

<form
  class="txcm-listFilter"
  action="/filter"
  on:submit|preventDefault>
    <svg
      class="txcm-listFilterIcon">
        <use
          xlink:href="#txspt-icons-search" />
    </svg>
    <input
      class="txcm-listFilterInput"
      type="search"
      placeholder="Поиск"
      bind:value>
    <button
      class="txcm-listFilterCancel"
      type="button"
      on:click={onCancelClick}>
        Сбросить
    </button>
</form>
