<script>
  export let conditions;

  $: requestDataUpdate(conditions);

  function requestDataUpdate() {
    const event = new CustomEvent('datarequest', { detail: conditions });
    window.dispatchEvent(event);
  }
</script>
