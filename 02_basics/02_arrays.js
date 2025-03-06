const marvalHeros = ["thor","ironman","spiderman"]
const dcHeros = ["superman","flash","batman"]

// marvalHeros.push(dcHeros)
// console.log(marvalHeros);
// console.log(marvalHeros[3][2]);

// const allHeros = marvalHeros.concat(dcHeros)             // push function pushes value to same array but concat returns new array
// console.log(allHeros)

                  // OR //

const allHeros = [...marvalHeros, ...dcHeros]
// console.log(allHeros);

const next_array =  [1,2, 3, 4,[5, 6], 7, [8, 9, [2]]]
const real_next_array = next_array.flat(Infinity)
console.log(real_next_array);

console.log(Array.isArray("Rohan"));
console.log(Array.from("Rohan"))
console.log(Array.from({name:"Rohan"}))           // need to tell which array you want keys or values


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   // returns new array from set of elements

