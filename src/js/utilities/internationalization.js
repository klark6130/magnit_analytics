import { default as englishDictionary } from 'configs/dictionaries/english.json';
import Int from 'components/core/internationalization/Int.svelte';

export function translate(key, locale) {
  if (locale === 'en' && englishDictionary[key]) return englishDictionary[key];
  return key;
}

export function i18n(object) {
  function mountComponent() {
    const node = object;
    const key = node.textContent;
    node.textContent = '';
    return new Int({
      target: node,
      props: { key },
    });
  }

  mountComponent();

  return {};
}
