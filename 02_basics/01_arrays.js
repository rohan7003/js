// array


const myArr = [ 1, 2, 3, 4, 5, 6 ]
const myHeros = ["spyderman","superman","batman"]
const myArr2 = new Array(4,3,2,1)
// console.log(myArr[0]);


//array methods

// myArr.push(7)        // adds element tolast of array
// myArr.push(26)
// myArr.pop()          // removes last element
// myArr.unshift(9)         //addds value to starting
// myArr.shift()

// console.log(myArr.includes(9));       //gives answer in boolean
// console.log(myArr.indexOf(9)); 
// console.log(myArr.indexOf(4)); 

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof myArr);
// console.log(newArr);
// console.log(typeof newArr);


//============ slice & splice ===============

console.log("A",myArr);
const myn1 = myArr.slice(1,3)       // only includes values of index 1 & 2 not 3

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)     // includes values of index 1,2 & 3
console.log("C",myArr);            // splice manipulates original array  [it will remove values of index 1,2,3 from array]
console.log(myn2);

