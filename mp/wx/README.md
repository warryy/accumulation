## wx
#### observers 不支持监听组件深度 properties（2020年01月08日）
即如下形式:
``` js
...
properties: {
    opt: {
        type: Object,
        value: {
            test: {
                type: Boolean,
                value: true
            }
        }
    }
},
observers: {
    'opt.test': function () {
        console.log('opt.test')
    }
}
...
```
监听函数无法触发
#### 