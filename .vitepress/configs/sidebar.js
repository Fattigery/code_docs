export const sidebar = {
	// 目录1
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

	// 目录2
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
};
