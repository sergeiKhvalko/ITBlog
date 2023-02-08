import { RuleSetRule } from "webpack"

export const buildLoaders = (): RuleSetRule[] => {

	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const scssLoader = {
		test: /\.css$/,
		use: [
			{ loader: 'style-loader' },
			{
				loader: 'css-loader',
				options: {
					modules: true,
				},
			},
			{ loader: 'sass-loader' },
		],
	}

	return [tsLoader]
}