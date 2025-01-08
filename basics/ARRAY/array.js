//array

// const myArr = [0, 1, 2, 3, 4, 5 ]
// const myHeroes = [ "raza", "salaar"]


// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

//methods of ARRAY

// myArr.push(6) //can add value
// myArr.pop() //pop the last value
// console.log(myArr)

// myArr.unshift(9) // add value in first
// myArr.shift(9) //remove unshift value
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// const newArr = myArr.join()
// console.log(typeof myArr)
// console.log(typeof newArr)
// // ype change hogya joind ne bind krke string me convert krdi join ny

//Slice or Splice difference

// console.log("A", myArr);

// const myn1 = myArr.slice(1, 3)
// console.log(myn1)
// console.log("B" ,myArr)

// const myn2 = myArr.splice(1, 3)
// console.log(myn2)
// console.log("c" ,myArr)


//PART 2

const marvel_heroes = [ "thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flashman", "batman"]

// marvel_heroes.push(dc_heroes) //they can array in array array as data in this method
// console.log(marvel_heroes);

// const allhero = marvel_heroes.concat(dc_heroes) // two array merge method properly
// console.log(allhero);

//spread
// const allnewhero = [...marvel_heroes, ...dc_heroes]  // this is other method to merge
// console.log(allnewhero)

// array ko array me ek array me krna
// const another_array = [ 1,2,3,[4,5,6] ,7,[6,7,[4,5]]]

// const real_another_array = another_array.flat(Infinity) 
// console.log(real_another_array)
console.log(Array.from("RAZA"))
// arrayis from 