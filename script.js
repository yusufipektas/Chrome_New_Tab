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
const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const a = new Date();
setInterval(() => {
  let hour = 0,
    bHour = a.getHours(),
    min = 0,
    bMin = a.getMinutes(),
    bDay = a.getDay(),
    day = dayNames[bDay - 1],
    date = a.getDate(),
    bMonth = a.getMonth(),
    month = monthNames[bMonth - 1],
    year = a.getFullYear();

  // Time to 12
  if (bHour === 0) {
    hour = 12;
  } else if (bHour > 12) {
    hour = bHour - 12;
  } else {
    hour = bHour;
  }

  // Selecting ID's
  let hourID = document.getElementById("hour"),
    minID = document.getElementById("min"),
    zoneID = document.getElementById("zone"),
    dayID = document.getElementById("day"),
    dateID = document.getElementById("date"),
    monthID = document.getElementById("month"),
    yearID = document.getElementById("year"),
    dayTimeID = document.getElementById("dayTime");

  // day-time setting
  if (bHour >= 5 && bHour < 12) {
    dayTimeID.innerHTML = "Morning";
  } else if (bHour >= 12 && bHour < 16) {
    dayTimeID.innerHTML = "After Noon";
  } else if (bHour >= 16 && bHour < 21) {
    dayTimeID.innerHTML = "Evening";
  } else {
    dayTimeID.innerHTML = "Night";
  }
  // Adding 0 to min
  if (bMin < 10) {
    min = `0${bMin}`;
  } else {
    min = bMin;
  }
  // adding pm am
  if (bHour > 11) {
    zoneID.innerHTML = "PM";
  } else {
    zoneID.innerHTML = "AM";
  }
  // printing clock
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
let container = document.getElementById("container");

// Show Setting
function openSetting() {
  document.getElementById("setting-box").style.width = "400px";
  document.getElementById("setting-box").style.borderRight =
    "1px solid rgb(255, 255, 255, .5)";
}

// Close Setting
function closeSetting() {
  document.getElementById("setting-box").style.width = "0px";
  document.getElementById("setting-box").style.borderRight = "0px";
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
