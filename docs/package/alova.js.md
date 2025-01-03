# 在 HTML 中使用 alova

## 步骤

> 1. 创建一个文件夹
> 2. 初始化项目
> 3. 安装 alova
> 4. 在 HTML 中使用 alova

[如何通过 cdn 使用 alova？- alova.js](https://alova.js.org/zh-CN/tutorial/project/troubleshooting/)

```bash
# 初始化项目
npm init -y
# 安装alova
pnpm add alova
```

```html
<script src="../node_modules/alova/dist/alova.umd.min.js"></script>
<script src="../node_modules/alova/dist/adapter/fetch.umd.min.js"></script>
<script type="module">
	const alovaInstance = alova.createAlova({
		requestAdapter: alovaFetch(),
		responded: (response) => {
			// 检查响应对象的Content-Type头信息来判断应该调用哪个方法来解析数据
			const contentType = response.headers.get("content-type")

			if (contentType.includes("application/json")) {
				return response.json()
			} else if (contentType.includes("text/html")) {
				return response.text()
			} else if (contentType.includes("image/")) {
				return response.blob()
			} else {
				return response.text()
			}
		},
	})

	// 获取
	;(async () => {
		let data = await alovaInstance.Get("http://8.152.201.135:5001/users")
		console.log(data)
	})()

	// 添加
	;(async () => {
		let data = await alovaInstance.Post("http://8.152.201.135:5001/addUser", {
			username: "admin1",
			password: "admin2",
		})
		console.log(data)
	})()
</script>
```

![示例](/image-20241230233442-co32h25.png)
