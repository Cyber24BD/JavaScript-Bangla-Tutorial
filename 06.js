let a = 5 
let b = 10
let c = 4.22

// Mathmatical Oparetion 

console.log(a + b)
console.log(a - b)
console.log(a / b)
console.log(a * b)



//Exponentiation 

// base * exponent

console.log( 5 ** 10) // 5 * 5 * 5

console.log ( 7 % 2)
console.log ( 9 % 3)

console.log( Math.round(119 / 25))
console.log( (119 / 25))

console.log(5 + 5)
console.log( 5 + '5' )
console.log('5' + 5)
console.log("Hello" + " " + "Cyber24BD")
console.log("abc " + 30)

a = 10 
a++

console.log(a) // Increse hobe 
console.log(++a) // post Increse

console.log(--a)
console.log(a--)

b = -5

console.log(-b)

let s = '5'
console.log(typeof +s)
console.log(+false)

console.log(Math.pow(2, 10))
console.log(Math.abs(-5.25))
console.log(Math.floor(4.9)) // down
console.log(Math.ceil(4.1)) // up
console.log(Math.round(4.2)) // Individual
console.log(Math.random()) // 0,1 random

let random1 = Math.random()


let fname = 0.2
let fname2 = 0.1
let result1 = fname / fname2 

console.log(result1)
console.log(random1.toFixed(2))

//Number Coinstant Value

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)

console.log("Infinity 1/0 : " + 1/0)

// Big int  : n 

let bigint1 = 44649874898786498798n
let bigint2 = 1n

console.log(bigint1 + bigint2)



let strn01 = '10'
let strn02 = Number.parseInt(strn01)
console.log(typeof strn01, typeof strn02)


let float01 = '10.256523'
let flot02 = Number.parseFloat(float01)
console.log(float01 + " "+ typeof float01, flot02,  typeof flot02)


console.log(Number.isFinite(flot02))
console.log(Number.isInteger(strn02))
console.log(Number.isNaN(flot02))



let num = 0/0;
let numCheck = Number('abc')


console.log('abc' * 12)
console.log(0/0)
console.log(Math.sqrt(-1))

console.log(numCheck)
console.log(num)
console.log(num == numCheck)
console.log('10' == '10')


console.log(NaN * 20)
console.log(NaN / 20)
console.log(NaN + 20)
console.log(NaN - 20)



console.log(isNaN(num))
console.log(Number.isNaN(num))


console.log('isNaN Method: '+isNaN('abc'))
console.log('Number isNaN Method: '+Number.isNaN('abc'))
