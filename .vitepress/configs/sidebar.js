export const sidebar = {
	// 前端
	"/qianduan/": [
		{
			text: "测试",
			// 设置是否可折叠，默认为true，不可折叠
			collapsed: false,
			items: [
				{
					text: "Index",
					items: [{ text: "One", link: "/qianduan/one" }],
				},
				{
					text: "Two",
					items: [{ text: "Two", link: "/qianduan/two" }],
				},
				{
					text: "Three",
					items: [{ text: "Three", link: "/qianduan/three" }],
				},
			],
		},
	],

	// 技术栈
	"/jishuzhan/": [
		{
			text: "测试2",
			items: [
				{
					text: "测试",
					items: [
						{ text: "Markdown Examples", link: "/markdown-examples/Markdown-Examples" },
						{ text: "Markdown Examples", link: "/markdown-examples/Markdown-Examples" },
					],
				},
			],
		},
	],

	// 前端规范
	"/guide/": [
		{
			text: "前端规范",
			items: [
				{
					text: "安装",
					link: "/guide/lint/installation",
				},
				{
					text: "快速开始(TS配置)",
					link: "/guide/lint/quickstart",
				},
				{
					text: "eslint集成",
					link: "/guide/lint/eslintPage",
				},
				{
					text: "prettier集成",
					link: "/guide/lint/prettierPage",
				},
				{
					text: "ls-lint集成",
					link: "/guide/lint/lsLintPage",
				},
				{
					text: "stylelint集成",
					link: "/guide/lint/stylelintPage",
				},
				{
					text: "postcss集成",
					link: "/guide/lint/postcssPage",
				},
				{
					text: "rimraf快速删除包依赖集成",
					link: "/guide/lint/rimrafPage",
				},
				{
					text: "git hook拦截commit",
					link: "/guide/lint/huskyPage",
				},
				{
					text: "commitizen消息助手",
					link: "/guide/lint/commitizenPage",
				},
				{
					text: "changelog 生成版本记录",
					link: "/guide/lint/changelogPage",
				},
			],
		},
	],
};
