import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";
import React from 'react';
import { setProjectAnnotations } from '@storybook/react-vite';
import * as projectAnnotations from './preview';

// Ensure React is available globally for hooks
if (typeof globalThis !== 'undefined') {
  globalThis.React = React;
}

// Make React available in global scope for hooks
if (typeof global !== 'undefined') {
  global.React = React;
}

// For browser environment
if (typeof window !== 'undefined') {
  window.React = React;
}

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);