function sayMyName(){
    console.log("R");
    console.log("o");
    console.log("h");
    console.log("a");
    console.log("n");
}
// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log( num1 + num2);
// }

// addTwoNumbers(3,6)
// addTwoNumbers("3",6)
// addTwoNumbers(3,"a")


function addTwoNumbers(num1, num2){
    let result = num1 + num2
    // return result   or
    return num1 + num2
    
}
const result = addTwoNumbers(3,5)
// console.log("result:", result);

function loginUserMessage(username) {
    return `${username} just logged in `
}
// console.log(loginUserMessage("rohan"));
// console.log(loginUserMessage());

function loginUserMessage(username) {
    if (username === "") {
        console.log("please enter username");
        return 
    }
    return `${username} just logged in `
}
// console.log(loginUserMessage("rohan"));

function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(200,400,608,745,902));

function calculateCartPrice1(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice1(200,400,608,745,902));


//+++++  pass object in function ++++++++++

const user = {
    username: "rohan",
    price: 634
}

function handleObj(anyObject){
console.log(`Username is ${anyObject.username} and price is${anyObject.price}`);

}
// handleObj(user)    //or
handleObj({
    username: "wjdkja",
    price:  635
})


//+++++++++++   pass array in function   +++++++++++

const myNewArray = [ 123, 543, 743, 854, 834]
function returnValue(getArray) {
    return getArray[4]
}

// console.log(returnValue(myNewArray));   // or
console.log(returnValue([ 123, 543, 743, 854, 834]));


