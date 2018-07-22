/*
 * lesson2: はじめてのTypeScript
 */
// $tsc main.ts // -> create the main.js
// $node main.js // -> display hello world
console.log('--- LESSON2 ---')
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
console.log('--- LESSON5 ---')
console.log('1: ', 0 === Signal.Blue) // -> true
console.log('2: ', 'Blue' === Signal[0]) // -> true
console.log('3: ', Signal.Yellow) // -> 1
console.log('4: ', Signal[2]) // -> Red

/*
 * lesson6: 関数宣言を使ってみよう
 */
console.log('--- LESSON6 ---')
a6(1, 2)
console.log(b6(3, 4))
console.log(c6(5))
console.log(c6(5, 6))
console.log(d6(7))
console.log(c6(7, 8))

function a6(a: number, b: number): void {
  console.log(a + b)
}
function b6(a: number, b: number): number {
  return a + b
}
function c6(a: number, b?: number): number {
  if (!b) return a + a
  return a + b
}
function d6(a: number, b: number = 20): number {
  return a + b
}

/*
 * lesson7: 関数式を使ってみよう
 */
console.log('--- LESSON7 ---')
var a7 = (a: number, b: number): number => a + b
console.log(a7(1, 2))
