function updateDateTime() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getUTCDay()];
  const utcTime = now.toUTCString();

  document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
    dayOfWeek;
  document.querySelector('[data-testid="currentUTCTime"]').textContent =
    utcTime;
}

setInterval(updateDateTime, 1000);

updateDateTime();
