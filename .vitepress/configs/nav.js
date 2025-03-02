export const nav = [
	{ text: "首页", link: "/" },
	// { text: "Examples", link: "/markdown-examples" },
	{
		text: "前端",
		link: "/qianduan",
	},
	{
		text: "技术栈",
		items: [
			{
				text: "alova.js",
				link: "/jishuzhan/alova_js",
			},
		],
	},
	{
		text: "工具",
		items: [
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
						text: "github copilot",
						link: "/tools/github copilot",
					},
				],
			},
		],
	},
	{
		text: "计划",
		link: "/todo",
	},
	// 分组导航示例
	{
		text: "指南",
		items: [
			{
				// 分组标题1
				text: "介绍",
				items: [{ text: "前言", link: "/preface" }],
			},
			{
				// 分组标题2
				text: "基础设置",
				items: [
					{ text: "快速上手", link: "/getting-started" },
					{ text: "配置", link: "/configuration" },
					{ text: "页面", link: "/page" },
					{ text: "Frontmatter", link: "/frontmatter" },
				],
			},
			{
				// 分组标题3
				text: "进阶玩法",
				items: [
					{ text: "Markdown", link: "/Markdown" },
					{ text: "静态部署", link: "/assets" },
				],
			},
		],
	},
];
