// premitive
/*
7 types : 
        string,
        number,
        boolean,
        null,
        nundefined,
        symbol,
        bigint */


const score = 100 
const scorevalue = 100.33
const isloogedin = false
const outsideTemp = null
let usermail;       
const id = Symbol('123')
const otherid = Symbol('123')

console.log(id === otherid);

//const bigNumber = 1234565727262151n

// non primitive(reference type)
/* 
types:    
    array,
    object'
    functions */  //dt = function

const heros = ["spyderman","superman","batman"]    //array
let myObj = {
    name: "rohan",
    age:21
}                 //Object


const myFunction = function(){
    console.log("hey");   
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);

