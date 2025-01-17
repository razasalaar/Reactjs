

let a = 300; //global scope
// console.log(a);
if (true) {
    a =2
    // console.log("INNER",a);  
}

// console.log(b);
// console.log(c);


//Scope level and  mini hosting
//nested funtion
//nested Scope


 function one() {
    const username = "raza"

    function two() {
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    two()
    
 }
 one()


 //// +++++++++++++++++++++++/////// interesting 

 function addOne(num) {
    return num + 1    
 }
 console.log(addOne(5))

// both have technique to funtion
 const addTwo = function (num) {
    return + 2
 }
 addTwo(5)