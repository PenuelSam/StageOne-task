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
  const utcTimeMilliseconds = now.getTime();

  document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
    `Current Day : ${dayOfWeek}`;
    document.querySelector(`[data-testid="currentUTCTime"]`).textContent = `UTC Time : ${utcTimeMilliseconds}`;
}

setInterval(updateDateTime, 1000);

updateDateTime();

