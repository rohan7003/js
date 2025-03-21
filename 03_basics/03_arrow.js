const user = {
    username: "rohan",
    price: 789,

    welcomeMessag: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
        
    }
}

// user.welcomeMessag()
// user.username = "samar"
// user.welcomeMessag()
// console.log(this);

// function chai() {
//     let username = "rohan"
//     console.log(this.username);   
// }
// chai()


const chai = () => {
    let username = "rohan"
    console.log(this);   
}
// chai()

// syntax of arrow fn  () => {}

// const addTwo = (n1, n2) => {
//     return n1 + n2
// }
// console.log(addTwo(4,7));

// const addTwo = (n1, n2) => n1 + n2  //using this method dont need to write return statement
const addTwo = (n1, n2) =>( n1 + n2)
console.log(addTwo(5,9))
