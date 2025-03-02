# VitePress 快速上手教程

[VitePress 快速上手教程](https://vitepress.yiov.top/)

## 关于代码块效果

## 部署：GitHub Actions 自动部署 VitePress 文档

> 这里我使用的是 github action 部署到我自己的服务器，这样的话，当我将代码提交到 github 的时候，就可以自动部署到我的服务器了。

### 1. 前期准备

1. 生成 SSH 并配置密钥

   ```bash
   # 生成 SSH 密钥对
   ssh-keygen -t rsa -b 4096 -C "1023547026@qq.com"
   # 这将提示你输入文件名和密码短语。你可以按 Enter 键使用默认文件名（通常是 ~/.ssh/id_rsa）并跳过密码短语。
   # 建议不设置密码短语（直接回车）
   # 默认保存在 ~/.ssh/id_rsa（私钥）和 ~/.ssh/id_rsa.pub（公钥）

   # 查看私钥：生成密钥对后，可以使用以下命令查看私钥
   cat ~/.ssh/id_rsa

   # 将私钥添加到 GitHub Secrets：将私钥内容进行 base64 编码并复制到剪切板：
   cat ~/.ssh/id_rsa | base64
   ```

2. 服务器配置

   ```bash
   # 将公钥添加到服务器的 authorized_keys
   cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys

   # SSH 目录权限设置
   chmod 700 ~/.ssh
   chmod 600 ~/.ssh/authorized_keys

   # 检查并启用 SSH 密钥认证
   vi /etc/ssh/sshd_config
   # 确保以下配置正确：
   PermitRootLogin yes          # 允许 root 登录
   PubkeyAuthentication yes     # 启用公钥认证
   AuthorizedKeysFile .ssh/authorized_keys  # 公钥文件位置

   # 重启 SSH 服务
   systemctl restart sshd
   ```

3. 验证步骤

   ```bash
   # 基础验证
   # 测试 SSH 连接
   ssh -i ~/.ssh/id_rsa root@服务器IP
   # 如果配置正确，应该无需密码直接登录（这里可以基本就可以了）
   
   # 详细验证
   # 使用详细输出模式测试
   ssh -vvv -i ~/.ssh/id_rsa root@服务器IP
   ```

### 2. GitHub 仓库配置

**配置 GitHub Secrets**

> 在项目仓库中，导航到 `Settings` -> `Secrets` -> `Actions`，然后点击 `New repository secret` 。添加以下 Secrets：

- `SERVER_SSH_KEY` : SSH 私钥内容（粘贴 base64 编码后的私钥内容）

- `SERVER_HOST` : 你的服务器 IP 地址或域名

- `SERVER_USER` : 用于 SSH 连接的用户名（如 root）

- `SERVER_PORT` : SSH 端口（默认 22）

### 3. 工作流配置

> 1. 项目根目录下创建一个 `.github/workflows/deploy.yml` 文件。
>
> 2. 添加以下内容到 `deploy.yml` 文件：

```yaml
# 工作流名称
name: Deploy to Server

# 触发工作流的事件
on:
  push:
    branches:
      - master # 触发部署的分支，当代码推送到 master 分支时触发工作流

# 定义工作流中的作业
jobs:
  # 部署作业
  deploy:
  	# 指定运行环境为最新版 Ubuntu
    runs-on: ubuntu-latest

    # 定义作业的步骤
    steps:
      # 步骤1：检出代码
      - name: Checkout code
        uses: actions/checkout@v2 # 使用官方的 checkout action 克隆仓库代码

      # 步骤2：设置 Node.js 环境
      - name: Set up Node.js
        uses: actions/setup-node@v2 # 使用官方的 setup-node action
        with:
          node-version: "22" # 指定 Node.js 版本

      # 步骤3：安装 pnpm 包管理器
      - name: Install pnpm
        uses: pnpm/action-setup@v2 # 使用官方的 pnpm action
        with:
          version: 9 # 指定 pnpm 版本

      # 步骤4：安装项目依赖
      - name: Install dependencies
        run: pnpm install # 使用 pnpm 安装项目依赖

      # 步骤5：构建项目
      - name: Build project
        run: pnpm docs:build # 执行构建命令，生成静态文件

      # 步骤6：部署到服务器
      - name: Deploy
      	# 设置环境变量，从 GitHub Secrets 中获取敏感信息
        env:
          SSH_KEY: ${{ secrets.SERVER_SSH_KEY }} # SSH 私钥
          HOST: ${{ secrets.SERVER_HOST }} # 服务器地址
          USERNAME: ${{ secrets.SERVER_USER }} # 服务器用户名
          PORT: ${{ secrets.SERVER_PORT }} # SSH 端口号
        # 执行部署脚本
        run: |
          # 创建 .ssh 目录
          mkdir -p ~/.ssh

          # 解码并保存 SSH 私钥
          echo "$SSH_KEY" | base64 -d > ~/.ssh/deploy_key

          # 设置私钥文件权限为 600（仅所有者可读写）
          chmod 600 ~/.ssh/deploy_key

          # 将目标服务器的公钥添加到已知主机列表
          ssh-keyscan -H $HOST >> ~/.ssh/known_hosts

          # 进入构建后的静态文件目录
          cd .vitepress/dist

          # 将所有文件打包成 tar.gz 压缩文件
          tar -czf project.tar.gz ./*

          # 使用 scp 命令将压缩包上传到服务器的 /tmp 目录
          # -i: 指定私钥文件
          # -P: 指定 SSH 端口
          scp -i ~/.ssh/deploy_key -P $PORT project.tar.gz $USERNAME@$HOST:/tmp/

          # 通过 SSH 在服务器上执行命令：
          # 1. 进入网站目录
          # 2. 删除原有文件
          # 3. 解压新上传的文件
          # 4. 删除临时的压缩包
          ssh -i ~/.ssh/deploy_key -p $PORT $USERNAME@$HOST "cd /www/wwwroot/code_docs && rm -rf * && tar -xzf /tmp/project.tar.gz && rm /tmp/project.tar.gz"
```

> 完整的部署过程是：先打包构建后的文件，上传到服务器临时目录，然后在服务器上解压到网站目录，最后清理临时文件。

### 4.注意事项

1. **SSH 密钥配置**：
   - 确保私钥未设置密码短语
   - 正确配置服务器上的 authorized_keys 权限
   - 可以先在本地测试 SSH 连接是否正常
2. **服务器配置**：
   - 确保部署目录存在且有正确的权限
   - 检查 SSH 配置是否允许密钥认证
   - 重启 SSH 服务使配置生效
3. **GitHub Secrets**：
   - 确保所有 Secrets 都已正确配置
   - 密钥内容不要包含多余的换行或空格
   - 可以使用原始私钥，无需 Base64 编码
4. **工作流文件**：
   - 确保分支名称正确
   - 构建命令与 `package.json` 中的脚本名称一致
   - 部署路径要与服务器实际路径一致

### 5.验证部署

1. 提交代码到 GitHub 触发自动部署
2. 在 Actions 页面查看部署日志
3. 检查服务器目录是否正确更新
4. 访问站点验证部署结果

> 这样配置后，每次推送代码到 master 分支，GitHub Actions 就会自动构建并部署到服务器。

## 错误

### 宝塔面板部署问题

> 问题：对于 xxx.js.html 解析不了解决方案如下：

```nginx
# 在nginx配置文件中添加如下配置，要在所有location块之前添加
location ~* \.(html|js)$ {
    try_files $uri $uri.html;
}
```

## vitePress 参考博客

### vitePress 优化参考

[李钟意讲前端](https://docs.ffffee.com/vitepress/vitepress-advanced-guide.html)

[VitePress 不完全优化指南 | 纸鹿摸鱼处](https://blog.zhilu.cyou/2024/vitepress-enhancement)

[Markdown 最全扩展语法示例](https://note.weizwz.com/vitepress/extend/markdown-examples.html)

[【🔥 持续更新】 VitePress 资源推荐](https://theme.sugarat.top/recommend.html)

[VitePress 美化](https://swkende.github.io/swkende-doc/01_VitePress/02_VitePress%E7%BE%8E%E5%8C%96.html)

[中文独立博客列表](https://mengbooo.github.io/BemoDB/posts/annals/2024.html)

[VitePress 搭建并部署网站](https://blog.bugdesigner.cn/vitepress%e6%90%ad%e5%bb%ba%e5%b9%b6%e9%83%a8%e7%bd%b2%e7%bd%91%e7%ab%99/)

[vitepress 从 0 到 1，让每个前后端小伙伴都拥有一个属于自己的博客](https://developer.aliyun.com/article/1614920)

[四万字符数带你使用 Vitepress 构建博客并部署到 github 平台 - 日升\_rs - SegmentFault 思否](https://segmentfault.com/a/1190000044948735#item-5-22)

[VitePress搭建 - 哔哩哔哩](https://www.bilibili.com/video/BV1i26tY2EpF?spm_id_from=333.788.player.switch&vd_source=c612b396122ceea23b7f188f9d78ca2a)

### 图片点击放大

[https://squid-xu.github.io/blog/vitepress/basics/No1.html](https://squid-xu.github.io/blog/vitepress/basics/No1.html)

[https://www.shakecode.com/zh/blog/other/vitepress-plugin-image-viewer](https://www.shakecode.com/zh/blog/other/vitepress-plugin-image-viewer)

### 前端技术

[Promise 并发控制](https://tsinghua-lau.github.io/forDocs/studyCn/Javascript/Promise.html)

[Vue 开发调试](https://muyacode.github.io/FrontEndLearnNotes/Document/DevDebug/Vue%E5%BC%80%E5%8F%91%E8%B0%83%E8%AF%95)

[Web 前端学习笔记](https://welives.github.io/blog/front-end/)

[前端开发规范](https://jinxi1334640772.github.io/tools/stardard/vscode.html)

## 其他

- <sapn class="marker-text">添加`marker-text`类名就会有这个效果</sapn>
- [vitePress 图表插件文档](https://github.com/vuesence/vitepress-plugin-diagrams/blob/main/README.zh.md)
