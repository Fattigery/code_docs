import DefaultTheme from "vitepress/theme";
import { useRoute } from "vitepress";
import "./style/index.css";

// 图片放大/预览
import "viewerjs/dist/viewer.min.css";
import imageViewer from "vitepress-plugin-image-viewer";
// 如需按钮点击预览图片
// import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';

export default {
	extends: DefaultTheme,
	// ...DefaultTheme, //或者这样写也可

	//自定义页面布局
	enhanceApp({ app }) {
		// 注册全局组件（可选）
		// app.component('vImageViewer', vImageViewer);
	},
	setup() {
		// 获取路由
		const route = useRoute();
		// 使用插件
		imageViewer(route);
	},
};
