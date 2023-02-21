import path from 'path'
import webpack, { RuleSetRule } from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration}) => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src')
	}
	config.resolve?.modules?.push(paths.src)
	config.resolve?.extensions?.push('.ts', '.tsx')

	
	config.resolve = {
		...config.resolve,
		alias: { '@': paths.src },
	}

	
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	config.module!.rules = config.module!.rules!
		.map((rule: RuleSetRule | '...') => {
			if (
				rule !== '...' &&
				rule.test instanceof RegExp &&
				rule.test.toString().includes('svg')
			) {
				return { ...rule, exclude: /\.svg$/i }
			}

			return rule
		})

	config.module?.rules?.push({
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	})

	config.module?.rules?.push(buildCssLoader(true))
	
	return config
}