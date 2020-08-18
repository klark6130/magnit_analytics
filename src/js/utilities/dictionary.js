import { default as englishDictionary } from 'configs/dictionaries/english.json';

export function translate(key, locale) {
  if (locale === 'en' && englishDictionary[key]) return englishDictionary[key];
  return key;
}
