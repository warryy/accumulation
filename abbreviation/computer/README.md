### CSRF
- (cross-site request forgery) 跨站请求伪造
- 用户 A 在论坛网站上发布了一个图片, 链接为一个银行账户提款的表单链接, 此时用户 B 点击了该图片, B 的浏览器如果保存着银行的取款授权 cookie 且未过期, 浏览器装载图片的时候则会自动将表单和 cookie 提交, 这样便在 B 未授权的情况下完成了此次事务.
  
