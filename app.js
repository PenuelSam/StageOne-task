

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getUTCDay()];
const currentUTCTime = currentDate.getTime();


const userName = document.querySelector('[data-testid = "slackUserName"]');
const profilePicture = document.querySelector('[data-testid = "slackDisplayImage"]');
const track = document.querySelector('[data-testid = "myTrack"]');
const gitHubLink = document.querySelector('[data-testid = "githubURL"]');
const today = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentTime = document.querySelector('[data-testid="currentUTCTime"]');



const myName = "Penuel";
const myTrack = "Frontend";
const myGitHubLink = "https://github.com/PenuelSam/StageOne-task";

userName.textContent = `Slack Name: ${myName}`;
profilePicture.setAttribute("src", "image/Me.jpg");
profilePicture.setAttribute("alt", myName);
track.textContent = `Track: ${myTrack}`;
gitHubLink.setAttribute("href", myGitHubLink);
today.textContent = `Current Day: ${currentDay}`;
currentTime.textContent = `Current UTC Time: ${currentUTCTime}`;