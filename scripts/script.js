const mainPage = document.querySelector(".blocHorizontal")
const container = document.querySelector(".container")
const cursorImg = document.querySelector(".imgProject")
const mainPage2 = document.querySelector(".mainPage")
const titleHover = document.querySelectorAll(".linkHover")
const date_elem = document.querySelector(".date")
const pointer_elem = document.querySelector(".mouse_invert")
const pointer_cursor_elem = document.querySelector(".mouse_invert_cursor")
const clickable_things_elem = document.querySelectorAll(".clickable")

const NBprojet = dataProjects.length
const title = document.querySelectorAll(".title")
const numberContainer = document.querySelectorAll(".numberContainer")
const number = document.querySelectorAll(".number")

let x = -50
let y = -50
let pageSelect = 0
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




function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}
function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}
function vmin(v) {
  return Math.min(vh(v), vw(v));
}

console.log(NBprojet);
for (i = 0; i < NBprojet; i++) {
  title[i+1].textContent = dataProjects[i].title
  number[i].textContent = i+1
  titleHover[i].dataset.number = i+1
}
mainPage.style.width = `${(NBprojet+2) * 100}vw`


function mouselog(event) {
  pointer_elem.style.opacity = "100%";
}


// for(i = 0; i<titleHover.length; i++)
// {
//   titleHover[i].addEventListener("mouseenter", function( event ) {
//     pageSelect = event.path[0].dataset.number - 1
//     sessionStorage.setItem("pageSelect", pageSelect);
//     pointer_elem.style.backgroundImage = `url("${dataProjects[(event.path[0].dataset.number) - 1].imgPath}")`;
//     mouselog(event)
//   })

//   titleHover[i].addEventListener("mouseleave", function( event ) {
//     pointer_elem.style.opacity = "0%";
//   })

//   titleHover[i].addEventListener("click", function( event ) {
//   })
// }



// const cursor = () => {
//   window.addEventListener('mousemove', (e) => { 
//       x = e.clientX
//       y = e.clientY 
//   })

//   clickable_things_elem.forEach(element => {
//       element.addEventListener("mouseenter", () => {
//           pointer_elem.classList.add("click")
//       })
//       element.addEventListener("mouseleave", () => {
//           pointer_elem.classList.remove("click")
//       })
//   });

//   const renderCursor = () => {
//       pointer_cursor_elem.style.transform = `translate(${x - 2.5}px, ${y - 2.5}px)`
//       pointer_elem.style.transform = `translate(${x - vmin(32)}px, ${y - vmin(18)}px)`
//       requestAnimationFrame(renderCursor)
      
//   }
//   requestAnimationFrame(renderCursor)
// }

// cursor()



let clicked = false

const cursor = document.querySelector('.cursor');

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
  if(container.scrollTop >= container.scrollHeight - window.innerWidth) {
      container.scrollTo(0, 1);
  }
  if(container.scrollTop <= 0) {
      container.scrollTo(0, container.scrollHeight - window.innerWidth);
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