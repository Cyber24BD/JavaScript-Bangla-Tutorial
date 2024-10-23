let age = 2;

if (age >= 18) {
    console.log("You can enter")
} else {
    console.log("You can't enter")
}

// if (age <= 18) {
//     console.log("You can't enter")
// }


// else if
let sum = 78;

if (sum >= 90){
    console.log("Sum", "A+")
} else if (sum >= 80){
    console.log("Sum : A")
} else if (sum >= 70){
    console.log("Sum : B")
} else {
    console.log("You fail")
}

// Logical Operators 
// and, or, not

age = 18;
let nidValid = false;

// and
if (age >= 18 && nidValid) {
    console.log("You can buy sim")
} else{
    console.log("You can't buy sim")
}


// or 
if (age >= 18 || nidValid) {
    console.log("You can buy sim")
} else{
    console.log("You can't buy sim")
}

// not 

let loginStatus = false;
if (!loginStatus) {
    console.log("You can't watch massage")
}

// Nested if Statements

age = 18;
nidValid = true;
sum = 40

if (age >= 18){
    if (nidValid) {
        console.log("You can enter")

        if (sum >= 30){
            console.log("Vote is 30%+")
        }

    } else {
        console.log("Nid is not valid")
    }   
}
// Taranary
// condition ? expressionIfTrue : expressionIfFalse;

let result = (sum >= 50) ? "Got Passed" : "Got Failed"
console.log(result)

// if else alternative

let day = "df";


switch (day) {
    case "saturday":
    case "friday" :
        console.log("It's Vacation")
        break;
    
    case "monday" :
    case "tuesday" :
        console.log("Its working day")
        break;
    default :
        console.log("Its Nothing")
}