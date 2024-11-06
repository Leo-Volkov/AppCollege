import js from "@eslint/js";

export default [
  js.configs.recommended,
	{
		extends: [
			'eslint:recommended', // Базовые рекомендованные правила ESLint
			'plugin:react/recommended', // Рекомендации для React
			'plugin:jsx-a11y/recommended', // Правила для улучшения доступности (a11y)
			'plugin:import/errors', // Проверка на ошибки в импортах
			'plugin:import/warnings', // Предупреждения для неправильных импортов
			'plugin:security/recommended', // правила для безопасности
			'prettier', // отключает правила, конфликтующие с Prettier
		],
		plugins: [
			'react', // Плагин для работы с React
			'jsx-a11y', // Плагин для правил доступности
			'import', // Плагин для управления импортами
			'security', // Плагин для улучшения безопасности
		],
		rules: {
			// Строгие правила стиля
			eqeqeq: 'error', // Требует использования строгого равенства === вместо ==
			'no-console': 'warn', // Предупреждение при использовании console.log
			'no-unused-vars': 'warn', // Предупреждение при наличии неиспользуемых переменных
			curly: 'error', // Обязывает использовать фигурные скобки для всех блоков
			'react/prop-types': 'off', // Отключает проверку типов props, если используешь TypeScript
			'import/order': [
				'warn',
				{
					groups: [
						['builtin', 'external'], // Группировка встроенных и внешних модулей
						'internal', // Внутренние модули проекта
						'parent', // Родительские модули (один уровень выше)
						'sibling', // Модули на том же уровне
						'index', // Индексные файлы
					],
					'newlines-between': 'always', // Обязательный перенос строки между группами импортов
				},
			],
			'jsx-a11y/anchor-is-valid': 'warn', // Рекомендации по доступности для ссылок
			'prettier/prettier': 'error', // Запуск Prettier как правило ESLint, чтобы проверять стиль кода
		},
		env: {
			browser: true, // Определяет глобальные переменные браузера
			es2021: true, // Поддержка синтаксиса ES2021
		},
		parserOptions: {
			ecmaFeatures: {
				jsx: true, // Поддержка JSX для React
			},
			ecmaVersion: 12, // Поддержка ECMAScript 2021
			sourceType: 'module', // Использование модулей ES (import/export)
		},
		settings: {
			react: {
				version: 'detect', // Автоматически определяет версию React для правил
			},
		},
	},
];