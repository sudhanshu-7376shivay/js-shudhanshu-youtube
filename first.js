const score = 100
const scoreValue = 100.3

const isLoggedIn = false  
outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId);

const bigNumber = 3732829234782346845667n

const heros = ["shaktiman", "naagraj","dogs"]
{   myObj = {
   name: "sudhanshu",
   age: 18,
}
const myFunction = function(){
    console.log("hello shiv")

}

console.log(typeof(myFunction));


}
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
    userTwo.email = "sudhanshu@google.com",
    userTwo.upi = "sudhanshu@ybl"
    console.log(userTwo.email);
    console.log(userOne.email);

    const name ="Sudhanshu"
    const repoCount = 50

    console.log(`hello my name is ${name()} and my repocount is ${repoCount}`)

    const gameName = new String("ShiVKuma");
    // console.log(gameName[0]);
    console.log(gameName.length);
    console.log(gameName.toUpperCase());
    console.log(gameName.toLowerCase());
    console.log(gameName.charAt(2));
    // const newstring = gameName.substring(8,4)
    // console.log(newString);

    const url = "http://sudhanshu.com/sudhanshu%30mishra"
    console.log(url.replace('%30','-'))

    console.log(url.includes("sudhanshu"))
//array

const myArr = [0, 1, 2, 3,4 ,6]

console.log(myArr[5]);
const myHeroes = ["shaktiman","commamman","batman","spiderman"]

console.log(myHeroes[2]);

// Array methods

// myArr.push(8)
// myArr.push(7)
// myArr.push(4)

// myArr.unshift(9);
myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// console.log(myArr);
const newArr = myArr.join("->")

console.log(myArr);
console.log(newArr)
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1)

console.log("B ", myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);





    
    


