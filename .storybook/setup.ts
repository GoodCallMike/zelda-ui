// Storybook setup - prevent jest-dom from loading
globalThis.expect = Object.assign(
  () => ({
    extend: () => {},
    toHaveNoViolations: () => {},
    toBeInTheDocument: () => {},
    toHaveAttribute: () => {},
    toHaveValue: () => {},
    toHaveFocus: () => {},
    toBeEnabled: () => {},
    toBeDisabled: () => {},
    toBeChecked: () => {},
    toHaveTextContent: () => {},
    toHaveAccessibleName: () => {},
    toHaveAccessibleDescription: () => {},
  }),
  { extend: () => {} },
);
