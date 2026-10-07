(() => {
  const root = document.documentElement;
  const button = document.querySelector("[data-theme-toggle]");
  const label = document.querySelector("[data-theme-label]");
  const storageKey = "dipti-portfolio-theme";
  const validThemes = new Set(["light", "dark"]);
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (!button || !label) return;

  try {
    const savedTheme = window.localStorage.getItem(storageKey);
    if (validThemes.has(savedTheme)) root.dataset.theme = savedTheme;
  } catch {
    // Theme switching still works when browser storage is unavailable.
  }

  const currentTheme = () => {
    if (validThemes.has(root.dataset.theme)) return root.dataset.theme;
    return preferredTheme.matches ? "dark" : "light";
  };

  const updateButton = () => {
    const darkModeIsOn = currentTheme() === "dark";
    label.textContent = darkModeIsOn ? "Dark" : "Light";
    button.setAttribute("aria-checked", String(darkModeIsOn));
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content", darkModeIsOn ? "#191a2b" : "#f0f5ff"
    );
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

  preferredTheme.addEventListener("change", updateButton);
  updateButton();
})();