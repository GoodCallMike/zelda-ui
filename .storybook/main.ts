import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';

const customRequire = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: [
    '../packages/core/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../packages/theme/src/Colors.stories.tsx',
    '../.storybook/stories/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-vitest'),
    getAbsolutePath('@storybook/addon-a11y'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  staticDirs: ['../public'],

  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    const { vanillaExtractPlugin } = await import(
      '@vanilla-extract/vite-plugin'
    );

    return mergeConfig(config, {
      base: process.env.BASE_PATH || '/',
      plugins: [vanillaExtractPlugin()],
      resolve: {
        alias: {
          '@zelda/core': new URL('../packages/core/src', import.meta.url)
            .pathname,
          '@zelda/icons': new URL('../packages/icons/src', import.meta.url)
            .pathname,

          '@zelda/theme': new URL('../packages/theme/src', import.meta.url)
            .pathname,
        },
      },
      optimizeDeps: {
        include: ['react', 'react-dom', 'react/jsx-runtime'],
      },
      define: {
        global: 'globalThis',
      },
    });
  },
};
export default config;

function getAbsolutePath(value: string): string {
  return dirname(customRequire.resolve(join(value, 'package.json')));
}
