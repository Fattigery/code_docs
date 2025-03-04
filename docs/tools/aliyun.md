# 阿里云

## 阿里云OSS对象存储绑定自定义域名 & 申请免费SSL证书

> 由于使用阿里云默认域名访问资源时，不能在线预览资源，会触发强制下载，经过查询资料，发现绑定自定义域名后，即可在线预览资源。

![](https://zq-assets-store.oss-cn-beijing.aliyuncs.com/imgs/20250304103251908.png)

[绑定自定义域名至Bucket默认域名](https://help.aliyun.com/zh/oss/user-guide/map-custom-domain-names-5?spm=5176.8465980.console-base_help.dexternal.66401450Bw6nXC#section-rj0-u9x-3ih)

**绑定自定义域名流程参考上述文档中的操作步骤即可。**

然后我们还需要为自定义域名配置SSL证书，否则访问时会提示不安全。[绑定自定义域名的证书托管步骤](https://help.aliyun.com/zh/oss/user-guide/host-ssl-certificates?spm=a2c4g.11186623.0.0.ff563bb9EfReEB#section-evp-h0m-z2e)

这么我们主要主要讲一下获取免费SSL证书，以及在阿里云上传证书的步骤。

1. 在 utools 域名管理插件 中为自定义域名申请免费证书。

    <img src="https://zq-assets-store.oss-cn-beijing.aliyuncs.com/imgs/20250304110213137.png" style="zoom: 67%;" />

2. 访问SSL证书管理页面，点击上传证书，再点击下面的上传证书，会弹出一个信息填写面板。

    <img src="https://zq-assets-store.oss-cn-beijing.aliyuncs.com/imgs/20250304110236804.png" style="zoom:67%;" />

3. 回到 utools 域名管理插件，点击SSL证书找到我们刚才为自定义域名申请的证书，鼠标移动到最后的三个点上，点击复制复制证书和私钥。

    <img src="https://zq-assets-store.oss-cn-beijing.aliyuncs.com/imgs/20250304110249094.png" style="zoom:67%;" />

4. 回到阿里云，在面板中填写证书名称（任意），然后将证书和私钥粘贴到对应的位置，资源组选择默认，点击确定。
5. 最后回到OSS域名管理页面，点击证书托管，选择我们刚才上传的证书，点击确定即可。