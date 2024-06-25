const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("menu-ul")[0];
const navBarLinks2 = document.getElementsByClassName("sign-btns-ul")[0];
toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
  navBarLinks2.classList.toggle("active");
});
