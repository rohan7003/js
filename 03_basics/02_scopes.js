let a = 423
if (true) {
    let a = 12
    const b = 54
   // var c = 81
//    console.log("inner: ", a);
   
}


// console.log(a);
//console.log(b);
// console.log(c);


function one() {
    const username = "rohan"

    function two() {
        const website = "twitter"
        // console.log(username);
    }
    // console.log(website);

    two() 
}

one()

// in nested function child function can access variables in parent but parent cant access child variable

if (true) {
   const username = "rohan" 
   if (username === "rohan") {
    const website = " twitter"
    // console.log(username + website);
   }
//    console.log(website);
}
// console.log(username);

//+++++++ intresting +++++++++
console.log(addone(7));

function addone(num) {
    return num + 1
}

// addtwo(8)
// const addtwo = function (num) {
//     return num + 2
// }