/*
 * lesson2: はじめてのTypeScript
 */
// $tsc main.ts // -> create the main.js
// $node main.js // -> display hello world
class User {}
console.log('hello world')

/*
 * lesson3: 静的型付けをしてみよう
 */
// js は動的型付けで以下のようにしても大丈夫だが、
// ts は静的型付けなのでエラーとなり、安全なプログラミングが実現できる
// var a3 = 10
// a3 = 'hello'

/*
 * lesson4: さまざまな型を使ってみよう
 */
var a4: number
var b4: number = 10
var c4 = 10 // -> 型推論によりnumber型となる

// any型について
// any型は、動的な型ではなく、any型となるのがポイント
var d4
d4 = 10
d4 = 'hello'

// array
var e5: number[]
e5 = [1, 2, 3]

/*
 * lesson5: 列挙型を使ってみよう
 */
enum Signal {
  Blue = 0,
  Yellow = 1,
  Red = 2
}
var result: Signal
console.log('1: ', 0 === Signal.Blue) // -> true
console.log('2: ', 'Blue' === Signal[0]) // -> true
console.log('3: ', Signal.Yellow) // -> 1
console.log('4: ', Signal[2]) // -> Red
