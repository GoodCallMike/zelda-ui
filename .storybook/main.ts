import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../packages/*/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-toolbars'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    const { vanillaExtractPlugin } = await import('@vanilla-extract/vite-plugin');
    
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
      resolve: {
        alias: {
          '@jetstream/core': new URL('../packages/core/src', import.meta.url).pathname,
        },
      },
    });
  },
};
export default config;
