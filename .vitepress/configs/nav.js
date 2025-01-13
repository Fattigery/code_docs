export const nav = [
	{ text: "Home", link: "/" },
	{ text: "Examples", link: "/markdown-examples" },
	{ text: "guide", link: "/guide" },
	{
		text: "各种库的使用",
		items: [{ text: "alova.js", link: "/package/alova.js" }],
	},
	{
		text: "工具",
		items: [
			{
				text: "VitePress",
				link: "/tools/vitepress",
			},
		],
	},
	{
		text: "目标",
		link: "/project",
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
