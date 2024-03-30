export function numFormatter(num: number) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "K";
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num < 900) {
    return num;
  }
}

export function OneYearByFromto(from: string): { from: string; to: string }[] {
  const fromDate = new Date(from);
  const currentDate = new Date();
  const resultDates = [];

  while (currentDate > fromDate) {
    resultDates.push(currentDate.toISOString());
    currentDate.setFullYear(currentDate.getFullYear() - 1);
  }

  const arr = [...resultDates, from];
  const map = [];

  for (let i = 0; i < arr.length - 1; i++) {
    map.push({ from: arr[i + 1], to: arr[i] });
  }
  return map;
}
