import { defineConfig } from "vitepress"
import { nav } from "./configs/index.js"

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "VitePress",
	description: "一丝一缕的在线文档",
	srcDir: "docs", // 指定文档目录
	appearance: "dark", // 默认使用深色主题
	ignoreDeadLinks: false, // 忽略死链接设置为false
	lastUpdated: true, //首次配置不会立即生效，需git提交后爬取时间戳

	// 主题配置
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		// siteTitle: false, // 隐藏左上角标题文本
		// 本地搜索
		search: {
			provider: "local",
		},
		//上次更新时间
		lastUpdated: {
			text: "最后更新于",
			formatOptions: {
				dateStyle: "short", // 可选值full、long、medium、short
				timeStyle: "medium", // 可选值full、long、medium、short
			},
		},
		// 导航栏
		nav,

		// sidebar: [
		// 	{
		// 		text: "Examples",
		// 		items: [
		// 			{ text: "Markdown Examples", link: "/markdown-examples" },
		// 			{ text: "Runtime API Examples", link: "/api-examples" },
		// 		],
		// 	},
		// ],

		socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
	},
	//markdown配置
	markdown: {
		image: {
			// 开启图片懒加载
			lazyLoading: true,
		},
		lineNumbers: true,
	},
})
