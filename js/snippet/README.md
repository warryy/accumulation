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