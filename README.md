# lua-style-arrays [![CircleCI](https://circleci.com/gh/LewisTehMinerz/lua-style-arrays.svg?style=svg)](https://circleci.com/gh/LewisTehMinerz/lua-style-arrays)
A small NPM module with zero dependencies to make Lua-style arrays that start at one. At a mere 454 bytes (including comments), it is the only library you should use for creating arrays that start at one.

# Usage
```javascript
var convertToLuaStyle = require('lua-style-arrays');

var luaStyleArray = convertToLuaStyle(['this is', 'a lua-style array']);

console.log(luaStyleArray[1]);
// this is
console.log(luaStyleArray[0]);
// null
```
