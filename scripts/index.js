var menuIcon = document.getElementById("menu__icon");
var menu = document.getElementById("menu");
menuIcon.addEventListener("click", () => {
  if (menu.className === "hidden") {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
