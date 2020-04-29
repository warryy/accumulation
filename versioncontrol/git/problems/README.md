## problems
#### git 中文路径乱码, 以 `\123\123` 格式展示
git 默认中文文件名是 `\xxx\xxx` 的八进制形式, 是因为 git 对 `0x80` 以上的字符进行 quote
设置:
`git config core.quatopath false --global` 关闭 quote