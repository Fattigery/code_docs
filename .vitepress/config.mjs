import { defineConfig } from "vitepress";
import { nav } from "./configs/index.js";
import { sidebar } from "./configs/index.js";
import { configureDiagramsPlugin } from "vitepress-plugin-diagrams";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "一丝一缕的在线文档",
	description: "一丝一缕的在线文档",
	lang: "zh-CN", // 语言
	srcDir: "docs", // 指定文档目录
	appearance: "dark", // 默认使用深色主题
	ignoreDeadLinks: false, // 忽略死链接
	lastUpdated: true, //首次配置不会立即生效，需git提交后爬取时间戳
	cleanUrls: true, // 生成的链接是否去掉.html后缀
	base: "/",
	titleTemplate: ":title", // 网页标题模板（:title表示页面标题）

	head: [
		// fav图标
		["link", { rel: "icon", href: "/vitepress-logo-mini.svg" }],
	],

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
		// 左侧边栏
		sidebar,
		// 右侧社交链接
		socialLinks: [{ icon: "github", link: "https://github.com/" }],
		// 页脚
		footer: {
			message: "Released under the MIT License.",
			// 自动更新时间
			copyright: `Copyright © 2024-${new Date().getFullYear()} 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京****号</a>`,
		},
		// 自定义上下页名
		docFooter: {
			prev: "上一页",
			next: "下一页",
		},
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
