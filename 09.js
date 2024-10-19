for (let i = 0; i <= 1; i++) {
    console.log('Value of i = ',i)
} // Declair, Condition, increasement-decreasement 


for (let i = 5; i > 0; i--){
    console.log('Value of d. =', i)
}

for (let i = 5, j = 0; i >= 0, j <= 5; i--, j++ ){
    console.log('i : ', i, 'j : ', j)
}

for (let i = 0; i <= 3; i++){

    for(let j = 3; j >= 0; j--){
        console.log('First : ', i, 'Second : ', j)
    }

}

// practical example 01

let company = ['Cyber24BD', 'Samsung', 'Apple', 'MI', 'Hw']

// console.log(company[0])
// console.log(company[1])
// console.log(company[2])

for (let i = 0; i < company.length; i++){
    console.log('Company name : ', company[i])
}


// practical example 02

let num01 = 125;
num01 = 1 + 2+ 3+4+5+6+7+8+9+10
console.log(num01)

let sum01 = 0;

for (let i = 0; i <= 10; i++){
    sum01 += i
}

console.log('Sum of 10 is : ', sum01)

// for in 

let author = {
    name : 'Cyber24BD',
    age : 4, 
    writer : 'Sakib',
}

console.log(author['name'])

for (key in author){
    console.log('This is for in loop')
    console.log(key, ':', author[key])
}

// for of 
let companys = ['Cyber24BD', 'Samsung', 'Apple', 'MI', 'Hw']

for (com of companys){
    console.log('For of : ', com)
}

// While loop = condition
// true and false
 
let wi = 0;

while ( wi < 5) {
    console.log("I am while Loop", wi)
    wi++
}

let pass;

// while(pass !== 'cyber') {
//     pass = prompt('Enter Password ! : ')
// }

console.log("Access Granted")

// invalid 
for (let i = 5; i < 0; i--){
    console.log('Value of d. =', i)
}

// infinite
// for (let i = 0; i >= 1; i++) {
//     console.log('Value of i = ',i)
// }