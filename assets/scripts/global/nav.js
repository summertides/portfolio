const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}

const borgerToggle = () => {
    var ham = document.getElementById("hamex");

    ham.classList.toggle('active');
}