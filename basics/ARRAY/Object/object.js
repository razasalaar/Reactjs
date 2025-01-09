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
const tinderUser = new Object{}
console.log(tinderUser);
