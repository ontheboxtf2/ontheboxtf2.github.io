/* eslint-env node */
/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:unicorn/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:svelte/recommended',
        'plugin:compat/recommended',
    ],
    plugins: ['compat', 'prefer-arrow', '@typescript-eslint', 'functional'],
    rules: {
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                ignoreRestSiblings: true,
                varsIgnorePattern: '^_',
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/naming-convention': [
            'warn',
            {
                selector: 'default',
                format: ['strictCamelCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: 'variable',
                format: ['strictCamelCase', 'StrictPascalCase'], // StrictPascalCase is only permitted for component names.
                leadingUnderscore: 'allow',
            },

            {
                selector: 'objectLiteralProperty',
                format: ['strictCamelCase', 'StrictPascalCase'], // StrictPascalCase is only permitted for component names. Sometimes you may want to wrap them up. It's infrequent so we could remove StrictPascalCase here.
                leadingUnderscore: 'allow',
            },
            {
                selector: 'objectLiteralProperty',
                modifiers: ['requiresQuotes'],
                // eslint-disable-next-line unicorn/no-null
                format: null, // We need to allow kebab case in { 'kebab-case': 'string' }, but this option is not supported.
                leadingUnderscore: 'allow',
            },
            { selector: 'typeLike', format: ['StrictPascalCase'] },
        ],
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/array-type': ['warn', { default: 'array' }],
        '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
        '@typescript-eslint/no-loss-of-precision': 'warn',
        'svelte/no-store-async': 'warn',
        'svelte/button-has-type': 'warn',
        'svelte/require-optimized-style-attribute': 'warn',
        'svelte/require-stores-init': 'warn',
        'svelte/prefer-class-directive': 'warn',
        'svelte/no-extra-reactive-curlies': 'warn',
        'svelte/prefer-style-directive': 'warn',
        'svelte/spaced-html-comment': 'warn',
        'unicorn/empty-brace-spaces': 'off', // This is handled by prettier.
        'unicorn/filename-case': [
            'warn',
            {
                cases: {
                    kebabCase: true,
                    pascalCase: true,
                },
            },
        ],
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-array-for-each': 'off', // TODO: Right now we enforce forEach, but we COULD switch to for of with this rule.
        'unicorn/no-await-expression-member': 'off',
        'unicorn/no-nested-ternary': 'off',
        'unicorn/no-process-exit': 'off', // We aren't using NodeJS.
        'unicorn/no-unsafe-regex': 'warn',
        'unicorn/prefer-at': 'warn',
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-node-protocol': 'off', // We aren't using NodeJS.
        'unicorn/prefer-string-replace-all': 'warn',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/no-useless-undefined': 'off', // Doesnt play nice with TypeScript required parameters that
        'unicorn/new-for-builtins': 'off', // Conflicts with unicorn's own rule. Would rather never use new anyways (it's just noise).
        'no-loss-of-precision': 'off',
        'object-shorthand': ['warn', 'properties'],
        'no-mixed-spaces-and-tabs': 'off', // Conflicts with prettier.
        'prefer-template': 'warn',
        'no-useless-concat': 'warn',
        quotes: ['warn', 'single'],
        'prefer-arrow/prefer-arrow-functions': [
            'warn',
            {
                disallowPrototype: true,
            },
        ],
        'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],
        'func-style': ['warn', 'expression'],
        'arrow-body-style': ['warn', 'as-needed'],
        'prefer-destructuring': [
            'warn',
            {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
                AssignmentExpression: {
                    // This is propblematic in svelte... but the syntax is also often more complicated and can be problematic without semicolons. "({ foo } = object);" vs "foo = object.foo"
                    array: false,
                    object: false,
                },
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        'no-loop-func': 'warn',
        'prefer-object-spread': 'warn',
        'array-callback-return': ['warn', { checkForEach: true }],
        'no-eval': 'error',
        'default-param-last': 'warn',
        'no-new-func': 'warn',
        'no-param-reassign': ['warn', { props: true }],
        'no-iterator': 'error',
        'dot-notation': 'warn',
        'one-var': ['warn', 'never'],
        'no-multi-assign': 'warn',
        'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
        eqeqeq: ['warn', 'always', { null: 'ignore' }],
        'no-unneeded-ternary': ['warn', { defaultAssignment: false }],
        'spaced-comment': ['warn', 'always'],
        radix: ['warn', 'as-needed'],
        'no-new-wrappers': 'warn',
        'no-new-object': 'warn',
        'no-await-in-loop': 'warn',
        'no-new': 'warn',
        'no-return-assign': ['warn', 'always'],
        'no-sequences': ['warn', { allowInParentheses: false }], // This feature is useful for quick/temporary debugging of arrow functions with implicit returns, but isn't really something we want to persist in our code. We could lift this rule if some of that debugging is worth persisting. Ex: const addOne = (a: number) => (console.log(a), a + 1). However, by disallowing chaining via the comma operator we get closer to disallowing side effects from arrow functions with implicit returns (we can't stop invoking functions on the right hand side from dispatching side effects though).
        'operator-assignment': ['warn', 'never'], // These are useful, but prefer not mutating variables at all. Removing dependence on the left hand side of the assignment is one step closer to using pure expressions. This rule may be overly strict. If so, remove it.
        'no-prototype-builtins': 'warn',
        'prefer-object-has-own': 'warn',
        'no-restricted-syntax': [
            'warn',
            {
                selector: 'ForInStatement',
                message:
                    'Prefer a higher order function (map/reduce/filter/etc.) for data transformation or forEach for side effect dispatch over for loops.',
            },
            {
                selector: 'ForOfStatement',
                message:
                    'Prefer a higher order function (map/reduce/filter/etc.) for data transformation or forEach for side effect dispatch over for loops.',
            },
            {
                selector: 'ForStatement',
                message:
                    'Prefer a higher order function (map/reduce/filter/etc.) for data transformation or forEach for side effect dispatch over for loops.',
            },
            {
                selector: 'DoWhileStatement',
                message:
                    'Prefer a higher order function or recursion over while loops.',
            },
            {
                selector: 'WhileStatement',
                message:
                    'Prefer a higher order function or recursion over while loops.',
            },
            {
                selector: 'ClassDeclaration',
                message: 'Do not use classes.', // We may return to this rule and lift it. However, as it stands currently, declaring our own classes would likely indicate a misunderstanding of the existing architecture.
            },
        ],
        'no-restricted-properties': [
            'warn',
            {
                object: 'Math',
                property: 'pow',
                message:
                    'Prefer the exponentiation operator ** when calculating exponentiations.',
            },
        ],
        'functional/prefer-tacit': 'warn',
    },
    overrides: [
        {
            files: ['*.svelte'],
            rules: {
                'no-sequences': 'off', // This is useful to declare reactive dependencies that aren't contained in the statement already ex: $: console.log(a), b
                // The following problematic rules seem to come from @typescript-eslint/recommended-requiring-type-checking. Some rules from that plugin work however.
                '@typescript-eslint/no-unsafe-assignment': 'off', // Doesn't seem to work correctly in svelte files.
                '@typescript-eslint/no-unsafe-call': 'off', // Doesn't seem to work correctly in svelte files.
                '@typescript-eslint/no-unsafe-member-access': 'off', // Doesn't seem to work correctly in svelte files.
                '@typescript-eslint/no-unsafe-argument': 'off', // Doesn't seem to work correctly in svelte files.
                'unicorn/prefer-top-level-await': 'off', // Interferes with reactive statement syntax.
            },
            extends: [
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                tsconfigRootDir: __dirname,
                project: ['./tsconfig.json'],
            },
        },
        {
            files: ['*.ts'],
            extends: [
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: ['./tsconfig.json'],
            },
        },
    ],
    parserOptions: {
        extraFileExtensions: ['.svelte'],
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    env: {
        browser: true,
        es2022: true,
    },
    ignorePatterns: ['dist', 'node_modules', 'static', 'vite.config.ts'],
}
