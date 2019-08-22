### push 简单了解
- [原文链接](https://www.cnblogs.com/chanshuyi/p/head_first_of_push_01.html)
- ios
  - ios有个一自己的推送服务：APNS（Apple Push Notification Service）
  - 推送过程
    1. 安装 app 的时候，会弹窗提示我们是否允许推送
    2. 当我们点击了允许的时候，手机会根据 app 和设备自身生成一个唯一标识 DeviceToken，将其发送给 APNS，并与其保持一个长连接，ASPN将该 DeviceToken 和手机绑定起来
    3. 当我们需要发送 push 的时候，会请求服务端，服务端请求 APNS 的线上或沙盒推送接口
    4. APNS 根据 DeviceTokenA 取出与 ios 设备对应的长连接，发送给用户手机
    5. 手机拿到推送过来的消息，通过 DeviceToken 来判断将推送发给哪一个 app

- Android
  - 第三方推送服务
    - 为什么要用第三方服务
      google 在最一开始，没有 apple 明智，做一个统一的推送平台导致开发者们在最初使用了第三方推送服务，等到出了 GCM(Google Cloud Messaging), 开发者们已经熟悉了使用第三方推送服务，再者就是 GCM 经常处于不可用的状态，导致了现在 Android 推送的混乱局势。
    - Android 现在混乱的第三方推送的局面也导致了另一个问题，因为每个 app 的第三方推送服务厂商的不同，Android 手机后台会存在很多个第三方服务，这导致了手机耗电量的增加
    - 第三方推送的优势
      1. Android 官方推送服务的不可用
      2. 第三方服务实现难度低，成本小
      3. 第三方推送实现的功能复杂
- 第三方推送在 iOS 和 Android 上的区别
  - 推送服务的实现
    - 当手机 app 启动的时候，会与第三方服务保持一个 socket 长连接，推送通过这个链接传送给手机
  - 当手机关掉 app，Android 手机则不会推送成功，而第三方服务厂商发现 iOS 手机长连接断开，则会去启动 ASPN 服务，通过 ASPN 向手机推送内容。
  - 备注：Android 如何实现上面的推送补偿机制呢？有另一个方式：如果 A B 两个 App 使用了同一个第三方厂商的服务，此时 A 关闭，B 开启，A 的推送可以通过 B 开启的长连接来进行推送服务。
