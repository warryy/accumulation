## es6Module
#### 注意事项
1. 使用了 es6 module 语法的 js , 需要在 script 标签上加上 `type="module"` 标识
2. script 标签上添加了 `type="module"` 的标识后, 标签内的代码自动成为严格模式
3. import 引入的文件, 文件的后缀名不可以省略
4. 同一个模块在一个文件中如果多次引用, 只会引用一次