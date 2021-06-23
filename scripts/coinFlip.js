const coinFlipButton = document.querySelectorAll('#coinFlipButton');
const outcome = document.querySelectorAll('.outcome');
const root = document.documentElement;
const NBcolors = colorTable.length

let randomNumber = 0;
let colorSelect = 0

sessionStorage.setItem("colorSelect", colorSelect);


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


for (i = 0; i < coinFlipButton.length; i++) {
  coinFlipButton[i].addEventListener('click', function() {
    for (j = 0; j < outcome.length; j++) {
      outcome[j].textContent = '';
      outcome[j].classList.toggle('flip');
    }
    
    setTimeout(function() {
      const randomNumberMem = randomNumber
      randomNumber = getRandomInt(NBcolors)
      while (randomNumber == randomNumberMem) {
        randomNumber = getRandomInt(NBcolors)
      }

      colorSelect = colorTable[randomNumber].colorName
      sessionStorage.setItem("colorSelect", colorSelect);

      outcome.src = './assets/imgs/Frog2.png';
      if (colorTable[randomNumber].colorName == "dark") {
        mainPage2.style.background = colorTable[randomNumber].backgroundColor
        for (j = 0; j < outcome.length; j++) {
          outcome[j].src = './assets/imgs/Frog2.png';
        }
      } else {
        for (j = 0; j < outcome.length; j++) {
          outcome[j].src = './assets/imgs/Frog1.svg';
        }
      }

      mainPage2.style.background = colorTable[randomNumber].backgroundColor
      root.style.setProperty('--themeBackgroundColor', colorTable[randomNumber].backgroundColor);
      root.style.setProperty('--textColor', colorTable[randomNumber].accentColor);

    }, 200);
      
  });
}

