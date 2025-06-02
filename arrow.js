const  user ={
    username: "sudhanshu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log()
    }


}

user.welcomeMessage()
user.username = "shiv"
user.welcomeMessage()

console.log(this)

function chai(){
    let username = "sudhanshu"
    console.log(this.username);
}

const chhai = () => {
    let username = "sudhanshu"
    console.log(this.username);

}

chhai()

const addTwo = (num1, num2) => {
    return  num1 + num2
}
//**********if we use  a curly braces then there is a use  of return keyword */
console.log(addTwo(3, 4))


console.log(addTwo(3, 4))


const myArray = [2,4,5,7,8]
myArray.forEach()
