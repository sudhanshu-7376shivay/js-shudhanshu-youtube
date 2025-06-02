
function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("t");
}

sayMyName()

function addTwoNumbers(number1, number2){
  
    return number1+number2
}
// function addTwoNumbers(number1, number2){
//     console.log(number1+ number2);
// }

addTwoNumbers(3,null)

const result = addTwoNumbers(3,6)

console.log("result: ", result);


function loginuserMessage(username){
    if(!username){
        console.log("please  enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginuserMessage())
console.log(loginuserMessage("sudhanshu"))

function calculateCartPrice(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice(300,500,200,600,800,900,1000));

const user =  {
    username:  "sudhanshu",
    price: 199,
    range: 5000

}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}` )

}
handleObject({
    username: "sudhanshu",
    price: 399
})

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1] 
}
console.log(returnSecondValue([200,400,500,1000]));


scope
var c=300

let  a = 300
const b = 500

if (true){
    let a =10
    const b = 20
    var c =30
}

for(let i=0; i<Array.length; i++){
    const element = array[i];

}
console.log(a);
//console.log(b);
console.log(c);


function one(){
    const username = "sudhanshu"
    function two(){
        const website = "youtube"
        console.log(username);

    }

   // console.log(website);

    two()
    
}

one()

if(true) {
    const username = "sudhanshu"
    if(username == "sudhanshu"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website);
    
}
console.log(username);

**********************************interesting********************************************************



function addone(num){
    return num+1;
}

console.log(addone(5))

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))


**************arrow function */

********Immediately invoked function expression(iife) */

(function chai(){
    console.log(`DB CONNECTED`);
})();
( (name) => {
    console.log(`DB CONNECTED ${name}`);
})('sudhanshu')
function one(){
    console.log("one")
}
function two(){
    console.log("two")
}
function three(){
    console.log("three")
}

one()
two()
three()


const score = 200

if(score> 100){
    let power = "fly"
    console.log(`user power: ${power}`);

}

console.log(`user power: ${power}`);

const balance = 1000

// if(balance > 500) console.log("test");

if(balance <500) {
    console.log("less than");
    
}
else if(balance <750){
    console.log("less than 750");
    
}
else{
    console.log("anything");
    
}



