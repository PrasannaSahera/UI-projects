let a = 5;
a = 5 + '5';
a = "prasad" + 2;  //"prasad"+"2"
console.log(a,typeof a); //number
a = "prasad" 
console.log(typeof a) //string
a = true;
a = 1 + true; //1+1
console.log(a,typeof a); //boolean

let p= 25.123-'p';
p = Infinity;
p= 5.426;
console.log(p, typeof p);
console.log(p.toFixed(2), typeof p); //5.3 -- answers will print as string
p=25;
console.log(p.toString(2)); // 11001
p= 5+ '5';
console.log(p);//55
p=5+ +'5';
console.log(p); //10 + is used as typecast .. it will convert string to int and perform addition
p=10 + Number('10');
console.log('add ' + p);
//math methods

console.log(Math.sqrt(16)); //4
console.log(Math.cbrt(27)); //3
console.log(Math.abs(-10)); //10
console.log(Math.max(5,1,3,4,6)); //6
console.log(Math.min(3,4,2,1,8)); //1
console.log(Math.ceil(4.0001)); //5
console.log(Math.floor(4.8));//4
console.log(Math.round(4.8,)); //5
console.log(Math.random()); // return randomly between 0 to 1
console.log(Math.round(Math.random()*10000)); // it gives 4 digits random number
console.log(Math.pow(2,3)); //8
console.log(2**3) // it is also same as pow(2,3)

//strings

let q = "prasanna";
q = 'prasanna';
q = `prasanna`;
console.log(q, typeof q); // string
q=25;
console.log("the value of q is q"); // the value of q is q
console.log(`the value of q is ${q}`); //the value of q is 25
//Template literal - backticks
let cost = 4, tax=5, qty=10;
console.log(`The Total of buying ${qty} apples with each cost ${cost} is ${qty*cost} but after the tax of ${tax} is ${(tax/100*(cost*qty))+(qty*cost)}`); //The Total of buying 10 apples with each cost 4 is 40 but after the tax of 5 is 42

//string methods
let str = "prasanna";
console.log(str.length); //8
console.log(str[0]);// p
console.log(str[0] + str[1]);// pr -- string concatenation
console.log(str.toUpperCase());//PRASANNA
console.log(str.toLowerCase()); // prasannna
console.log(str.startsWith("pr")); // true
console.log(str.startsWith("Pr")); // false -- case-senstive
console.log(str.endsWith("pr")); // false

console.log(str.indexOf('a'));
console.log(str.indexOf('a',3));
console.log(str.lastIndexOf('a'));
str = "JS is so easy";
console.log(str.split(' '));
console.log(str.slice(2,5)); // is
str= "       prasanna   ";
console.log(str.trim());

let k;
console.log(k, typeof k);// undefined
//console.log(z); // error bcz there is no z is defined
let n= null;
console.log("null===",n );
// in js it is possible to access values before declaration, called Hoisting. it is not possible with let and const (var is deprecated)
console.log("m", m) //undefined
var m=5;
