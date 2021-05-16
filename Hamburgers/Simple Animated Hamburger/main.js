const hamburgerBtn = document.querySelector(".menu-btn");

let isMenuOpen = false;

hamburgerBtn.addEventListener("click", () => {
  if (!isMenuOpen) {
    hamburgerBtn.classList.add("open");
    isMenuOpen = !isMenuOpen;
  } else {
    hamburgerBtn.classList.remove("open");
    isMenuOpen = !isMenuOpen;
  }
});
