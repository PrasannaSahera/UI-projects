
function changeBg(flag)
{
    if(flag)
    {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";        
        document.body.style.background = bgColor;
    }
    else
    {                 
        document.body.style.background =  "white";
    }
}

/*Modal box */
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* Sliders */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


/* hamburger */
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)


/*Accordian */
const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item,index)=>{
    let header = item.querySelector("header");
    header.addEventListener("click", ()=>{
        item.classList.toggle("is-open");

        let description = item.querySelector(".accordion-content-description");
        if(item.classList.contains("is-open")){
            // Scrollheight property return the height of
            // an element including padding
            description.style.height=`${description.scrollHeight}px`; 
            item.querySelector("i").classList.replace("fa-plus","fa-minus");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus","fa-plus");
        }
        // function to pass the index number of clicked header
        removeOpenedContent(index); 
    })
})

function removeOpenedContent(index){
    accordionContent.forEach((item2,index2)=>{
        if(index != index2){
            item2.classList.remove("is-open");
            let descrip = item2.querySelector(".accordion-content-description");
            descrip.style.height="0px";
            item2.querySelector("i").classList.replace("fa-minus","fa-plus");
        }
    })
}