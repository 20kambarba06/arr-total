let arr = [[{ a: { price_one: 20 } }], [{ b: { price_two: 35 } }], [{ c: { price_three: 44 } }]]
let total = [0]


total.push(arr[0][0].a.price_one + arr[1][0].b.price_two + arr[2][0].c.price_three)
console.log(total);

 

