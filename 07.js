// Basic Assigment Oparetor 
// variable = value

let basicX = "Value"

// Compound assigment oparetor 
// +=, -=, *=, /=, %=

let num1 = 10;
num1 += 5; // num1 = num1 + 5  => (10 + 5)
console.log(num1)


let num2 = 15; 
num2 -= 10; //  num2 = num2 - 10 => 5


num2 *= 5 // 25
num2 /= 5 // 5
num2 %= 2 // 1

num1 **= 3 // 225

console.log(num2)
console.log(num1)

// Bit wise oparetor 
// 0 , 1 = binary
// &=, = and 
// |=, = or 
// ^=, = xor
// >>= 
// <<=

let num3 = 5;
num3 &= 3;
console.log(num3)

// Logical 
// left -  right
// Right = value high 

// and logical
let x1 = true; // left
x1 &&= false; // right
console.log(x1)

// or logical 
let x2 = null;
x2 ||= 10;
console.log(x2)

//nullish 
let x3;
x3 ??= 25;
console.log(x3)

// Comparison Oparetor 

// Equlity oparetor 
// == => Equal
// != => Not Equal

let n1 = "BD";
let n2 = "IN";
let n3 = 5;
let n5 = '5';

console.log(n1 == n2)
console.log(n1 != n2)
console.log(n3 == n5)
console.log(n3 != n5)

// stric 
console.log(n3 === n5)
console.log(n3 !== n5)

// Relationshop compair 
// >, <, <=, >=

let n10 = 25;
let n12 = 50;

console.log(n10 < n12)
console.log(n10 <= n12)
console.log(n10 > n12)
console.log(n10 >= n12)

let a1 = "Apple"
let a2 = "Amazon"

console.log(a1 >= a2)

// Logical comparison
// && , ||, !

// and =  True - True
console.log(5>6 && 'a'=='a')
console.log(true && true)

// or =  False - True
console.log(5>6 || '2'=='a')
console.log(false || true)

// not
console.log(!(false))
console.log(!(5>3))
// ! = not true =  flase