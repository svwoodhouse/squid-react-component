import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const config = {
  input: './src/index.js',
  output: [
    {
      file: 'dist/index.es.js',
      format: 'es',
      exports: 'named'
    },
    {
      file: 'dist/index.js',
      format: 'cjs',
    }
],
  plugins: [
    peerDepsExternal(),
    resolve(
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ),
    commonjs(),
    babel({ 
        exclude: '/node_modules/**', 
        presets:['@babel/preset-react'], 
        babelHelpers: 'bundled' }),
    postcss({
        plugins:[],
        minimize: true
    }),
    terser()]
};

export default config;