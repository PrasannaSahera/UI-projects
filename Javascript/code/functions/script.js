//simple function

function sum()
{
    let a=10, b=20;
    console.log(a+b);
}

sum();

function sum2(a,b)
{
    console.log(a+b)
}

sum2("sunil",2)

function sum3(a,b,c)
{
    if(c)
    {
        console.log("valid");
    }
    else
    {
        console.log("invalid");
    }
   // console.log(a+b+c);
}

sum3(5,4,false)

function sum4(a,b)
{
    return a+b;
}

let res = sum4(5,4);
console.log(res); //9

function sum5(a,b)
{
    console.log(a+b);
}
sum5(10); //NaN

function sum6(a=3, b=5)
{
    console.log(a+b); //10 +5 =15
}
sum6(10); //10+5 =15
sum6(); //3+5 =8

//default tax in system is 5% unless actual tax mentioned
function calculateTax(cost, tax=5)
{
    let res = (tax/100)*cost;
    console.log(cost+res); //210
}
calculateTax(200)

function sum7(a=10, b=3, c=5)
{
    console.log(a+b+c)
}

sum7(5,4,3) // 5 + 4 + 3 = 12
sum7(5,4); // 5 + 4 + 5 = 14
sum7(5); // 5 + 3 + 5 = 13
sum7(); // 10 + 3 + 5 = 18

//REST
function sum8(a, ...b)
{
    console.log(a, b);
}

sum8(5,4,3,2,1) // 5, [4,3,2,1]

function printLength(a, b, ...c)
{
    console.log(c.length)
}
printLength("raj", "shekar", "kumar","sofia","leena","prasad"); // 4

//SPREAD

function simpleSpread()
{
    let arr = [5, 4];
    let arr2 = [arr, 3];
    console.log(arr2)// [[5,4],3]
    console.log(arr2.length) //2

    let arr3 = [...arr, 3];
    console.log(arr3); // [5,4,3]
    console.log(arr3.length) //3

    // add two arrays
    let a1 = [5,4], a2 = [6, 7]
    let res = [...a1, ...a2];
    console.log(res); //[5, 4, 6, 7]
}

simpleSpread();


function friends(a, ...b)
{
    console.log(b); //["rachel","phoebe"];
    let x=[b,"chandler"];
    console.log("rest "+ x); "rachel","phoebe","chandler"
    x=[...b,"chandler"];
    console.log(x); //["rachel","phoebe","chandler"]
}

friends("joey", "rachel","phoebe");

function mad()
{
    console.log("I'm mad");
}

function bad(a)
{
    a()
}
bad(mad);


function sum(a,b)
{
    console.log(a +b);
}
function sub(a, b)
{
    console.log(a -b);
}

function cal(x,y)
{
    x(5,4); // sum(5, 4)
    y(5,4); // sub(5, 4)
}

cal(sum, sub);


function fun()
{
    console.log("Hello World")
}
function fun2(a) { a()}
fun2(fun) // hello world


function x(a,b)
{
    return a + b;
}
function y(fun)
{
    let res = fun(3,4);
    console.log(res);
}

y(x);

let X= 20;
function add()
{
    let a=3, b=4;
    console.log(a+b)
}
console.log(X, add)// prints the add() definition

function add2()
{
    console.log("hello world");
}

console.log(add2);
add2();



let f= function()
{
    console.log("hi");
}

console.log(f())


//ecommerce scenerio

function addCart() 
{ 
    console.log("logic for adding count and price and items");
}
function cartPage(y)
{
    y()
}

function productPage(x)
{
    x()
}

productPage(addCart)
cartPage(addCart)

function sum23(a, b)
{
   return a + b; 
}

console.log(sum23())

let sum231 = function(a, b){
    return a + b; 
}
console.log(sum231())

const sum232 = (a, b) => a+b;
console.log(sum232())


// 1. create a function that returns even or odd based on number it receives

function numberIs(num)
{
    /*if(num%2 == 0)
        console.log(`Number ${num} is Even `);
    else
        console.log(`Number ${num} is Odd `);*/
    return (num%2 == 0) ?   console.log(`Number ${num} is Even `) : console.log(`Number ${num} is Odd `);
}

numberIs(5);

const evenOdd = (a) => (a % 2 == 0)? "even" : "odd";
console.log(evenOdd(5));

// 2.   write a function that adds the digits until you get a single digits
//578 ==> 5 + 7 + 8 ==> 20 => 2+0=>2
//982 ==> 9 + 8 + 2 ==> 19 ==> 1 + 9 => 10 => 1 + 0 ==> 1
function plusDigits(num)
{
    let sum=0;
    while(sum > 9 || num >0)
    {
        if (num === 0) {
            num = sum;
            sum = 0;
        }
        sum += (num%10);
        num = Math.floor(num/10);
    }
    //return sum;
    console.log(sum)
}

plusDigits(578);

function addDigits(num)
{
    console.log( (num > 0)? (num%9 ==0)? 9 : num%9 : 0 );
}
addDigits(578);




const sumOfDigits = (num) => (num > 0)? (num%9 ==0)? 9 : num%9 : 0;
console.log(sumOfDigits(578));


