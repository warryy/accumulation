## snippet
#### 阻止事件冒泡
```js
dom.onclick = function (e) {
  alert("li");
  window.event ? window.event.cancelBubble = true : e.stopPropagation();
}
```
#### ios12键盘弹起后将页面顶起, 收回后页面不复原
```js

```

#### 对象的深拷贝
```js
function clone(target, map = new Map()) {
    if (typeof target === 'object') {
        if (map.get(target)) {
            return map.get(target);
            // 此处用上面的还是下面的有待商榷
            // return target;
        }
        
        let cloneTarget = Array.isArray(target) ? [] : {};
        map.set(target, cloneTarget);

        for (let key in target) {
            cloneTarget[key] = clone(target[key], map);
        }

        return cloneTarget;
    }
    return target;
}
```