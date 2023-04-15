const sideBar = document.getElementById("side-bar");
const content = document.querySelector(".content");

btn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});

content.addEventListener("click", () => {
  sideBar.classList.remove("active");
});
