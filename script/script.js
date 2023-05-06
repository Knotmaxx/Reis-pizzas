const ul = document.querySelectorAll("ul")
const navbar = document.querySelector(".collapse")
const btnNav = document.querySelector(".navbar-toggler")

ul.forEach(li => {
  li.addEventListener("click",FecharMenu)
})

function FecharMenu() {
  if (getComputedStyle(btnNav).display == "block") {
    btnNav.click()
  }
}