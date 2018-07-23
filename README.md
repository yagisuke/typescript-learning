# なにをやったか
https://dotinstall.com/lessons/basic_typescript

# つかいかた
```sh
$npm i -g typescript
$tsc main.ts -t ES5 -m amd --out all.js
$node all.js
```

### 補足 
`$tsc main.ts -t ES5 -m amd --out all.js` について
- `-t ES5` は、class のgetter,setterを使うにはESの新し目を使う必要があるから指定している。
