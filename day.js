function dayName(date) {
  const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return daysOfTheWeek[date.getDay()];
}

function greeting(date) {
  return `Howdy, it's ${dayName(date)}!`;
}