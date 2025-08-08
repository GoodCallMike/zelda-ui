import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ZeldaUICore',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'zelda-ui-theme',
        'zelda-ui-icons',
        '@floating-ui/react',
        'tslib',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          'zelda-ui-theme': 'ZeldaTheme',
          'zelda-ui-icons': 'ZeldaIcons',
          '@floating-ui/react': 'FloatingUI',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@zelda/core': resolve(__dirname, 'src'),
      '@zelda/icons': resolve(__dirname, '../icons/src'),
      '@zelda/theme': resolve(__dirname, '../theme/src'),
    },
  },
});
