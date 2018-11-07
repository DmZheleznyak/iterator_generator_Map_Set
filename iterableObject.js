//Task2: 
function sum(a, b) {
	return a+b
 }
 
 function* asyncFlow() {
	 const a = yield sum(5,5);
	 const b = yield Promise.resolve(10);
	 const c = yield 20;
	 const d = yield a+b+c;
	 console.log(d);
 }
 
 function run(gen) {
	 const sum = gen().next().value + gen().next().value + gen().next().value + gen().next().value
	 return console.log( sum )
 }
 
 run(asyncFlow)
 
 // распечататься должно 40


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==--=-==-=-=--=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-

// function* generator() {
//   var value = 10
//   const map = new Map([
//     ['1', 'string'],
//     [7, 'numb'], 
//     [[1,2,3], 'array']
//   ])

//   map.set(1, 'num1')

//   // const newSet = new Set([
//   //   ['1', 'string'],
//   //   [7, 'numb'], 
//   //   [[1,2,3], 'array']
//   // ])
//   // newSet.add(['numb1', 1]).add(2)

//   try {
//     yield value
//     yield value * 10 // при использовании
//     yield value - 6
//     yield* map
//     yield console.log( value * 30 )
//   } catch( err ) {
//     console.log( `Ошибка из метода throw() ${err}` )
//   }

// }

// var obj = {
//   'key': 457
// }
// obj[Symbol.iterator] = generator // в метод Symbol.iterator мы передаём тело генератора

// for (let value of obj) {
//   console.log( value )
// }


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=--=-=-=-=-=----=-==-=-=-=-
// generator // тело ф-ии генератор
// generator() // обьект Generator
// var gen = generator() //при вызове ф-ии генератор возвращается обьект готовый к использованию
// gen.next()  //метод next() возвращает объект с 2мя значениями value и done
// gen.next().value
// gen.next()
// gen.next().value
// gen.throw( new Error( 'Error caught!' ) ) 
// console.log(`gen()`,gen()) //нельзя вызывать. это обьект

// -=-=-=-=-=--=-=-==-=-==-=-=-=-=-=-=--==-=-=-=-=-==-===--=-=-=-=-=-=---=-=-=-=-=-=-==-==

// -=-===---=-=-=-=-=-=-=-=--=-==-==-==================------------------------------
// Task1:
// 	a = { 0:0, 1:1, 2:2 }
// 	b = [...a]
// 	result [0,1,2]
// // второй вариант
// function* generator() {
//   for (let key in this) {
//     yield Number(key)
//   }
// }

// const a = {
//   0: 0,
//   1: 1,
//   2: 2,
// }

// a[Symbol.iterator] = generator

// const b = [...a]
// console.log( b )

// // первый вариант
// function* generator() {
//   for (let key in this) {
//     yield this[key]
//   }    
    
// }

// const a = { 
//   a: 0,
//   b: 1,
//   c: 2
// }

// a[Symbol.iterator] = generator

// const b = [...a]
// console.log( b )