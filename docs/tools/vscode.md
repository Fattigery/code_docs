# vscode

## 常用快捷键

| 快捷键                                  | 作用                                            |
| --------------------------------------- | ----------------------------------------------- |
| `​ctrl+Enter`​                          | 在下面插入一行                                  |
| `​shift+Alt+⬇/⬆`​                       | 向下/上复制整行                                 |
| `​Alt+⬇/⬆`​                             | 向下/上移动整行                                 |
| `​Alt+Shift+鼠标`​+`​Home键`​/`​end键`​ | 选中多行，并将光标移动到该行第一个/最后一个字处 |
| `​ctrl+X`​                              | 删除当前行                                      |
| `​ctrl+Alt+i`​                          | 定位到选中行的最后一个字处                      |
| `​ctrl+[`​                              | 行减少缩进                                      |
| `​ctrl+]`​                              | 行缩进                                          |

[不得不会的 15 个 VSCode 快捷键 - 掘金](https://juejin.cn/post/7349465019326152723)

## 软件配置

[vscode 开发工具深度配置 - 寅时码的专栏 - 掘金](https://juejin.cn/column/7368071052448022562)

[合集·Simon 的 VScode 插件 - 哔哩哔哩](https://www.bilibili.com/read/cv18714356/)

## 插件

[零寂前端-Vscode 插件大全合集-哔哩哔哩视频](https://space.bilibili.com/383062034/channel/collectiondetail?sid=2096633)

[Simon_HeQAQ 的个人空间-Simon_HeQAQ 个人主页-哔哩哔哩视频](https://space.bilibili.com/413596956/channel/collectiondetail?sid=3518082&spm_id_from=333.788.0.0)

### colorize

[colorize 插件配置选项](https://gitcode.com/gh_mirrors/vs/vscode-colorize/overview?utm_source=artical_gitcode&index=bottom&type=card&webUrl&isLogin=1)

### i18n-ally

<img src="https://zq-assets-store.oss-cn-beijing.aliyuncs.com/imgs/20250211142526590.png" alt="image-20250211142526472" style="zoom:55%;margin-top:30px;" />

### Todo Tree

[Todo Tree 自己的使用详解-CSDN 博客](https://blog.csdn.net/Ztt300/article/details/124474324?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2~default~CTRLIST~Rate-1-124474324-blog-123243222.235%5Ev36%5Epc_relevant_anti_vip&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2~default~CTRLIST~Rate-1-124474324-blog-123243222.235%5Ev36%5Epc_relevant_anti_vip&utm_relevant_index=1)

<img src="https://zq-assets-store.oss-cn-beijing.aliyuncs.com/imgs/20250211142851599.png" alt="image-20250211142851557" style="zoom:67%;" />

### Bookmarks

[vscode 书签插件 Bookmarks 的使用](https://mp.weixin.qq.com/s/wYoxiCZEbbrTHPnQcelv0Q)

### Turbo Console Log

> 功能：快速生成 console，提供了一系列快捷操作：
>
> - `ctrl+Alt+L`：生成 console
> - `shift+Alt+C`：注释文档中所有由插件生成的的 console
> - `ctrl+Alt+U`：恢复被注释的 console
> - `ctrl+Alt+D`：删除文档中所有由插件生成的的 console

## AI 工具

- 通义灵码
- MarsCode
- codeGeex
- Fieetn Code
- github Colilot

  [Github Copilot 每月试用方案.pdf](/Github%20Copilot.pdf)

## 代码片段

[Snippets in Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_common-questions)

[VSCode snippets 如何帮助我们提高开发效率 - 掘金](https://juejin.cn/post/7398231828220723215)

分类

- 语言类型代码片段
- 全局代码片段
- 项目代码片段

步骤

- vscode 点击设置
- 点击代码片段
- 创建代码片段文件

  ![image-20250211144256989](https://zq-assets-store.oss-cn-beijing.aliyuncs.com/imgs/20250211144257023.png)

  如果是创建全局/项目内部代码片段，会再弹出一个框让你输入文件名。

  项目内部代码片段文件是在根目录下的`.vscode`文件夹下，如果没有，系统会自动创建。

  项目内部的代码片段文件还会有一个`scope`字段，表示作用范围。

- 将需要配置为代码片段的代码复制到
  [snippet generator](https://snippet-generator.app/?description=&tabtrigger=&snippet=&mode=vscode) 工具进行生成，在这些
  代码中间可以使用例如 $1、$2、$0​ 代码片段语法 指定光标位置。还有一些其他语法可以参考
  [Snippets in Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax)

- 最后将生成好的代码片段复制到对应的代码片段文件中即可。

  以一个项目内部片段文件为例：

  ![image-20250211144550902](https://zq-assets-store.oss-cn-beijing.aliyuncs.com/imgs/20250211144550934.png)

  ```json
  {
  	"Print to console": {
  		// scope表示代码片段的作用范围，如果为空则表示在所有文件中都可以使用
  		"scope": "javascript,typescript",
  		// prefix表示代码片段的前缀，也可以是一个数组，表示多个前缀，当用户输入前缀时，就会提示用户是否插入代码片段
  		"prefix": "log",
  		// body表示代码片段的内容，可以是字符串或者数组
  		"body": ["console.log('$1');"],
  		// description表示代码片段的描述
  		"description": "Log output"
  	}
  }
  ```

## 技巧

[有关 vscode 的一些命令行小技巧 - 掘金](https://juejin.cn/post/7360947498943528987)

[超有用的 VsCode 各场景高级调试技巧 · 语雀](https://www.yuque.com/ergz/web/xg73ab)

### 1. 在选中标签对的外面添加标签

![image-20250211150535284](https://zq-assets-store.oss-cn-beijing.aliyuncs.com/imgs/20250211150535318.png)

![image-20250211150547149](https://zq-assets-store.oss-cn-beijing.aliyuncs.com/imgs/20250211150547207.png)
