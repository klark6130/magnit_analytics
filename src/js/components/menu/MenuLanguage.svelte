<script>
  import { createEventDispatcher } from 'svelte';
  import { getUIState } from 'state/ui';

  const dispatch = createEventDispatcher();
  const locale = getUIState('locale');

  $: label = updateLabel($locale);
  $: dispatch('localechange', { locale: $locale });

  function updateLabel() {
    if ($locale === 'ru') return 'en';
    return 'ru';
  }

  function onLocaleClick() {
    if ($locale === 'ru') $locale = 'en';
    else $locale = 'ru';
  }
</script>

<button
  class="txcm-menuDrawerLocale"
  on:click={onLocaleClick}>
    {label}
</button>
