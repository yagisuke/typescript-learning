/*
 * lesson2: はじめてのTypeScript
 */
// $tsc main.ts // -> create the main.js
// $node main.js // -> display hello world
console.log('--- LESSON2 ---')
class User2 {}
console.log('hello world')

/*
 * lesson3: 静的型付けをしてみよう
 */
console.log('--- LESSON3 ---')
// js は動的型付けで以下のようにしても大丈夫だが、
// ts は静的型付けなのでエラーとなり、安全なプログラミングが実現できる
// var a3 = 10
// a3 = 'hello'

/*
 * lesson4: さまざまな型を使ってみよう
 */
console.log('--- LESSON4 ---')
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
console.log('--- LESSON5 ---')
// enum Signal5 { Blue = 0, Yellow = 1, Red = 2 }
enum Signal5 { Blue, Yellow, Red }
var result5: Signal5 = 2
console.log('1: ', result5 === Signal5.Red) // -> true
console.log('2: ', Signal5[result5]) // -> Red
console.log('3: ', Signal5.Yellow) // -> 1
console.log('4: ', Signal5[0]) // -> Blue

/*
 * lesson6: 関数宣言を使ってみよう
 */
console.log('--- LESSON6 ---')
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
a6(1, 2)
console.log(b6(3, 4))
console.log(c6(5))
console.log(c6(5, 6))
console.log(d6(7))
console.log(c6(7, 8))

/*
* lesson7: 関数式を使ってみよう
*/
console.log('--- LESSON7 ---')
var a7 = (a: number, b: number): number => a + b
console.log(a7(1, 2))

/*
 * lesson8: 関数のオーバーロードを使ってみよう
 */
console.log('--- LESSON8 ---')
function add(a: number, b: number): number // 関数のシグネチャ
function add(a: string, b: string): string
function add(a: any, b: any): any {
  if (typeof a === 'string' && typeof b === 'string') return `${a} ${b}`
  return a + b
}
console.log(add(1, 2))
console.log(add('hello', 'world'))
// console.log(add(3, 'world')) -> compile error

/*
 * lesson9: クラスを使ってみよう
 */
console.log('--- LESSON9 ---')
class User9 {
  // name: string
  // constructor(name: string) {
  //   this.name = name
  // }
  constructor(public name: string) {}

  sayHi(): void {
    console.log(`hi! i am ${this.name}.`)
  }
}
var tom9 = new User9('Tom')
console.log(tom9.name)
tom9.sayHi()

/*
 * lesson10: getterやsetterを使ってみよう
 */
console.log('--- LESSON10 ---')
class User10 {
  constructor(private _name: string) {}

  sayHi(): void {
    console.log(`hi! i am ${this._name}.`)
  }

  get name() {
    return this._name
  }

  set name(nameValue: string) {
    this._name = nameValue
  }
}
var tom10 = new User10('Tom')
// tom10._name -> private は、外から参照できない
tom10.name = 'TOM'
console.log(tom10.name)
tom10.sayHi()

/*
 * lesson11: クラスを継承させよう
 */
console.log('--- LESSON11 ---')
class User11 {
  // protected は自分自身、または継承したクラス内でのみ参照可能となる
  constructor(protected _name: string) {}

  public sayHi(): void {
    console.log(`hi! i am ${this._name}.`)
  }
}

class AdminUser11 extends User11 {
  private _age: number

  constructor(_name: string, _age: number) {
    super(_name)
    this._age = _age
  }

  public sayHi(): void {
    console.log(`my age: ${this._age}.`)
    super.sayHi()
  }
}

class HogeUser11 extends User11 {
  private _age: number

  constructor(_name: string, _age: number) {
    super(_name)
    this._age = _age
  }

  public sayHi(): void {
    console.log(`my name is ${this._name}(${this._age}).`)
  }
}

var bob11 = new AdminUser11('Bob', 23)
bob11.sayHi()
var crie11 = new HogeUser11('Crie', 32)
crie11.sayHi()

/*
 * lesson12: 静的メンバを使ってみよう
 */
console.log('--- LESSON12 ---')
class User12 {
  constructor(public name: string) {
    User12.count++
  }
  
  static count: number = 0

  static showDescription(): void {
    console.log('this class is about users.')
  }
}

var tom12 = new User12('tom')
var bob12 = new User12('bob')
var backs12 = new User12('backs')
console.log(User12.count)
User12.showDescription()

/*
 * lesson13: インターフェースを使ってみよう
 */
console.log('--- LESSON13 ---')
// function getTotal(result: { a: number; b: number }):number {
//   return result.a + result.b
// }
interface Result13 { a: number, b: number }
function getTotal(result: Result13):number {
  return result.a + result.b
}

var result13 = { a: 32, b: 58 }
console.log(getTotal(result13))
