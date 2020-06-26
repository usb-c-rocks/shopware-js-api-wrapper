import typescript from "rollup-plugin-typescript2";
import { typescriptPaths } from 'rollup-plugin-typescript-paths';

export default {
  input: 'src/index.ts',
  preserveModules: true,
  output: {
    dir: 'lib',
    format: 'cjs'
  },
  plugins: [
    typescript(),
    typescriptPaths()],
};

