import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'index.js',  // Ensure this file exists in your project
  output: {
    file: 'dist/bundle.js', // The bundled output file
    format: 'umd',
    name: 'FilterPlugin',
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled', presets: ['@babel/preset-env'] })  // Add preset-env
  ]
};
