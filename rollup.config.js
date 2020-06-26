  import multi from '@rollup/plugin-multi-entry';
  import typescript from "rollup-plugin-typescript2";
  import { typescriptPaths } from 'rollup-plugin-typescript-paths';

  export default {
    input: 'src/module.ts',
    preserveModules: true,
    output: {
      dir: 'lib',
      format: 'cjs'
    },
    plugins: [
      typescript(),
      typescriptPaths()],
  };

