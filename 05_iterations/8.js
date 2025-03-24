// reduce
const myNums = [1,2,3,4]
// const mytotal = myNums.reduce(function (accmulator, currentvalue) {
//     console.log(`accmulator: ${accmulator} and currentvalue:${currentvalue}`);
    
//     return accmulator + currentvalue
// }, 0)  // 0 = accumulator value
// console.log(mytotal);

const mytotal = myNums.reduce((accmulator,currentvalue)=> accmulator+currentvalue,0)
// console.log(mytotal);

const shoppingCart = [
    {
        itemname: "js course",
        price: 2929
    },
    {
        itemname: "py course",
        price: 2500
    },
    {
        itemname: "cpp course",
        price: 1000
    },
]

const pricetopay = shoppingCart.reduce((accmulator,item)=>accmulator + item.price,0)
console.log(pricetopay);
