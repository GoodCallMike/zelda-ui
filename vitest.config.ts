/// <reference types="vitest/config" />

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['packages/**/*.test.{ts,tsx}'],
    exclude: ['tests/**/*', 'node_modules/**/*'],
  },
  resolve: {
    alias: {
      '@zelda/core': '/packages/core/src',
      '@zelda/icons': '/packages/icons/src',
      '@zelda/theme': '/packages/theme/src',
    },
  },
});
