



// INFINITE SCROLL
// window.scrollTo(0, 50);

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    console.log(document.documentElement.scrollHeight - window.innerHeight);
    console.log(document.documentElement.scrollHeight);
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) {
        console.log('raclette');
        window.scrollTo(0, 1);
    }
    if(window.scrollY <= 0) {
        console.log('lourde');
        window.scrollTo(0, document.documentElement.scrollHeight - window.innerHeight);
    }
})

  

function Scrolldown() {
    window.scrollTo(0,1); 
}

window.onload = Scrolldown()