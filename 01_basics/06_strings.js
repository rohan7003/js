const name = "rohan"
const repoCount = 20

//console.log(name + repoCount + "value");

//console.log(`Hello i am ${name} and my repo count is ${repoCount}`);

const gameName = new String('rohan-rc')
// console.log(gameName[0]);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('a'));

const newString =  gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   rohan   " 
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20chaudhary"
// console.log(url.replace('%20','-'))

// console.log(url.includes('hitesh'))
// console.log(url.includes('ritesh'))

//conver string to array

console.log(gameName.split('-'));
