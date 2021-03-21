let [item1,item2,item3] = ['apple', 'banana','pear']
console.log(item2)

//嵌套数组的解构
//规则的模式匹配
let [item4,[[item5],item6]] = ['aaa', [['bbb'],'ccc']]
console.log(item4)
console.log(item5)
console.log(item6)

//非规则模式的嵌套数组解构赋值
let [item7,[[item8],item9]] = ['aaa',[['bbb','ccc'],['ddd','eee']]]
console.log(item7)
console.log(item8)
console.log(item9)

let [item7,item8,...other] = ['aaa','bbb','ccc','ddd','eee']
console.log(item7)
console.log(item8)
console.log(other)


//对象赋值
let { age,name} = { name:'tom', age:30}
console.log(name + '------' + age)

//解构成员函数
let {sprt ,sin , cos} = Math
console.log(sqrt(36))

//字符串解构
let [a,b,c] = 'javascript'
console.log(a)
console.log(b)
console.log(other)
console.log(typeof (other))