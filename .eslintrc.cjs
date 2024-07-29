const overwritedAirbnbRules = {
	"react/react-in-jsx-scope": [0],
	"@typescript-eslint/quotes": [2, "double"],
	"@typescript-eslint/indent": [2, "tab"],
	"no-tabs": [0],
	"react/jsx-indent-props": [2, "tab"],
	"react/jsx-indent": [2, "tab"],
	"import/extensions": [0],
	"react/prop-types": [0],
	"react/function-component-definition": [0],
	"func-names": [0],
	"react/require-default-props": [0],
	"react/jsx-props-no-spreading": [0],
	"arrow-body-style": [0],
	"import/prefer-default-export": [0],
	"jsx-a11y/click-events-have-key-events": [0],
	"no-underscore-dangle": [0],
	"no-param-reassign": [0],
	"eslint/no-restricted-imports": [
		0,
		{
			allowTypeImports: true,
		},
	],
	"react-hooks/exhaustive-deps": [1],
	"react/jsx-one-expression-per-line": [0],
	"no-plusplus": [0],
	radix: [0],
	"jsx-a11y/label-has-associated-control": [0],
	"react/no-array-index-key": [1],
	"react/destructuring-assignment": [0],
	"consistent-return": [0],
	"no-else-return": [0],
	"no-restricted-globals": [0],
	"react/no-unused-prop-types": [0],
};

const temporarilyDisabled = {
	"no-mixed-operators": [0],
	"jsx-a11y/no-noninteractive-tabindex": [0],
	"@typescript-eslint/no-unused-expressions": [0],
	"jsx-a11y/no-noninteractive-element-interactions": [0],
	"@typescript-eslint/no-unused-vars": [0],
	"max-len": [0],
	"react/button-has-type": [0],
	"@typescript-eslint/naming-convention": [0],
	"import/no-cycle": [0],
	"import/no-extraneous-dependencies": [0],
	"@typescript-eslint/no-shadow": [0],
	"import/no-named-as-default": [0],
	"jsx-a11y/alt-text": [0],
	"jsx-a11y/no-static-element-interactions": [0],
	"react/no-unescaped-entities": [0],
	"jsx-a11y/anchor-is-valid": [0],
};

const overwritedFsdRules = {
	"@conarti/feature-sliced/layers-slices": [
		"error",
		{
			ignorePatterns: [
				"**/StoreProvider/**",
			],
		},
	],
};

module.exports = {
	// ignorePatterns: ["config/build/buildDevServer.ts"],
	extends: [
		"airbnb",
		"airbnb-typescript",
		"airbnb/hooks",
		"plugin:@conarti/feature-sliced/recommended",
	],
	parserOptions: {
		project: ["./tsconfig.json", "./tsconfig.node.json"],
	},
	plugins: ["prettier"],
	overrides: [
		{
			files: ["./src/shared/**"],
			rules: {
				"@conarti/feature-sliced/absolute-relative": [0],
			},
		},
	],
	rules: {
		...overwritedAirbnbRules,
		...overwritedFsdRules,
		...temporarilyDisabled,
	},
};
