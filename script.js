const tabs = document.querySelectorAll(".tab");
const images = ["home.jpg", "work.jpg", "blog.jpg", "about.jpg"];
const image = document.querySelector(".image");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
    image.style.backgroundImage = `url('./images/${images[index]}')`;
  });
});
