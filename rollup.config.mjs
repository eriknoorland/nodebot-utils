import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';

const name = 'robotlib';
const outputFormats = [
  {
    file: `dist/${name}.js`,
    format: 'es',
  },
  {
    file: `dist/${name}.cjs`,
    format: 'cjs',
  },
];

export default [
  ...outputFormats.map(output => {
    return {
      input: 'src/index.ts',
      output,
      external: ['fs', 'events'],
      plugins: [
        typescript({
          exclude: [
            '**/test',
            '**/*.spec.ts',
          ],
        }),
        terser(),
      ],
    };
  }),

  {
    input: 'dist/dts/index.d.ts',
    output: {
      file: `dist/${name}.d.ts`,
      format: 'es',
    },
    external: ['events'],
    plugins: [
      dts(),
    ],
  },
];