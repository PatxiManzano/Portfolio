
const mainPage = document.querySelector(".blocHorizontal")
const NBprojet = dataProjects.length

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
  
  

  
  function firstSlide() {
    const divSlide = document.createElement("div");
    const divFirst = document.createElement("div");
    const h1Title = document.createElement("h1");
    const div = document.createElement("div");
    const spanWeb = document.createElement("span");
    const button = document.createElement("button");
    const img = document.createElement("img");
    const spanDesigner = document.createElement("span");
    divSlide.setAttribute("class","slide");
    divFirst.setAttribute("class","firstSLide");
    h1Title.setAttribute("class","title column");
    spanWeb.textContent = "Web"
    button.setAttribute("id","coinFlipButton");
    img.setAttribute("class","outcome");
    img.setAttribute("src","./assets/imgs/Frog1.svg");
    img.setAttribute("alt","Frog icon");
    spanDesigner.textContent = "Designer"
    button.appendChild(img);
    div.appendChild(spanWeb);
    div.appendChild(button);
    h1Title.appendChild(div);
    h1Title.appendChild(spanDesigner);
    divFirst.appendChild(h1Title);
    divSlide.appendChild(divFirst);
    mainPage.appendChild(divSlide);
  }
  
  firstSlide()
  for (i = 0; i < NBprojet; i++) {
    const divSlide = document.createElement("div");
    const divHover = document.createElement("div");
    const h2Title = document.createElement("h2");
    const divNbContain = document.createElement("div");
    const spanNo = document.createElement("span");
    const spanNumber = document.createElement("span");
    const divDash = document.createElement("div");
    divSlide.setAttribute("class","slide rb");
    divHover.setAttribute("class","linkHover");
    divHover.dataset.number = i+1
    h2Title.setAttribute("class","title textFill");
    h2Title.textContent = dataProjects[i].title
    divNbContain.setAttribute("class","numberContainer textStroke");
    spanNo.textContent = "N°"
    spanNumber.setAttribute("class","number");
    spanNumber.textContent = i+1
    divDash.setAttribute("class","longDash");
    divNbContain.appendChild(spanNo);
    divNbContain.appendChild(spanNumber);
    divNbContain.appendChild(divDash);
    divHover.appendChild(h2Title);
    divHover.appendChild(divNbContain);
    divSlide.appendChild(divHover);
    mainPage.appendChild(divSlide);
  }
  firstSlide()
  
  mainPage.style.width = `${(NBprojet+2) * 100}vw`
  