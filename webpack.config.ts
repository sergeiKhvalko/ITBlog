import path from 'path'
import webpack from 'webpack'
import { BuildEnv } from './config/types/config'
import { buildWebpackConfig } from './config/buildWebpackConfig'



export default (env: BuildEnv) => {
	const paths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	}

	const mode = env.mode || 'development'
	const port = env.port || 3000
	const isDev = mode === 'development'
	
	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		port,
		paths,
		isDev
	})

	return config
}

