import { terser } from 'rollup-plugin-terser'

export default (async () => ({
  input: 'src/animations.js',
  output: {
    file: 'dist/animations.js',
    format: 'umd',
    name: 'animations'
  },
  plugins: [terser()]
}))()
