function add([ {name: name,age: age1},{name: name2,age: age2}]) {
    return age1 + age2
}

console.log(add([{ name: 'tom', age: 20},{name:'jack',age:22}]))

let a = 2
let b = 3
[a,b] = [b,a];
console.log(a + '-----' + b)

let map = new Map()
map.set('item1','aaa')
map.set('item2','bbb')
console.log(map)
for (let [key,value] of map) {
    console.log(`${key}----${value}`)
}