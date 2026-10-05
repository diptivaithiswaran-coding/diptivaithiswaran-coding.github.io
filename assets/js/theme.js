(() => {
  const root = document.documentElement;
  const button = document.querySelector("[data-theme-toggle]");
  const label = document.querySelector("[data-theme-label]");
  const storageKey = "dipti-portfolio-theme";
  const validThemes = new Set(["light", "dark"]);

  if (!button || !label) return;

  try {
    const savedTheme = window.localStorage.getItem(storageKey);
    if (validThemes.has(savedTheme)) root.dataset.theme = savedTheme;
  } catch {
    // Theme switching still works when browser storage is unavailable.
  }

  const currentTheme = () => {
    if (validThemes.has(root.dataset.theme)) return root.dataset.theme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const updateButton = () => {
    const darkModeIsOn = currentTheme() === "dark";
    label.textContent = darkModeIsOn ? "Light theme" : "Dark theme";
    button.setAttribute("aria-pressed", String(darkModeIsOn));
    button.setAttribute("aria-label", `Switch to ${darkModeIsOn ? "light" : "dark"} theme`);
  };

  button.addEventListener("click", () => {
    const nextTheme = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem(storageKey, nextTheme);
    } catch {
      // The selected theme applies for this page view without browser storage.
    }
    updateButton();
  });

  updateButton();
})();