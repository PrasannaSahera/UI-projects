//arithmetic : used for arithmetic operations

let a=5,b=10;
console.log(a+b); //15
console.log(a-b);//5
console.log(a*b);//50
console.log(a/b);//0.5
console.log(a%b);//5 -- remainder
console.log(b**a); // 10 power 5 - 10000

//relational operators : used for comparisions, returns boolean values
console.log(a>b); //false
console.log(a<b);//true
console.log(a>=b);//false
console.log(a<=b);//true
a=5,b='5';
console.log(a==b);//true. checks whether a value is equal to b value and it wont check data types.
console.log(a===b);//false. strict equals checks whether a value is equal to b value and it check data types.

console.log(a!=b);//false. chceks whether a value is equal to b value and it wont check data types.

console.log(a !==b);//true. chceks whether a value is equal to b value and it wont check data types.

//logical operators : used for logical conclusions
a=10, b=20;

console.log( (a>5) && (b<50)) // logical AND is true when all of the conditions are true

console.log( (a>5) || (b<50)) // logical OR is true when any one of the condition is true; logical OR is false when all of the conditions are flase

console.log( !(a>5)) // logical NOT returns negation of result

//Assignment operators
a = 5;
a += 2; //a=a+2 ==>a=7
a -= 2; // a = a-2
a *= 2; // a = a*2
a /= 2; // a = a/2
a %= 2; // a = a%2
a **= 2; // a = a ** 2

// increment and decrement
//++ -- increase value by 1
// -- -- decrease value by 1
a = 5;
a++; // post increment -- first assign and update
console.log(a); //6
++a; // pre increment -- update and assign
console.log(a); //7
a =5;
let y = ++a + 5;
console.log(y); // 11

a =5;
y = a++ + ++a + a; // 5 + 7 + 7
console.log(y); //19

a=2;b=3;
y = ++a + a++ + a-- + --a; // 3 + 3 + 4 + 2 = 12
console.log(y);

//unary +
// + is used to convert any value into number
console.log(5 + +'5'); // 5 + 5 =10

//Ternary operator or conditional operator
// (condition)? value1 : value2;
a=5;
let c = (a >2)? 10:20;
console.log(c); //10 because condition is true
c = (a < 2)?10:20;
console.log(c); //20 because condition is false


// optional chaining operator (??)
// always it will choose frist one but if 1st one is null / undefined then it will choose the 2nd one
// ?? operator lets you choose between 2 values, if 1st value is not undefined or null, then it choose 1st option else it chooses second option
b = 5, c=10;
a = b ?? c; // it will choose b
console.log(a);
b=null;
a = b ?? c ; // it will choose c
