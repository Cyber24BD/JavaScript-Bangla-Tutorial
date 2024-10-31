// arrays
let emA = [];
const fruits = ['Apple', 'Mango', 'Banana']

const fevPerson = [14, 'Day', {name: "Cyber24BD", age:3}]

console.log(emA);
console.log(fruits[3]);
console.log(fevPerson[2].name);
console.log(fevPerson[2]['age']);
console.log("The Length of person :",fevPerson.length);


// method
let fruit = ['Apple', 'Mango', 'Banana']
fruit.push('Jackfruits')
fruit.unshift('Ata')

console.log(fruit);


fruit.pop()
fruit.shift()
fruit[1] = 'Orange'

console.log(fruit);

//  Iterating over Arrays

for (data in fruit){
    console.log(fruit[data]);   
}


let loopNum = [1,2,3,4,5,6,7]

for( i = 0; i < loopNum.length; i++){
    let num = loopNum[i]; 

    if (num % 2 == 0){
        console.log(num);
    }
}

// foreach 
console.log(" For Each");

loopNum.forEach(function(num){console.log(num + 10)})
fruit.forEach((a) => console.log(a));
