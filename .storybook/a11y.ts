export const a11yConfig = {
  // Configure axe-core rules
  config: {
    rules: [
      {
        id: 'color-contrast',
        enabled: true,
      },
      {
        id: 'keyboard-navigation',
        enabled: true,
      },
      {
        id: 'focus-management',
        enabled: true,
      },
    ],
  },
  // Configure accessibility options
  options: {
    checks: { 'color-contrast': { options: { noScroll: true } } },
    restoreScroll: true,
  },
  // Manual accessibility checks to run
  manual: true,
};
