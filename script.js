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
  var userInput = document.getElementById("search-input").value;
  var googleSearchUrl =
    "https://www.google.com/search?q=" + encodeURIComponent(userInput);
  window.location.href = googleSearchUrl;
}

// <--------------------Setting-------------------->

// Selecting ID's
let container = document.getElementById("container"),
  settingBox = document.getElementById("setting-box"),
  openSettingBtn = document.getElementById("open-setting");

// Show Setting
function openSetting() {
  settingBox.style.width = "350px";
  setTimeout(() => {
    openSettingBtn.style.display = "none";
  }, 100);
}
// Close Setting
function closeSetting() {
  settingBox.style.width = "0px";
  setTimeout(() => {
    openSettingBtn.style.display = "block";
  }, 300);
}

// Close Setting on Outside Click
window.onclick = function (event) {
  var clickInsideSetting = event.target.closest("#setting-box") !== null;
  if (!clickInsideSetting && event.target !== openSettingBtn) {
    closeSetting();
  }
};

// Container Dim
function containerDim() {
  let dimRange = document.getElementById("dim-range").value;
  let dimValue = document.getElementById("dim-value");
  container.style.backgroundColor = `rgba(0, 0, 0, ${dimRange})`;
  let roundedDimValue = Math.round(dimRange * 100);
  dimValue.innerHTML = `${roundedDimValue}%`;

  localStorage.setItem("dim", dimRange);
}

// Container Blur
function containerBlur() {
  let blurRange = document.getElementById("blur-range").value;
  let blurValue = document.getElementById("blur-value");
  container.style.backdropFilter = `blur(${blurRange}px)`;
  blurValue.innerHTML = `${blurRange}%`;

  localStorage.setItem("blur", blurRange);
}

// Show Hide Time
let timeCheckbox = document.getElementById("time-checkbox"),
  timeContainer = document.getElementById("time-container");
function showHideTime() {
  if (timeCheckbox.checked === true) {
    timeContainer.style.height = "125px";
    timeContainer.style.paddingTop = "20px";
    localStorage.setItem("timeHeight", timeContainer.style.height);
    localStorage.setItem("timePaddingTop", timeContainer.style.paddingTop);
  } else {
    timeContainer.style.height = "0";
    timeContainer.style.paddingTop = "0";
    localStorage.setItem("timeHeight", timeContainer.style.height);
    localStorage.setItem("timePaddingTop", timeContainer.style.paddingTop);
  }
}

// Border Radius
function hello(element) {
  element.style.borderRadius = "50%";
}
let z = document.querySelectorAll(".bookmark-icon");
z.forEach(hello);

// New Tab
function helloac(element) {
  element.setAttribute("target", "_blank");
}
let ac = document.querySelectorAll(".bookmark");
ac.forEach(helloac);
