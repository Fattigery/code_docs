export const sidebar = {
	// 前端
	"/qianduan/": [
		{
			text: "前端",
			// 设置是否可折叠，默认为true，不可折叠
			// collapsed: false,
			items: [
				{
					text: "开发技巧 & 知识点  & 思路",
					link: "/qianduan/trick",
				},
				{
					text: "Vue3开发环境搭建",
					items: [
						{
							text: "代码规范",
						},
						{
							text: "vue3",
							link: "/qianduan/Vue3开发环境搭建",
						},
					],
				},
			],
		},
	],

	// 技术栈
	"/jishuzhan/": [
		{
			text: "alova.js",
			link: "/jishuzhan/alova_js",
		},
	],

	// 工具
	"/tools/": [
		{
			text: "工具",
			items: [
				{
					text: "VitePress",
					link: "/tools/vitepress",
				},
				{
					text: "vscode",
					link: "/tools/vscode",
				},
				{
					text: "apifox",
					link: "/tools/apifox",
				},
				{
					text: "阿里云",
					link: "/tools/aliyun",
				},
			],
		},
		{
			text: "语法",
			items: [
				{
					text: "Emmet语法",
					link: "/tools/emmet",
				},
				{
					text: "MarkDown语法",
					link: "/tools/markdown",
				},
			],
		},
		{
			text: "AI工具",
			items: [
				{
					text: "cursor",
					link: "/tools/cursor",
				},
				{
					text: "trae",
					link: "/tools/trae",
				},
				{
					text: "github copilot",
					link: "/tools/github copilot",
				},
				{
					text: "DeepSeek",
					link: "/tools/deepseek",
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
