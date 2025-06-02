const marvel_heros = ["thor","Ironman","spiderman"]

const dc_heroes = ["superman","flash","batman"]

marvel_heros.push(dc_heroes)

console.log(marvel_heros);

console.log(marvel_heros[3][1]);

const all_Heros = marvel_heros.concat(dc_heroes)
console.log(all_Heros);
console.log(all_Heros[3]);

const all_new_heroes = {...marvel_heros, ...dc_heroes}

console.log(all_new_heroes);



const another_array = [1,2,3, [4,5,6],7,[8,9,[2,4]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Sudhanshu"));
console.log(Array.from("Sudhanshu"))
console.log(Array.from({name: "Sudhanshu"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

const tinderUser = new Object()

tinderUser.id = "123abcd"
tinderUser.name = "sushanshu"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sudhanshu",
            lastname: "Mishra"
        }
    }
}

console.log(regularUser)


const obj1 = {1: "a",2:"b"}
const obj2 = {3: "c",4:"d"}

const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)
const obj3 = Object.assign(obj1,obj2)
console.log(obj3);

const obj5 = {...obj1 , ...obj2}
const users = [
    {
          id: 1,
          email: "sudhanshu@gmail.com",
    },
    {
          id: 1,
          email: "sudhanshu@gmail.com",
    },
    {
          id: 1,
          email: "sudhanshu@gmail.com",
    }
    
        
]


users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course ={
      coursename: "js in hinndi",
      price: "999",
      courseInstructor: "sudhanshu"
}
course.courseInstructor

const {courseInstructor:  instructor} = course
console.log(courseInstructor);

const navbar = ({company}) => {

}

navbar(company = "sudhanshu ")

{
      name: "SUDHANSHU",
      coursename: "js in hindi",
      price: "free"
}

/functions

