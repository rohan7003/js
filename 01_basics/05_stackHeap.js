// stack memory (primitive DT),  heap memory (non primitive DT)


//stack
let myXname = "ROhanPatil7003"

let anothername = myXname
anothername = "rohit"

console.log(myXname);
console.log(anothername);


//heap
let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "rp@gmail.com"

console.log(user1.email);
console.log(user2.email);

