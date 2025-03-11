// objects singleton 

//const tinderuser = new Object()       // singleton object
const tinderuser = {}                 // non singleton object
tinderuser.id = "123cds"
tinderuser.name = "rohit"
tinderuser.isLoggedIn = false
// console.log(tinderuser);

const regularuser = {
    email: "dnk@14gmail.com",
    fullname: {
        userfullname: {
            firstname: "rohan",
            lastname: "patil"
        }
    }
 }
// console.log(regularuser.fullname);
// console.log(regularuser.fullname.userfullname.firstname);

// to combine objects
const obj1 = {1: "a",2: "s"}
const obj2 = {3: "r",4: "g"}
const obj4 = {5: "r",6: "g"}

// const obj3 = {obj1,obj2}
// const obj3= Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "rp@gmail.com"
    },
    {
        id: 2,
        email: "rf@gmail.com"
    },
    {
        id: 3,
        email: "rg@gmail.com"
    },
    {
        id: 4,
        email: "rd@gmail.com"
    }
]

users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));
