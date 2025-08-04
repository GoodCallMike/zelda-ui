import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";
import React from 'react';
import { setProjectAnnotations } from '@storybook/react-vite';
import * as projectAnnotations from './preview';
import '@testing-library/jest-dom';
import { expect, vi } from 'vitest';

// Fix React hooks by ensuring React is properly available
// @ts-ignore
globalThis.React = React;
// @ts-ignore
global.React = React;

// Make vitest globals available
// @ts-ignore
globalThis.expect = expect;
// @ts-ignore
globalThis.vi = vi;

// This is an important step to apply the right configuration when testing your stories.
setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);