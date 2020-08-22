let numberFormatter;

export function initFormatters() {
  numberFormatter = new Intl.NumberFormat('ru-RU');
}

export function formatNumber(number) {
  return numberFormatter.format(number);
}
