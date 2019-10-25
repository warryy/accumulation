## jq
- 插入元素:
  `append, prepend`
- 事件委托
  `delegate(dom, event, function)`
- 点击事件
  `on('click', function), click`
  - 两者区别: on 支持动态添加的 dom, click 不支持, 但在挂载点击事件的时候, 两者所需条件需要一样, 即此时页面上挂载的元素都要存在, 类似于原生 js `getElement(s)By...` 与 `querySelectorAll` 的区别
- 双击
  `dblclick`
- 类有关
  `toggleClass, addClass, removeClass, hasClass`
- 显示隐藏
  `show, hide, toggle`
- 获取属性
  `attr(name)`
- 获取 dom 上的 data
  `data(dataname)`
- 动画
  `fadeIn(time), fadeOut(time), fadeToggle(time), slideDown(time), slideUp(), slideToggle()`
- dom 内容
  `text(changeTxt), html(changeHtml)`
- 删除 dom
  `remove`
- 子元素
  `children`
- 后代元素
  `find`