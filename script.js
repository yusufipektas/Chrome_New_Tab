// Selecting Clock ID's
let hourID = document.getElementById("hour"),
  minID = document.getElementById("min"),
  zoneID = document.getElementById("zone"),
  dayID = document.getElementById("day"),
  dateID = document.getElementById("date"),
  monthID = document.getElementById("month"),
  yearID = document.getElementById("year"),
  dayTimeID = document.getElementById("dayTime");

setInterval(() => {
  let a = new Date(),
    bHour = a.getHours(),
    hour = 0,
    bMin = a.getMinutes(),
    min = 0;

  //Hour format
  function hourFormat() {
    if (Radio12Hr.checked === true) {
      if (bHour === 0) {
        hour = 12;
      } else if (bHour > 12) {
        hour = bHour - 12;
      } else {
        hour = bHour;
      }
    } else if (Radio12Hr.checked === false) {
      if (bHour === 0) {
        hour = 12;
      } else {
        hour = bHour;
      }
    }
  }

  // Time Zone
  function timeZone() {
    if (Radio12Hr.checked === true) {
      if (bHour > 11) {
        zoneID.innerHTML = "PM";
      } else {
        zoneID.innerHTML = "AM";
      }
    } else if (Radio12Hr.checked === false) {
      zoneID.innerHTML = "";
    }
  }

  // Day Time
  function dayTime() {
    if (bHour >= 5 && bHour < 12) {
      dayTimeID.innerHTML = "Good Morning, ";
    } else if (bHour >= 12 && bHour < 16) {
      dayTimeID.innerHTML = "Good After Noon, ";
    } else if (bHour >= 16 && bHour < 21) {
      dayTimeID.innerHTML = "Good Evening, ";
    } else {
      dayTimeID.innerHTML = "Good Night, ";
    }
  }

  // Adding 0 to minutes
  function min0() {
    // if (bMin < 10) {
    //   min = `0${bMin}`;
    // } else {
    //   min = bMin;
    // }
    bMin < 10 ? (min = `0${bMin}`) : (min = bMin);
  }

  hourFormat();
  timeZone();
  dayTime();
  min0();

  // Printing Time
  hourID.innerHTML = hour;
  minID.innerHTML = min;
}, 1000);

// Google Search Form
let searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let searchInput = document.getElementById("search-input").value;
  let searchUrl =
    "https://www.google.com/search?q=" + encodeURIComponent(searchInput);
  // window.location.href = searchUrl;
  window.open(searchUrl, "_blank");
  document.getElementById("search-input").value = "";
});

// <--------------------------------  Setting  -------------------------------->

// Selecting ID's
let container = document.getElementById("container");
const settingBox = document.getElementById("setting-box");
const openSettingBtn = document.getElementById("open-setting");

// Open Setting
openSettingBtn.addEventListener("click", openSetting);

function openSetting() {
  openSettingBtn.style.display = "none";
  settingBox.style.width = "350px";
}

// Open Setting on left side hover
document.addEventListener("mousemove", hoverOpen);

function hoverOpen(event) {
  const cursorX = event.clientX;
  const cursorY = event.clientY;
  // console.log(`X = ${cursorX} and Y = ${cursorY}`);
  if (cursorX === 0 && cursorY > window.innerHeight - 100) {
    openSetting();
  } else if (cursorX === window.innerWidth - 1 && cursorY < 100) {
    openSetting();
  }
}

// Close Setting on Outside Click
window.onclick = function (event) {
  var clickInsideSetting = event.target.closest("#setting-box") !== null;
  var clickInsideOpenSettingBtn =
    event.target.closest("#open-setting") !== null;
  if (!clickInsideSetting && !clickInsideOpenSettingBtn) {
    settingBox.style.width = "0px";
    setTimeout(() => {
      openSettingBtn.style.display = "block";
    }, 300);
  }

  // Reset Box Visibility
  var clickInsideSureBox = event.target.closest("#sure-reset") !== null;
  if (!clickInsideSureBox && event.target !== resetBtn) {
    sureBox.style.height = "0px";
    sureBox.style.padding = "0px";
  }
};

