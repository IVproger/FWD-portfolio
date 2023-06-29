import {nodeResolve} from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: 'src/api.ts',
    output: { file: 'dist/bundle.js' },
    plugins: [
        typescript(),
        commonjs(),
        nodeResolve({ browser: true }),
        terser(),
    ],
    
};