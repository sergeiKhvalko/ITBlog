module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/jsx-runtime',
		'plugin:i18next/recommended'
	],
	overrides: [
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'i18next'
	],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['warn', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'no-unused-vars': 'warn',
		'react/button-has-type': 'warn',
		'object-curly-spacing': [2, 'always'],
		'i18next/no-literal-string': [
			'warn', { markupOnly: true, ignoreAttributes: ['data-testid'] }
		],
		'max-len': ['error', { ignoreComments: true }]
	},

	globals: {
		__IS_DEV__: true
	},

	overrides: [
		{
			files: ['**/src/**/*.test.{ts,tsx}'],
			rules: {
				'i18next/no-literal-string': 'off'
			}
		}
	]
	
}
