
console.log("pattern start");
/*for(let i=1;i<=5;i++)
{    
    for(let j=1;j<=i;j++)
    {
        console.log(j+ " ");
    }
}*/

let pattern="";
for(let i=1;i<=5;i++)
{    
    for(let j=1;j<=i;j++)
    {
        pattern += " " + j;
    }
    pattern+= "\n";
}
console.log(pattern);


console.log("pattern end");

let x=2;
switch(x)
{
    case 2: console.log("I'm 2"); break;
    case '2': console.log("I'm not 2"); break;
    default:
        console.log("error");
}

x=2;
if(x>3)
    if(x<5)
        console.log("Good");
    else 
        console.log("not good");

if(0==false)
{
    console.log("Good");
}
else{
    console.log("bad");
}


x=5;
let y='raj';
console.log(5-'raj');
console.log(typeof( x-y));


let arr =[5,4,8,2,1];

arr = [25,4,8,23,1];
let fh = 0, sh = 0;

for (let num of arr) {
    if (num > fh) {
        sh = fh;
        fh = num;
    } else if (num > sh && num < fh) {
        sh = num;
    }
}
console.log(fh, sh);


arr = [15,4,8,43,1];
fh = 0, sh = 0;
for(i=0;i<=arr.length;i++)
{
    if (arr[i] > fh) {
        sh = fh;
        fh = arr[i];
    } else if (arr[i] > sh && arr[i] < fh) {
        sh = arr[i];
    } 
}
console.log(fh, sh);

