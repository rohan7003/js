// objects can be declared as literals & constructor

// singleton  -  built from constructor, only object of its type 
// Object.create   -> singleton method

// object literals 
// const jsUser = {}   -> literal method

         //   ++++++++  Arrays Vs Objects   ++++++++
// myArray = ["R","o"]  
//myArray[1]                         
/* in arrays you can only access elements by their index numbers 
 but in objects you can define kye or value  */


const mySym = Symbol("Key1") 

const jsUser = {
    name: "Rohan",
    "full name ": "Rohan Patil",    // cant access using (jsUser.full name). instead use  (jsUser["full name"])
    [mySym]: "key1",
    age: 21,
    location: "kolhapur",
    Email: "rohan@7003gmail.com",
    isLogedIn: false,
    LastLoggedIn: ["Monday","Tuseday"]
}

// console.log(jsUser.Email)    // to access object
// console.log(jsUser["Email"])
// console.log(jsUser["full name"])
// console.log(typeof jsUser[mySym])

jsUser.Email = "rp@gmail.com"  // to change values
// Object.freeze(jsUser)          // to lock values
// console.log(jsUser);

jsUser.gretting = function(){
    console.log("hello js user"); 
}
jsUser.gretting2 = function(){
    console.log(`hello js user,${this.name}`); 
}

console.log(jsUser.gretting());
console.log(jsUser.gretting2());
