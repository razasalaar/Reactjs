//  OBJECT {}

//object literal
// const mySym = Symbol("key1")
// const JsUser = {
//  name: "raza",
//  age: 18,
//  "fullname": "RAZA FAZAL",
//  [mySym] : "mykey1", //declare symbol
//  email: "razafazal313@gmail.com",
//  isLoggedIn: false,
//  lastLoginDays: ["Monday","Saturday"]

// }
// console.log(JsUser.email) //1st method to declare object
// console.log(JsUser["email"]) //right way to declare object
// console.log( JsUser[mySym]) //right way to declare object
// console.log(JsUser["fullname"])


// JsUser.email = "salar@gmail.com" //change value in object
// Object.freeze(JsUser)
// JsUser.email ="microsodf@gmail"
// console.log(JsUser)

// JsUser.greeting = function () {
//     console.log("Hello Js user");
// }

// console.log(JsUser.greeting());

// JsUser.greetingTwo = function () {
//     console.log(`Hello Js user ${this.name}`); //how to refer a name in 
// }
// console.log(JsUser.greetingTwo());


//singleton is litral ki trha declare krein singleton nai bnta constructor sy bnta haa
// const tinderUser = new Object() 

const tinderUser = {}

tinderUser.id = "raza"
tinderUser.name = "Salaar"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const  regularUser = {
//     email: "razafazal@gmail.com",
//     fullname: {
//         userFullname: {
//             firstName: "raza",
//             lastName: "fazal"

//         }
        
//     }
// }
// console.log(regularUser.fullname.userFullname.firstName);

//add two object combine/ merge

const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"c", 4:"d"}

// const obj3 = Object.assign({},obj1,obj2) //merge use this in {}
const obj3 = { ...obj1,...obj2} //latest and most used context
// console.log(obj3);

// array ka object
const users = [
    {
        id: 1,
        email: "razafazal19@gmail.com",

    },
    {
        id: 2,
        email: "salar23@gmail.com",

    }
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//De Structuring
const course = {
    courseName: "JS HINDI ",
    price: "999",
    courseInst: "RAZA FAZAL"

}
const {courseInst: inst} = course  //de structuring
console.log(inst);

