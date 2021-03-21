// //dl
// let {name} = value;
// //rfl
// for (let i = iterable.length - 1; i >= 0; i--) {  
// }
// //tc
// try {
    
// } catch (err) {
    
// }
// //fn
// function name(arguments) {
    
// }
// //fb
// fn.bind(this, arguments)
// //tof
// typeof source === 'undefined'
// //pr
// new Promise((resolve, reject) => {
    
// })
const arr = [1,2,3,4,5,6,];

let index1 = arr.indexOf(6);
console.log(index1);

let index2 = arr.lastIndexOf(6);
console.log(index2);

let index3 = arr.includes(9);
console.log(index3);

let index4 = arr.findIndex(function (currentValue,curentIndex,currentArray) {
    if (currentValue === 6) {
        return true;
    }
});
console.log(index4);

let value = arr.find (function (currentValue,curentIndex,currentArray) {
    if(currentValue === 6) {
        return true;
    }
});
console.log(value);

for(let i in arr) {
    console.log(arr[i]);
}

for(const v of arr) {
    console.log(v);
}

for (const [i,v] of arr.entries()) {
    console.log(i,v)
}