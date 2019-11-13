## snippet
#### 阻止事件冒泡
```js
dom.onclick = function (e) {
  alert("li");
  window.event ? window.event.cancelBubble = true : e.stopPropagation();
}
```