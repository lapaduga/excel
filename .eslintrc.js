module.exports = {
  parser: '@babel/eslint-parser',
	parserOptions: {
		babelOptions: {
			configFile: './babel.config.json',
		}
	},
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: ['eslint:recommended', 'google'],
	rules: {
		'semi': 'off',
		'comma-dangle': 'off',
		'require-jsdoc': 'off',
		"eol-last": 0,
		"no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
	}
};