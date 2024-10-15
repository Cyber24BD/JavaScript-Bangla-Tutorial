let comapany01 = {
    name : "Cyber24BD",
    suscriber : 500,
    tagline : "An Educational Channel.",
    content : {
        programming : "JavaScript",
        software : "VS code editor",
        view : 100,
    },
}

comapany01.adress = "Dhaka, BD"
comapany01.suscriber = 5000

console.log(comapany01.tagline)
console.log(comapany01.suscriber)
console.log(comapany01["name"])
console.log(comapany01)
console.log(comapany01.content.software)

console.log(Object.keys(comapany01.content))
console.log(Object.values(comapany01))


let info01 = `Hi this is ${comapany01.name}, Adress : ${comapany01.adress}`
console.log(info01)

let company02 = new Object();
company02.name = "Toamun";
company02.type = "Page";
company02.like = 400;
company02.password = 123;

Object.freeze(company02)

company02.password = 423;

console.log(company02)