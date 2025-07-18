import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../packages/*/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    const { vanillaExtractPlugin } = await import('@vanilla-extract/vite-plugin');
    
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
    });
  },
};
export default config;
