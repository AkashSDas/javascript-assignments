/** Available themes */
var themes = { dark: "dark-theme", light: "light-theme" };

/** See if the theme is stored in local storage */
function getThemeFromLocalStorage() {
  if (typeof window != "undefined") {
    let theme = localStorage.getItem("theme");
    if (theme) return theme;
  }

  // default theme
  return themes.dark;
}

/** Utility for updating the theme in the localstorage */
function updateThemeInLocalStorage(theme) {
  if (typeof window != "undefined") localStorage.setItem("theme", theme);
}

/** Utility for updating the theme class for styling */
function toggleTheme(init) {
  var bodyElement = document.getElementsByTagName("body")[0];
  var theme = getThemeFromLocalStorage();

  if (typeof init == "boolean" && init) {
    bodyElement.classList.add(theme);
  } else if (theme == themes.dark) {
    theme = themes.light;
    bodyElement.classList.remove(themes.dark);
    bodyElement.classList.add(themes.light);
  } else {
    theme = themes.dark;
    bodyElement.classList.add(themes.dark);
    bodyElement.classList.remove(themes.light);
  }

  updateThemeInLocalStorage(theme);
}

/** For initial load. An IIFE */
(function init() {
  // add theme initially
  toggleTheme(true);

  // add event listener for theme change
  (function initThemeEventListener() {
    var btnElement = document.getElementById("theme-change-btn");
    btnElement.addEventListener("click", function themeEventListener() {
      toggleTheme();
      console.log("Theme changed");
    });
  })();
})();
