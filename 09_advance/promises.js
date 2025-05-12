const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task completed");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },2000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "rp", email: "rp@mail.com"})
    },3000)
})
promisethree.then(function(user){
    console.log(user);
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"rp", password:"mcodwm"})
        } else{
            reject('error: something wrong')
        }
    },4000)
})
promisefour.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=>console.log("the promise is either resolved or rejected"))

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"js",password: "1324"})
        }
    },5000)
})

// async function consumepromisefive(){
//     const response = await promisefive
//     console.log(response);
// } 



async function consumepromisefive(){
   try {
    const response = await promisefive
    console.log(response);
   } catch (error) {
    console.log(error);
    
   }
} 
consumepromisefive()
