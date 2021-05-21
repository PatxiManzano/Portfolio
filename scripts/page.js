const body = document.querySelector("body")
const imgProject = document.querySelector(".imgProject > img")
const pageContainer = document.querySelector(".pageContainer")
const article = document.querySelector(".pageContainer article")
const title = document.querySelector(".pageContainer .title")
const mainPage = document.querySelector(".pojectPage")
const number = document.querySelector(".number")
const scrollBtn = document.querySelectorAll(".scrollBtn")
const root = document.documentElement;


let p = document.createElement("p");
let div = document.createElement("div");
let img = document.createElement("img");
let newArticle = document.createElement("article");

let pageSelect = sessionStorage.getItem("pageSelect");
let colorSelect = sessionStorage.getItem("colorSelect");
console.log(colorSelect);

const tableProjects = Object.keys(dataProjects[pageSelect])

// sessionStorage.setItem("colorSelectSave", colorSelect);


if (colorSelect != 0) {
  const backgroundColor = colorTable.find(search => search.colorName == colorSelect ).backgroundColor
  const accentColor = colorTable.find(search => search.colorName == colorSelect ).accentColor
  mainPage.style.background = backgroundColor
  root.style.setProperty('--themeBackgroundColor', backgroundColor);
  root.style.setProperty('--textColor', accentColor);
}


function deletePage() {
  article.innerHTML = '';
}

function loadPage() {
  console.log(article);
  for(i = 0; i< tableProjects.length; i++) {
    console.log(pageSelect);
    if (i < 2) {
      title.textContent = dataProjects[pageSelect].title
      imgProject.src = dataProjects[pageSelect].imgPath
      number.textContent = parseInt(pageSelect) + 1
    }
    else {
      if (tableProjects[i].includes("title")) {
        const h3 = document.createElement("h3");
        h3.innerHTML= dataProjects[pageSelect][tableProjects[i]];
        h3.setAttribute("class","articleTitle");
        article.appendChild(h3);
      }
      if (tableProjects[i].includes("text")) {
        const p = document.createElement("p");
        p.innerHTML= dataProjects[pageSelect][tableProjects[i]];
        p.setAttribute("class","articleText");
        article.appendChild(p);
      }
      if (tableProjects[i].includes("imgPath")) {
        const div = document.createElement("div");
        const img = document.createElement("img");
        div.setAttribute("class","articleImg");
        img.src = dataProjects[pageSelect][tableProjects[i]];
        div.appendChild(img);
        article.appendChild(div);
      }
    }
  }
}


function changePage(change) {
  if (change == "previous") {
    if (pageSelect > 0) {
      pageSelect = parseInt(pageSelect) - 1
    } else {
      pageSelect = dataProjects.length - 1
    }
  } else if (change == "following") {
    if (pageSelect < dataProjects.length - 1) {
      pageSelect = parseInt(pageSelect) + 1
    } else {
      pageSelect = 0
    }
  }
}

for (let i = 0; i < scrollBtn.length; i++) {
    scrollBtn[i].addEventListener("click", () => {
      body.classList.toggle("transition");
      body.classList.remove("right");
      body.classList.remove("left");
      if (i == 0) {
        body.classList.add("left");
        setTimeout(function(){
          changePage("previous")
          deletePage()
          loadPage()
          body.classList.toggle("transition");
        }, 500);
      } else if (i == 2) {
        body.classList.add("right");
        setTimeout(function(){
          changePage("following")
          deletePage()
          loadPage()
          body.classList.toggle("transition");
        }, 500);
      }
      setTimeout(function(){

      }, 800);
    });
}



loadPage()