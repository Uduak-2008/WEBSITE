const menu =
document.getElementById("menu");
const toggle =
document.getElementById("menuToggle");

toggle.addEventListener("click", () => {
    menu.hidden = !menu.hidden;
})