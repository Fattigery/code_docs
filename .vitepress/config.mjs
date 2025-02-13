import { defineConfig } from "vitepress";
import { nav } from "./configs/index.js";
import { sidebar } from "./configs/index.js";
import { configureDiagramsPlugin } from "vitepress-plugin-diagrams";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "一丝一缕的在线文档",
	description: "一丝一缕的在线文档",
	srcDir: "docs", // 指定文档目录
	appearance: "dark", // 默认使用深色主题
	ignoreDeadLinks: true, // 忽略死链接
	lastUpdated: true, //首次配置不会立即生效，需git提交后爬取时间戳
	cleanUrls: true, // 生成的链接是否去掉.html后缀
	base: "/",

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
		outline: {
			level: [2, 4], // 显示2-4级标题
			// level: 'deep', // 显示2-6级标题
			label: "页面导航", // 文字显示
		},
		// 导航栏
		nav,
		// 侧边栏
		sidebar,
		socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
	},
	//markdown配置
	markdown: {
		image: {
			// 开启图片懒加载
			lazyLoading: true,
		},
		// 代码块展示行号
		lineNumbers: true,

		config: (md) => {
			// 图表插件
			// https://github.com/vuesence/vitepress-plugin-diagrams/blob/main/README.zh.md
			configureDiagramsPlugin(md, {
				diagramsDir: "public/diagrams", // 可选：自定义 SVG 文件目录
				publicPath: "/diagrams", // 可选：自定义公共路径
			});
		},
	},
	vite: {
		// https://cn.vitejs.dev/config/shared-options.html#publicdir
		publicDir: "../public", // 指定 public 目录路径
		envDir: "../env",
	},
});
