<script setup>
	import { useData } from "vitepress";

	// 获取 VitePress 的 themeConfig
	const { theme } = useData();

	// 定义 props，接收图片路径
	const props = defineProps({
		src: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			default: "",
		},
	});

	console.log(theme.value);

	// 动态生成图片 URL
	const imageUrl = `${theme.value.baseURL}${props.src}`;
</script>

<template>
	<img :src="imageUrl" :alt="alt" />
</template>
