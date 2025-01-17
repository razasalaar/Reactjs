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
console.log(loginUserMessage("SALAAR"));

