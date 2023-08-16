const logo = document.getElementById("logo");

window.addEventListener("scroll", function() {
    if (this.window.scrollY > 30) {
        logo.classList.add("logo")
        logo.classList.remove("menulogo")
    } else {
        logo.classList.add("menulogo")
        logo.classList.remove("logo")
    }
})