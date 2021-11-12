/*
 * @Author: itmanyong
 * @Date: 2021-07-28 09:23:49
 * @LastEditTime: 2021-11-12 13:41:01
 * @LastEditors: itmanyong
 * @Description:
 * @FilePath: \cxy-react-i18n\rollup.config.js
 * ___
 */
import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { uglify } from 'rollup-plugin-uglify';

// 排除掉react，不作为打包项目
const external = ['react', 'concent'];

export default {
	input: './src/index.js',
	external,
	output: {
		name: 'concent-i18n',
		exports: 'named',
		format: 'umd',
		file:"./lib/bundle.js",
		globals: {
			react: 'React',
			concent: 'concent',
		},
	},
	plugins: [
		nodeResolve(),
		terser(),
		babel({
			exclude: '**/node_modules/**',
			runtimeHelpers: true,
		}),
		uglify({}),
	],
};
