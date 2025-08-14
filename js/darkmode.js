console.clear();
const DarkModeBtn = document.querySelector('[data-js="darkmode"]');

DarkModeBtn.addEventListener("click", () => {
  bodyelement.classList.toggle("dark");
});