// <--------------------------------  Wallpaper  Setting  -------------------------------->

// Container Dim
document.getElementById("dim-range").addEventListener("input", containerDim);
function containerDim() {
  let dimRange = document.getElementById("dim-range").value;
  let dimValue = document.getElementById("dim-value");
  container.style.backgroundColor = `rgba(0, 0, 0, ${dimRange})`;
  let roundedDimValue = Math.round(dimRange * 100);
  dimValue.innerHTML = `${roundedDimValue}%`;

  localStorage.setItem("dim", dimRange);
}
// Container Blur
document.getElementById("blur-range").addEventListener("input", containerBlur);
function containerBlur() {
  let blurRange = document.getElementById("blur-range").value;
  let blurValue = document.getElementById("blur-value");
  container.style.backdropFilter = `blur(${blurRange}px)`;
  roundedBlurValue = blurRange * 5;
  blurValue.innerHTML = `${roundedBlurValue}%`;

  localStorage.setItem("blur", blurRange);
}

// <--------------------------------  Time  Setting  -------------------------------->

// Time Container Visibility
let timeCheckbox = document.getElementById("time-checkbox"),
  timeContainer = document.getElementById("time-container");

timeCheckbox.addEventListener("change", timeContVisibility);
function timeContVisibility() {
  const timeContHeight = timeCheckbox.checked ? "130px" : "0";
  const timeContPaddingTop = timeCheckbox.checked ? "20px" : "0";
  const timeContMarginBottom = timeCheckbox.checked ? "15px" : "0";

  timeContainer.style.height = timeContHeight;
  timeContainer.style.paddingTop = timeContPaddingTop;
  timeContainer.style.marginBottom = timeContMarginBottom;
  if (timeCheckbox.checked === false) {
    localStorage.setItem(
      "timeContVisibility",
      JSON.stringify({
        timeContHeight,
        timeContPaddingTop,
        timeContMarginBottom,
        timeCheckValue: timeCheckbox.checked,
      })
    );
  } else {
    localStorage.removeItem("timeContVisibility");
  }
}

// Time Format
let Radio12Hr = document.getElementById("radio-12hr");
let Radio24Hr = document.getElementById("radio-24hr");
let label12Hr = document.getElementById("label-12hr");
let label24Hr = document.getElementById("label-24hr");

Radio12Hr.addEventListener("change", timeFormat);
Radio24Hr.addEventListener("change", timeFormat);
function timeFormat() {
  let hr12Background = Radio12Hr.checked ? "#f7a707" : "transparent";
  let hr24Background = Radio24Hr.checked ? "#f7a707" : "transparent";

  label12Hr.style.background = hr12Background;
  label24Hr.style.background = hr24Background;

  if (Radio24Hr.checked) {
    localStorage.setItem(
      "timeFormat",
      JSON.stringify({
        hr12Background,
        hr24Background,
        Radio24HrCheckValue: Radio24Hr.checked,
      })
    );
  } else if (Radio12Hr.checked) {
    localStorage.removeItem("timeFormat");
  }
}

// <--------------------------------  Message  Setting  -------------------------------->

// Message Container Visibility
let msgCheckbox = document.getElementById("msg-checkbox");
let msgContainer = document.getElementById("msg-container");

msgCheckbox.addEventListener("change", msgContVisibility);
function msgContVisibility() {
  const msgContHeight = msgCheckbox.checked ? "60px" : "0";
  const msgContMarginBottom = msgCheckbox.checked ? "15px" : "0";

  msgContainer.style.height = msgContHeight;
  msgContainer.style.marginBottom = msgContMarginBottom;

  if (msgCheckbox.checked === false) {
    localStorage.setItem(
      "msgContVisibility",
      JSON.stringify({
        msgContHeight,
        msgContMarginBottom,
        msgChecked: msgCheckbox.checked,
      })
    );
  } else {
    localStorage.removeItem("msgContVisibility");
  }
}

