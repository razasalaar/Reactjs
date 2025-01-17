//funtion

// function sayMyName() {
// console.log("h");
    
// }
// sayMyName()

// function addTwoNumber(number1,number2) {
//     console.log(number1+number2);
//      return 
// }
function addTwoNumber(number1,number2) {
   let result = number1+number2
//    console.log(result);
   
   return result
}

const result = addTwoNumber(4,5)
// console.log(result);



//call funtion
function loginUserMessage(username){
    if (!username) {
        console.log("please enter username");
        return 
    }
    return `${username} just logged in`

}
// console.log(loginUserMessage("SALAAR"));

// funtion with object and array// //*******************************/

function calculateCartPrice(val1,val2,...num1) {
    return num1
}
// console.log(calculateCartPrice(3,4,3,4,9));


const user = {
    username : "RAZA",
    prices: 199
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);  
}
handleObject(user)

const myNewArray = [200,300,400,600]

function returnSecondValue(getarray) {
    return getarray[1]
}
console.log(returnSecondValue(myNewArray));
