/*
 * lesson19: 外部モジュールを使ってみよう
 */
// Node - CommonJS
// $tsc lesson19.ts -m commonjs
// $node lesson19.js

// RequireJS - AMD
// $tsc lesson19.ts -m amd
// $node lesson19.js

import User19 = require('./export')

console.log(User19.name)
