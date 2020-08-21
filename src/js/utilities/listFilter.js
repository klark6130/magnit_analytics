function filterKey(text, filter) {
  return text.toLowerCase().includes(filter);
}

function filterItem(item, keys, filter) {
  if (Array.isArray(keys)) return keys.some(key => filterKey(item[key], filter));
  return filterKey(item[keys], filter);
}

function filterCategory(categories, category, filter, key, filterMethod) {
  const { label } = category;
  const filtered = category[key].filter(item => filterMethod(item, filter));
  if (filtered.length > 0) categories.push({ label, [key]: filtered });
  return categories;
}

function filterCategories(categories, filter, reduceMethod) {
  if (filter) {
    const normalizedFilter = filter.toLowerCase();
    return categories.reduce((result, category) => reduceMethod(result, category, normalizedFilter), []);
  }
  return categories;
}

function filterIndicatorItem(item, filter) {
  const keys = ['label', 'name', 'value'];
  return filterItem(item, keys, filter);
}

function filterIndicatorCategory(categories, category, filter) {
  return filterCategory(categories, category, filter, 'indicators', filterIndicatorItem);
}

export function filterIndicatorCategories(categories, filter) {
  return filterCategories(categories, filter, filterIndicatorCategory);
}

function filterNavigationItem(item, filter) {
  return filterItem(item, 'label', filter);
}

function filterNavigationCategory(categories, category, filter) {
  return filterCategory(categories, category, filter, 'indicators', filterNavigationItem);
}

export function filterNavigationCategories(categories, filter) {
  return filterCategories(categories, filter, filterNavigationCategory);
}
