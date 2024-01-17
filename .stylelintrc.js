const { propertyGroups } = require('stylelint-config-clean-order')

module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-clean-order/error',
		'stylelint-config-prettier-scss',
	],
	rules: {
		// indentation: [2, { baseIndentLevel: 0 }],
		'selector-class-pattern': null,
		'color-function-notation': 'legacy',
		'order/properties-order': [
			propertyGroups.map((properties) => ({
				noEmptyLineBetween: true,
				emptyLineBefore: 'always', // Don't add empty lines between order groups.
				properties,
			})),
			{
				severity: 'warning',
				unspecified: 'bottomAlphabetical',
			},
		],
	},
	fix: true,
}
