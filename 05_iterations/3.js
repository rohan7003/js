// for of loop

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// maps  -> unique values

const map = new Map()
map.set('IN',"India")
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

// console.log(map);

for (const [key, values] of map) {
    // console.log(key, ':-' ,values);   
}

const myObj = {         // forof loop will not work on object as its not iteratible 
    'game1': 'NFS',
    'game2': 'Spyderman'
}
for (const [key, values] of myObj) {
    console.log(key, ':-', values);
}