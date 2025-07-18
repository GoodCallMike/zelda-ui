import { createRollupConfig } from '../../rollup.config.shared.js';

export default createRollupConfig({
  input: 'src/index.ts',
  packageDir: __dirname,
});