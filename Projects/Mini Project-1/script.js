const logoDiv = document.getElementById('logo')
const navBar = document.getElementById('navbar')
let i = 0

logoDiv.addEventListener("click", function(event) {
    if (i%2 === 0){
        navBar.style.display = "none"
        i++
    }
    else {
        navBar.style.display = "block"
        i++
    }
  });