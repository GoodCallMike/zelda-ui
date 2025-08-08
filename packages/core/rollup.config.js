import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'es',
        sourcemap: true,
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        preferBuiltins: false,
        browser: false,
      }),
      commonjs({
        include: [],
      }),
      postcss({
        modules: true,
        extract: false,
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
      }),
    ],
    external: (id) => {
      // Externalize all React-related modules
      if (id.startsWith('react')) return true;
      // Externalize peer dependencies
      if (['zelda-ui-theme', 'zelda-ui-icons'].includes(id)) return true;
      // Externalize any node_modules
      if (id.includes('node_modules')) return true;
      return false;
    },
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
