console.log("Let's Learn JavaScript");
// Join ? concat

let a = ['Aksh', 1,2,3]
let b = [4,5,6, "Cyber24BD", "64"]

let c = a.concat(b)
console.log(c);

// return specefic value

let d  = b.slice(2,4)
console.log(d);

// join 
const date23 = ["January", 10, 2023]
let e = date23.join(' / ')
console.log(e);

// reverse 
let f = date23.reverse()
date23.reverse()
console.log(date23);


// splice = Add, Remove, Replace
let g = ["Apple", "Banana", "Mango", "Painapple"]

// g.splice(Start, end, items... )
g.splice(3, 0, "Orange", "Avogada", "Dragon Fruits")
console.log(g);
g.splice(2, 1)

console.log(g);

// multiple arrows

let data = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let result = [
    ["Aksh", 750, 3.58 , ["bangla", 50]],
    ["Faisal", 470, 2.36],
    ["Rakib", 900, 5.00]
]

console.log(data[1][1]);

console.log(result[0][3][1]);
console.log(`${result[2][0]} got ${result[2][1]}.`);

// map reduce filter