## q&a
- Q: 实现 get 函数
```js
let obj = {
    foo: {
        bar: {
            name: 'biz'
        }
    }
}
get(obj, 'foo.bar.name') // 输出:biz
obj = {}
get(obj, 'foo.bar.name ')
```
A:
```js
function get(obj, path, defaultValue) { // todo
    path = path.split('.');
    let res;

    if (obj && Object.prototype.toString.call(obj) === '[object Object]') {
        res = obj[path[0]];
        if (Object.prototype.toString.call(res) === '[object Object]') {
            res = get(res, path.splice(1).join('.'))
        }
    }

    return res;
}
```

- Q: 点击 li 元素的时候输出其索引值 0,1,2
```html
<ul id="test">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
```
A:
```js
('#test').('li')获取到 li 元素, 循环添加点击事件
```

- Q: 给出12个外形完全一样的小球, 其中只有一个质量有异常, 给你一架天平, 如何只称重三次找出质量异常的小球

A:
```
   1. 12个小球分为三组: a1 ~ a4, b1 ~ b4, c1 ~ c4
   2. a 组放在天平左边, b 组放在右边(1次)
      1. a = b, 则异常小球在 c 组. c 组四个小球随机取出两个 ef, 放在天平两端(2次)
         1. e < f, 异常小球在 ef 中. 从剩余球中拿出一个 x 替换掉 f(3次)
            1. e = x, f 异常
            2. e < x, e 异常
         2. e == f, 异常小球在另外两个中, 方法同1
         3. e > f, 同1
      2. a < b, 异常球在 ab 中. 调整小球, 天平左边 L 为 a1, a2, b1, b2, b3 右边 R 为 b4, c1 ~ c4(2次)
         1. L = R, 异常球在 a3, a4 中.(因为如果 L 中有一个异常, 则 R 中也需要有一个异常球, 即 b4 异常, 这是不符合条件的)
         2. L < R, a1, a2 重或者 b4轻. 推理如下:
            1. a1, a2 异常. 则 a1, a2 中有一个轻球, 成立.
            2. b1, b2, b3 异常. 则 b1 ~ b3 中有一个重球, 而 a < b, 则推断不成立.
            3. b4 异常. 则 b4 轻, 成立.
         3. L > R, b1, b2, b3轻. 推理如下:
            1. a1, a2 异常. 则 a1, a2 是轻球, 这与 a < b 矛盾.
            2. b1, b2, b3 异常. 则 b1, b2, b3 是轻球, 成立.
            3. b4 异常. 则 b4 是重球, 与 a < b 矛盾.
      3. a > b, 将 a, b 互换名字, 同2.
   3. 此时解决2中遗留问题
      1. 2.1, 已解决.
      2. 2.2.1, 一次和标准球的称重.
      3. 2.2.2, a1 和 a2 对比, 会得出结论.
      4. 2.2.3, b1 和 b2 对比, 会得出结论.
```
- Q: 代码结果
```js
localStorage.setItem('test', false)
console.log(localStorage.test || 'haha')
```
A: 
```
false
```
- Q: 