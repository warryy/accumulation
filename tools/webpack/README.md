## webpack
- script 脚本

`npm run xxx` 的时候, 如果需要参数, 我们可以这样传: `npm run xxx -- args`, 此处 `--` 的作用可以理解为一个连字符, 有和没有没有影响, 但是如果我们直接在 `package.json` 文件中写 `node fileA.js -- args` 的时候, 会将 `--` 当做一个参数. 此时在 `fileA.js` 中使用 `process.argv` 会拿到 `--` 这个参数.