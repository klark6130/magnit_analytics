function filterItem(item, filter) {
  const label = item.label.toLowerCase();
  return label.includes(filter);
}

function filterNavigationCategory(categories, category, filter) {
  const { label } = category;
  const filtered = category.links.filter(item => filterItem(item, filter));
  if (filtered.length > 0) categories.push({ label, links: filtered });
  return categories;
}

export function filterNavigationCategories(categories, filter) {
  if (filter) {
    const normalizedFilter = filter.toLowerCase();
    return categories.reduce((result, category) => filterNavigationCategory(result, category, normalizedFilter), []);
  }
  return categories;
}
