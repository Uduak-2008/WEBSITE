const menu =
document.getElementById("menu");
const toggle =
document.getElementById("menuToggle");

toggle.addEventListener("click", () => {
    menu.hidden = !menu.hidden;
})
document.addEventListener("click",(e) => {
    if (!menu.contains(e.target) && e.target!== toggle) {
        menu.hidden = true;
    }
})