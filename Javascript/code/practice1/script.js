let inp = document.getElementById('inp');
let para = document.getElementById('msg');

let vowels = ['a', 'e', 'i', 'o', 'u'];
let vCount =0; consCount =0;

function getLength()
{
    if(inp.value != "")
    {
        let len = inp.value.length;
        para.textContent = `The total number of characters : ${len}`;

        for(let i=0;i < len ; i++)
        {
            if(vowels.includes(inp.value[i].toLowerCase()))
                vCount++;
            else
                consCount++;
        }

        para.textContent += ` The total number of vowels are  ${vCount} and the number of consonants are ${consCount}`;
        para.style.color = 'black'
    }
    else
    {
        para.textContent = " The input filed is required";
        para.style.color = "red";
    }

}


let inp1 = document.getElementById('inp1')
let inp2 = document.getElementById('inp2')
let tot_p = document.getElementById('tot_p');

function add()
{
    if(inp1.value != "" && inp2.value != "")
    {
        tot_p.textContent = +inp1.value + +inp2.value;
        tot_p.style.color = "black";
    }
    else
    {
        tot_p.textContent = "Please provide the input values";
        tot_p.style.color = "red";
    }
}


const colors = ['red','green','yellow','voilet','blue'];
function changeBg()
{
   const rind = Math.floor(Math.random()*5)
    document.body.style.background = colors[rind];
}