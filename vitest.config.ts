/// <reference types="vitest/config" />

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'vitest/config';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [vanillaExtractPlugin()],
  optimizeDeps: {
    include: ['react/jsx-dev-runtime'],
  },
  resolve: {
    alias: {
      '@zelda/core': path.resolve(dirname, 'packages/core/src'),
      '@zelda/icons': path.resolve(dirname, 'packages/icons/src'),
      '@zelda/theme': path.resolve(dirname, 'packages/theme/src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    projects: [
      {
        test: {
          name: 'unit',
          include: ['packages/**/*.test.{ts,tsx}'],
          exclude: ['**/*.stories.*', 'tests/**/*'],
          globals: true,
          environment: 'jsdom',
          setupFiles: ['./vitest.setup.ts'],
          pool: 'forks',
          isolate: true,
        },
      },
      {
        plugins: [
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
          silent: true,
          onConsoleLog: () => false,
          reporters: [['default', { summary: false }]],
          testTimeout: 30000,
          retry: process.env.CI ? 2 : 0,
          logHeapUsage: false,
          outputFile: false,
          onTaskUpdate: () => {},
          onUnhandledRejection: () => {},
        },
      },
    ],
  },
});
