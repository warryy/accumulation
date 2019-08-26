### 获取手机端 localstorage
- 文档
  http://wproxy.org/whistle/install.html
  github：https://github.com/avwo/whistle
- 配置
  1.  按照文档配置方法
  2.  配置代理的步骤，可以不用教程的方法，如果电脑装了 Charles ，可以直接配置：Proxy -> External Proxy Settings... -> 勾选 Use External Proxy Services -> 勾选 Web Proxy(HTTP), 代理服务为 127.0.0.1:8899 -> 勾选 Secure Web Proxy, 代理服务为 127.0.0.1:8899
  3.  注意，2步骤忽略了装 Charles 根证书和手机证书步骤
  4.  在 Chrome 中输入127.0.0.1:8899 -> rules 选项卡，新建一个 warryy, 输入 `m.warryy.com weinre://haodf`, 则会抓取到 `m.warryy.com` 的链接
  5.  点击顶部tab，Weinre -> warryy, 新开页面中则能抓到手机打开页面的localstorage