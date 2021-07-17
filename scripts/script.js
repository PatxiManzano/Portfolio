const container = document.querySelector(".container")
const cursorImg = document.querySelector(".imgProject")
const mainPage2 = document.querySelector(".mainPage")
const titleHover = document.querySelectorAll(".linkHover")
const date_elem = document.querySelector(".date")
const pointer_elem = document.querySelector(".mouse_invert")
const pointer_cursor_elem = document.querySelector(".mouse_invert_cursor")
const cursor = document.querySelector('.cursor');
const textCursor = document.querySelector('.textCursor');
const scrollBtn = document.querySelector('.scrollBtn');

const clickable_things_elem = document.querySelectorAll(".clickable")
const title = document.querySelectorAll(".title")
const numberContainer = document.querySelectorAll(".numberContainer")
const number = document.querySelectorAll(".number")

let x = -50
let y = -50
let pageSelect = 0
let clicked = false
sessionStorage.setItem("pageSelect", pageSelect);

let colorSelectSave = sessionStorage.getItem("colorSelectSave");
console.log(colorSelectSave);

if (colorSelectSave != null) {
  const backgroundColor = colorTable.find(search => search.colorName == colorSelectSave ).backgroundColor
  const accentColor = colorTable.find(search => search.colorName == colorSelectSave ).accentColor
  mainPage2.style.background = backgroundColor
  root.style.setProperty('--themeBackgroundColor', backgroundColor);
  root.style.setProperty('--textColor', accentColor);
}

function mouselog(event) {
  pointer_elem.style.opacity = "100%";
}


document.addEventListener('mousemove', e => {
    if (clicked == false) {
      cursor.style.top = `${e.pageY - 0}px`
      cursor.style.left = `${e.pageX - 0}px`
    }
})  


for(i = 0; i<titleHover.length; i++) {
  const location = titleHover[i].getAttribute('data-number');
  titleHover[i].addEventListener("mouseenter", () => {
    console.log(location);
    cursor.classList.add('hovered');
    numberContainer[location - 1].classList.remove("textStroke")
    numberContainer[location - 1].classList.add("textFill")
    title[location].classList.add("textStroke")
    title[location].classList.remove("textFill")
    cursor.style.backgroundImage = `url("${dataProjects[location - 1].imgPath}")`;
    
    pageSelect = location - 1
    sessionStorage.setItem("pageSelect", pageSelect);
    // mouselog(event)
  })
  
  titleHover[i].addEventListener("mouseleave", () => {
    numberContainer[location - 1].classList.add("textStroke")
    numberContainer[location - 1].classList.remove("textFill")
    title[location].classList.remove("textStroke")
    title[location].classList.add("textFill")
    if (clicked == false) {
      
      cursor.classList.remove('hovered');
      cursor.style.backgroundImage = `none`;
    }
  })

  titleHover[i].addEventListener("click", () => {
    cursor.classList.add('clicked');
    numberContainer[location - 1].classList.add("textStroke")
    numberContainer[location - 1].classList.remove("textFill")
    title[location].classList.remove("textStroke")
    title[location].classList.add("textFill")
    
    clicked = true
    cursor.style.top = `50%`
    cursor.style.left = `50%`
    setTimeout(function(){ 
      window.location.href = "./page.html";
    }, 700);
  })
}













// INFINITE SCROLL

container.addEventListener("scroll", () => {
  if (container.scrollTop >= 60 && container.scrollTop <= container.scrollHeight - window.innerWidth - 60) {
    scrollBtn.classList.add('scroll');
      setTimeout(function(){
        // scrollBtn.style.display = "none"
      }, 1000);    
  }
  if(container.scrollTop >= container.scrollHeight - window.innerWidth) {
    container.scrollTo(0, 1);
  }
  if(container.scrollTop <= 0) {
    container.scrollTo(0, container.scrollHeight - window.innerWidth)
  }
})


function Scrolldown() {
  container.scrollTo(0,1); 
}

window.onload = Scrolldown()


// container.addEventListener("wheel", function( event ) {
//     if (event.deltaX > 4) {
//       container.style.scroll
//       container.scrollTo({
//         top: 0,
//         left: container.scrollTop + event.deltaX*5,
//         behavior: 'smooth'
//       });
//       // container.scroll(0,container.scrollTop + event.deltaX*5); 
//     }
// });


