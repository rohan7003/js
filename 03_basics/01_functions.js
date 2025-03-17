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
console.log(loginUserMessage(""));
