import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import packageJson from './package.json' assert {type: 'json'};

export default [{
  input: './src/index.js',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      name: 'squid-react-components'
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
  }
],
  plugins: [
    external(),
    resolve({ extensions: ['.jsx', '.js', '.tsx'] }),
    commonjs({ include: ['node_modules/**'] }),
    babel({ 
        exclude: '/node_modules/**', 
        presets:["@babel/preset-env",["@babel/preset-react", {"runtime": "automatic"}]], 
        extensions: [".js", ".ts", ".jsx", ".tsx"],
        babelHelpers: 'bundled' }),
    postcss({
        plugins:[],
        minimize: true
    }),
    terser()],
    external: ["react", "react-dom"]
}
]