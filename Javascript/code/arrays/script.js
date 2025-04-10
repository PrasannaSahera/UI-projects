let arr = [5, 4, 3, 2, 1];
arr[5] = 25;
console.log(arr[5]); //25
console.log(arr.length); //6
arr[25] = 100;
console.log(arr.length); //26
console.log(arr);

let x= [10,20,30];
x.push(40,50,60);
console.log(x); // [10, 20, 30, 40, 50, 60]
x.pop();
console.log(x); // [10, 20, 30, 40, 50]
x.unshift(-10, -8, 0);
console.log(x); // [-10, -8, 0, 10, 20, 30, 40, 50]
x.shift(0);
console.log(x); // [-8, 0, 10, 20, 30, 40, 50]

x.splice(4, 2);
console.log(x); // [-8, 0, 10, 20, 50]
//x.splice(4); 
// console.log(x); //[50]
x.splice(2, 2, 101, 102, 103)
console.log(x); //[-8, 0, 101, 102, 103, 50]
x.splice(1, 0, 4, 5);
console.log(x); //[-8, 4, 5, 101, 102, 103, 50]

arr = [4, 5, 4, 3, 2];
arr.reverse();
console.log(arr); // [2, 3, 4, 5, 4]
console.log(arr.indexOf(4)) // 2
console.log(arr.lastIndexOf(4)) // 4
console.log(arr.lastIndexOf(28)) // -1, it is not there in the array
console.log(arr.includes(28)) // false, it check given element is persent in an array or not.

arr = ["raj","prasad","toasti","shyam"];
arr.forEach(function(v, i){ console.log(v, v.length)});

arr = [1,2,3]
arr.forEach( (v, i) => console.log(v * v)); // 1 4 9

let y = arr.forEach( (v) => { return v* 2 })
console.log(y); // undefined bcz forEach can't return any value.. if we want to get the value use the map

y = arr.map( (v) => { return v* 2 })
console.log(y); // [2, 4, 6]

arr = ["prasad", "shekhar","jhon"]
let z1= arr.forEach(function(str){ return str.charAt(0)});
console.log(z1); // undefined

z1= arr.map(function(str){ return str.charAt(0)});
console.log(z1);

arr1=[5,4,6,7];
let x1 = arr1.forEach(function(v,i)
{
    console.log(v);
    return v%2 == 0;
}
);
console.log(x1);

let x2 = arr1.map(function(v,i)
{
    console.log(v);
    return v%2 == 0;
}
);
console.log(x2); // false true true false

let x3 = arr1.filter(function(v,i)
{
    console.log(v);
    return v%2 == 0;
}
);
console.log(x3); // [4,6]-- return only true values

//some
arr1 = [5,4,6,7]
let x4 = arr1.some(function(v,i)
{
    console.log(v);
    return v%2 == 0;
}
);
console.log(x4); // true -- atleast one returned value should be true

let x5 = arr1.every(function(v,i)
{
    console.log(v);
    return v%2 == 0;
}
);
console.log(x5);// false -- every returned value should be true

//sorting
arr = [5, 4, 1, 6, 16, 44, 8, 121, 111111]
let res = arr.sort();
console.log(res) // [1, 111111,121,16,4,44,5,6,8]

console.log(arr.sort((a, b) => a-b)); // [1, 4, 5, 6, 8, 16, 44, 121, 111111]
/* bubble sort : a-b >0 swap; a-b <0 dont swap */

//reduce
//reduce is used for accumulated logic
arr = [5, 4, 3, 1]
let res2 = arr.reduce((p,c) => p+c, 0)
console.log(res2);

arr = [1, 2, 3, 4, 5]
let res3 = arr.reduce((p,c) => p * c, 1)
console.log(res3);

let obj = {
	name: "raj",
	age: 50,
	fun: function () {
		console.log(this.name)
	},
}
obj.fun()