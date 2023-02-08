import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildLoaders';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
	const { mode, paths } = options;

	return {
		mode: mode,
		entry: paths.entry,
		output: {
			path: paths.build,
			filename: '[name].[contenthash].bundle.js',
			clean: true
		},
		plugins: buildPlugins(options),
		module: {rules: buildLoaders()},
		resolve: buildResolvers(options),
	};
}