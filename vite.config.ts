import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@mdx-js/react', 'markdown-to-jsx', 'react/jsx-dev-runtime'],
  },
});
