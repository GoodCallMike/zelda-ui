// Auto-apply dark mode when dark background is selected
(() => {
  function applyDarkMode() {
    const isDarkFromUrl = window.location.search.includes(
      'backgrounds.value:dark',
    );
    const computedBg = window.getComputedStyle(document.body).backgroundColor;

    // Check if background is dark
    const isDarkBg =
      computedBg.startsWith('rgb(') &&
      (() => {
        const match = computedBg.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (!match) return false;
        const [, r, g, b] = match.map(Number);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness < 128;
      })();

    if (isDarkFromUrl || isDarkBg) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  // Apply immediately
  applyDarkMode();

  // Apply after a delay to catch Storybook background changes
  setTimeout(applyDarkMode, 100);
  setTimeout(applyDarkMode, 300);

  // Watch for URL changes
  let lastUrl = window.location.href;
  new MutationObserver(() => {
    const url = window.location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      setTimeout(applyDarkMode, 100);
    }
  }).observe(document, { subtree: true, childList: true });
})();
