// Year Names
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Day Names
const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Getting Date
let a = new Date(),
  bHour = a.getHours(),
  hour = 0,
  bMin = a.getMinutes(),
  min = 0,
  bDay = a.getDay(),
  day = dayNames[bDay - 1],
  date = a.getDate(),
  bMonth = a.getMonth(),
  month = monthNames[bMonth - 1],
  year = a.getFullYear(),
  // Selecting Clock ID's
  hourID = document.getElementById("hour"),
  minID = document.getElementById("min"),
  zoneID = document.getElementById("zone"),
  dayID = document.getElementById("day"),
  dateID = document.getElementById("date"),
  monthID = document.getElementById("month"),
  yearID = document.getElementById("year"),
  dayTimeID = document.getElementById("dayTime");

//Hour format
function hourFormat() {
  if (bHour === 0) {
    hour = 12;
  } else if (bHour > 12) {
    hour = bHour - 12;
  } else {
    hour = bHour;
  }
}

// Time Zone
function timeZone() {
  if (bHour > 11) {
    zoneID.innerHTML = "PM";
  } else {
    zoneID.innerHTML = "AM";
  }
}

// Day Time
function dayTime() {
  if (bHour >= 5 && bHour < 12) {
    dayTimeID.innerHTML = "Morning";
  } else if (bHour >= 12 && bHour < 16) {
    dayTimeID.innerHTML = "After Noon";
  } else if (bHour >= 16 && bHour < 21) {
    dayTimeID.innerHTML = "Evening";
  } else {
    dayTimeID.innerHTML = "Night";
  }
}

// Adding 0 to minutes
function min0() {
  if (bMin < 10) {
    min = `0${bMin}`;
  } else {
    min = bMin;
  }
}

setInterval(() => {
  timeZone();
  hourFormat();
  dayTime();
  min0();

  hourID.innerHTML = hour;
  minID.innerHTML = min;
  dayID.innerHTML = day;
  dateID.innerHTML = date + ",";
  monthID.innerHTML = month;
  yearID.innerHTML = year;
}, 1000);

// Google Search Form
function searchGoogle(event) {
  event.preventDefault();
  var userInput = document.getElementById("search").value;
  var googleSearchUrl =
    "https://www.google.com/search?q=" + encodeURIComponent(userInput);
  window.location.href = googleSearchUrl;
}

// <--------------------Setting-------------------->

// Selecting ID's
let container = document.getElementById("container"),
  settingBox = document.getElementById("setting-box");

// Show Setting
function openSetting() {
  settingBox.style.width = "400px";
  settingBox.style.borderRight = "1px solid rgb(255, 255, 255, .5)";
}
// Close Setting
function closeSetting() {
  settingBox.style.width = "0px";
  settingBox.style.borderRight = "0px";
}

// checkbox
function check() {
  let checkBox = document.getElementById("checkbox"),
    searchContainer = document.getElementById("search-container");
  if (checkBox.checked === true) {
    searchContainer.style.display = "block";
  } else {
    searchContainer.style.display = "none";
  }
}

function hello(element) {
  element.style.borderRadius = "50%";
}
let z = document.querySelectorAll(".bookmark-icon");
z.forEach(hello);
