/*console.log(document);
console.log(document.getElementsByTagName('h1')[0]);
document.getElementsByTagName('h1')[0].textContent = "Bye World";

document.getElementsByTagName('p')[0].textContent = "Helloo";

document.getElementsByClassName('bujji')[1].textContent= "😂"; 

document.getElementById('chitti').textContent = "bye bye";

document.querySelector('.bujji').textContent = "good morning";*/


// select h1 using classname and change the text
//document.getElementsByClassName('bujji')[0].textContent = "Welcome";

function increase()
{
    let para = document.getElementById('chitti'); 
    para.textContent= +para.textContent + 1;
}


let para = document.getElementById('count');
let inpbox = document.getElementById('inp');
let c=0;
function incr()
{
    if(c < 20)
    {
        c++;
        //para.textContent = c;
       // para.innerHTML = `<b>${c}</b>`;
        para.textContent = inpbox.value;
        para.style.color="red";
        para.style.backgroundColor ="green";
        para.style.animationName = "slideDown";    
    }
    else
    {
        alert("max limit reached")
    }
}

function decr()
{
    if(c > 0)
    {
        c--;
        para.textContent =c;
    }
    else
    {
        alert("negative values are not accepted")
    }
}

function reset()
{
    c=0;
    para.textContent = c;
}



