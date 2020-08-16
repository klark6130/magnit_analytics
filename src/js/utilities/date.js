function generateCurrentMonthDayOption(count, month, year, dayOptions) {
  for (let index = 1; index <= count; index += 1) {
    const option = {
      day: index,
      month,
      year,
    };
    dayOptions.push(option);
  }
}

function generateBeginningPadding(month, year, dayOptions) {
  const firstDay = (new Date(year, month, 1)).getDay();
  if (firstDay > 1) {
    const prevMonth = month - 1 < 0 ? 11 : month - 1;
    const prevYear = prevMonth === 11 ? year - 1 : year;
    const prevMonthLastDate = (new Date(year, month, 0)).getDate();
    for (let index = 0; index < (firstDay - 1); index += 1) {
      const option = {
        day: prevMonthLastDate - index,
        month: prevMonth,
        year: prevYear,
      };
      dayOptions.unshift(option);
    }
  }
}

function generateEndPadding(month, year, maxYear, dayOptions) {
  const lastDay = (new Date(year, month, dayOptions[dayOptions.length - 1].day)).getDay();
  if (lastDay > 0) {
    const paddingCount = 7 - lastDay;
    const nextMonth = month + 1 > 11 ? 0 : month + 1;
    const nextYear = nextMonth === 0 ? year + 1 : year;
    if (nextYear <= maxYear) {
      for (let index = 1; index <= paddingCount; index += 1) {
        const option = {
          day: index,
          month: nextMonth,
          year: nextYear,
        };
        dayOptions.push(option);
      }
    }
  }
}

export function generateDayOptions(month, year, maxYear) {
  const dayOptions = [];
  const count = (new Date(year, (month + 1), 0)).getDate();
  generateCurrentMonthDayOption(count, month, year, dayOptions);
  generateBeginningPadding(month, year, dayOptions);
  generateEndPadding(month, year, maxYear, dayOptions);
  return dayOptions;
}

export function calculateWeekNumber(day, month, year) {
  const date = new Date(Date.UTC(year, month, day));
  date.setUTCDate((date.getUTCDate() + 4) - (date.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(year, 0, 1));
  return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
}

export function generateWeekNumbers(day, month, year) {
  const weekNumbers = [];
  const monthFirsttWeek = calculateWeekNumber(1, month, year);
  const lastDay = (new Date(year, (month + 1), 0)).getDate();
  const monthLasttWeek = calculateWeekNumber(lastDay, month, year);
  const monthLength = monthLasttWeek - monthFirsttWeek;
  for (let index = 0; index <= monthLength; index += 1) weekNumbers.push(monthFirsttWeek + index);
  return weekNumbers;
}
