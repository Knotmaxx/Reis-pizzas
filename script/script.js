const ul = document.querySelectorAll("ul")
const navbar = document.querySelector(".collapse")
const btnNav = document.querySelector(".navbar-toggler")
const img_about = document.querySelector(".about-img")

function FecharMenu() {
  if (getComputedStyle(btnNav).display == "block") {
    btnNav.click()
  }
}

window.addEventListener("load" , function(){
  if(window.innerWidth <= 767){
    img_about.src = "imgs/fundo/fundo about/japanese-mobile.jpg"
    
  }else{
    img_about.src = "imgs/fundo/fundo about/japanese-3723045_1920.jpg"
  }
})

window.addEventListener("resize", function() {
  if(window.innerWidth <= 767){
    img_about.src = "imgs/fundo/fundo about/japanese-mobile.jpg"
    
  }else{
    img_about.src = "imgs/fundo/fundo about/japanese-3723045_1920.jpg"
  }
})



ul.forEach(li => {
  li.addEventListener("click",FecharMenu)
})