// Message Name
document.getElementById("name-input").value =
  document.getElementById("name").innerText;
document.getElementById("name-input").addEventListener("input", nameChange);
function nameChange() {
  let nameInput = document.getElementById("name-input").value;
  let name = document.getElementById("name");
  name.innerHTML = nameInput;

  localStorage.setItem("Name", nameInput);
}

// <--------------------------------  Search  Setting  -------------------------------->

// Search Container Visibility
let searchCheckbox = document.getElementById("search-checkbox");
let searchContainer = document.getElementById("search-container");

searchCheckbox.addEventListener("change", searchContVisibility);
function searchContVisibility() {
  const searchContHeight = searchCheckbox.checked ? "50px" : "0";
  const searchContMarginBottom = searchCheckbox.checked ? "15px" : "0";

  searchContainer.style.height = searchContHeight;
  searchContainer.style.marginBottom = searchContMarginBottom;

  if (searchCheckbox.checked === false) {
    localStorage.setItem(
      "searchContVisibility",
      JSON.stringify({
        searchContHeight,
        searchContMarginBottom,
        searchChecked: searchCheckbox.checked,
      })
    );
  } else {
    localStorage.removeItem("searchContVisibility");
  }
}

// <--------------------------------  Shortcuts  Setting  -------------------------------->

// Shortcut Container Visibility
let shortcutCheckbox = document.getElementById("shortcut-checkbox");
let shortcutContainer = document.getElementById("shortcut-container");

shortcutCheckbox.addEventListener("change", shortcutContVisibility);
function shortcutContVisibility() {
  const shortcutContHeight = shortcutCheckbox.checked ? "200px" : "0";

  shortcutContainer.style.height = shortcutContHeight;

  if (shortcutCheckbox.checked === false) {
    localStorage.setItem(
      "shortcutContVisibility",
      JSON.stringify({
        shortcutContHeight,
        shortcutChecked: shortcutCheckbox.checked,
      })
    );
  } else {
    localStorage.removeItem("shortcutContVisibility");
  }
}

// Open shortcuts in new tab
let newTabCheckbox = document.getElementById("newTab-checkbox");

newTabCheckbox.addEventListener("change", newTabOpen);
function newTabOpen() {
  let shortcuts = document.querySelectorAll(".shortcut");

  function addNewTab() {
    shortcuts.forEach((element) => {
      element.setAttribute("target", "_blank");
    });
  }
  function removeNewTab() {
    shortcuts.forEach((element) => {
      element.removeAttribute("target");
    });
  }
  newTabCheckbox.checked ? removeNewTab() : addNewTab();
}

// Icon Corners
document.getElementById("icon-range").addEventListener("input", iconCorners);
function iconCorners() {
  let iconRange = document.getElementById("icon-range").value;
  let iconValue = document.getElementById("icon-value");
  let allIcons = document.querySelectorAll(".shortcut-icon");
  allIcons.forEach((element) => {
    element.style.borderRadius = `${iconRange}%`;
  });
  iconValue.innerHTML = `${iconRange}%`;
  if (iconRange < 50) {
    localStorage.setItem("iconCorners", iconRange);
  } else {
    localStorage.removeItem("iconCorners");
  }
}

// <--------------------------------  Reset  Setting  -------------------------------->

// Setting Reset
let resetBtn = document.getElementById("reset-setting-btn");
let sureBox = document.getElementById("sure-reset");
let cancelBtn = document.getElementById("cancel-btn");
let okBtn = document.getElementById("ok-btn");
resetBtn.addEventListener("click", function () {
  sureBox.style.height = "125px";
  sureBox.style.padding = "15px";
});
function sureBoxHidden() {
  sureBox.style.height = "0px";
  sureBox.style.padding = "0px";
}
okBtn.addEventListener("click", function () {
  localStorage.clear();
  sureBoxHidden();
  location.reload();
});
cancelBtn.addEventListener("click", function () {
  sureBoxHidden();
});
