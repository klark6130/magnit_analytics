<script>
  import { toggleUI } from 'state/ui';

  function onToggleClick() {
    toggleUI('indicators');
  }
</script>

<button
  class="txcm-indicatorsToggle"
  on:click={onToggleClick}>
    <svg
      class="txcm-indicatorsToggleIcon">
        <use
          xlink:href="#txspt-icons-plus" />
    </svg>
    Добавить показатели
</button>
