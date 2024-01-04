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
      hourFormatHeight,
      timeChecked,
    } = JSON.parse(savedTimeVisibility);
    timeContainer.style.height = timeContHeight;
    timeContainer.style.paddingTop = timeContPaddingTop;
    timeContainer.style.marginBottom = timeContMarginBottom;
    hourFormatSettingTile.style.height = hourFormatHeight;
    timeCheckbox.checked = timeChecked;
  }
  // Time Format
  const savedTimeFormat = localStorage.getItem("timeFormat");
  if (savedTimeFormat !== null) {
    const {
      hr12Background,
      hr24Background,
      Radio12HrChecked,
      Radio24HrChecked,
    } = JSON.parse(savedTimeFormat);
    label12Hr.style.background = hr12Background;
    label24Hr.style.background = hr24Background;
    Radio12Hr.checked = Radio12HrChecked;
    Radio24Hr.checked = Radio24HrChecked;
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
  // Search Container Visibility
  const savedSearchVisibility = localStorage.getItem("searchContVisibility");
  if (savedSearchVisibility !== null) {
    const { searchContHeight, searchContMarginBottom, searchChecked } =
      JSON.parse(savedSearchVisibility);
    searchContainer.style.height = searchContHeight;
    searchContainer.style.marginBottom = searchContMarginBottom;
    searchCheckbox.checked = searchChecked;
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

  // Open shortcut in new tab
  let savedCheckboxState = localStorage.getItem("newTabCheckbox");
  let savedShortcutNewTab = localStorage.getItem("shortcutNewTab");

  if (savedCheckboxState !== null && savedShortcutNewTab !== null) {
    newTabCheckbox.checked = savedCheckboxState === "true";
    window[savedShortcutNewTab]();
  }
});
