document.addEventListener("DOMContentLoaded", function () {
  // Dim Container
  const savedDimValue = localStorage.getItem("dim");
  if (savedDimValue !== null) {
    document.getElementById("dim-range").value = savedDimValue;
    containerDim();
  }
  // Blur Container
  const savedBlurValue = localStorage.getItem("blur");
  if (savedBlurValue !== null) {
    document.getElementById("blur-range").value = savedBlurValue;
    containerBlur();
  }

  // Time Container Visibility
  const savedTimeVisibility = localStorage.getItem("timeContVisibility");
  if (savedTimeVisibility !== null) {
    const {
      timeContHeight,
      timeContPaddingTop,
      timeContMarginBottom,
      timeCheckValue,
    } = JSON.parse(savedTimeVisibility);
    timeContainer.style.height = timeContHeight;
    timeContainer.style.paddingTop = timeContPaddingTop;
    timeContainer.style.marginBottom = timeContMarginBottom;
    timeCheckbox.checked = timeCheckValue;
  }

  // Time Format
  const savedTimeFormat = localStorage.getItem("timeFormat");
  if (savedTimeFormat !== null) {
    if (savedTimeFormat === "true") {
      Radio24Hr.checked = true;
    }
  }

  // Message Container Visibility
  const savedMsgVisibility = localStorage.getItem("msgContVisibility");
  if (savedMsgVisibility !== null) {
    const { msgContHeight, msgContMarginBottom, msgChecked } =
      JSON.parse(savedMsgVisibility);
    msgContainer.style.height = msgContHeight;
    msgContainer.style.marginBottom = msgContMarginBottom;
    msgCheckbox.checked = msgChecked;
  }
  // Message Name
  const savedName = localStorage.getItem("Name");
  if (savedName !== null) {
    document.getElementById("name").innerHTML = savedName;
    document.getElementById("name-input").value = savedName;
  }

  // Search Container Visibility
  const savedSearchVisibility = localStorage.getItem("searchContVisibility");
  if (savedSearchVisibility !== null) {
    const { searchContHeight, searchContMarginBottom, searchChecked } =
      JSON.parse(savedSearchVisibility);
    searchContainer.style.height = searchContHeight;
    searchContainer.style.marginBottom = searchContMarginBottom;
    searchCheckbox.checked = searchChecked;
  }

  // New Tab Search
  let savedNewTabSearch = localStorage.getItem("newTabSearch");
  if (savedNewTabSearch === "true") {
    newTabSearchCheckbox.checked = true;
  }

  // Search Logo
  let savedSearchLogo = localStorage.getItem("searchLogo");
  if (savedSearchLogo === "true") {
    bingRadio.checked = true;
    searchLogoChange();
  }

  // Shortcut Container Visibility
  const savedShortcutVisibility = localStorage.getItem(
    "shortcutContVisibility"
  );
  if (savedShortcutVisibility !== null) {
    const { shortcutContHeight, shortcutChecked } = JSON.parse(
      savedShortcutVisibility
    );
    shortcutContainer.style.height = shortcutContHeight;
    shortcutCheckbox.checked = shortcutChecked;
  }

  // New Tab Shortcuts
  let savednewTabShortcut = localStorage.getItem("newTabShortcut");
  if (savednewTabShortcut === "true") {
    newTabShortcutCheckbox.checked = true;
    newTabOpen();
  }

  // Icon Corners
  let savedIconCorners = localStorage.getItem("iconCorners");
  if (savedIconCorners !== null) {
    document.getElementById("icon-range").value = savedIconCorners;
    iconCorners();
  }
});

// Hot Corner
let savedHotCorner = localStorage.getItem("hotCorner");
if (savedHotCorner !== null) {
  if (savedHotCorner === "true") {
    document.getElementById("hot-corners-checkbox").checked = true;
    hotCorner();
  } else {
    document.getElementById("hot-corners-checkbox").checked = false;
  }
} else {
  hotCorner();
}
