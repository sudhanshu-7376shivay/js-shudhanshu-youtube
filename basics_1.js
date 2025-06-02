
//objects literals
const Jsuser = {
    name:"Sudhanshu",
    age: 18,
    location:"Sultanpur",
    mySym: "mykey1",
    email: "sudhanshu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays","Saturday"]

 }
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["email"]);
// console.log(Jsuser["email"]);

Jsuser.email = "sudhanshu@chatgpt.com"
Object.freeze(Jsuser)
Jsuser.email = "sudhanshu@microsoft.com"
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello js user");
    console.log("hello js user");
    console.log("hello js user");
}
console.log(Jsuser.greeting());

