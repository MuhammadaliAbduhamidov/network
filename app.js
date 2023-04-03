window.addEventListener("DOMContentLoaded", () => {
  const prevIcon = document.querySelector(".prev-icon");
  const nextIcon = document.querySelector(".next-icon");
  const card = document.querySelectorAll(".doctors-card");
  const menu = document.querySelector(".menu");
  const back = document.querySelector(".back");
  const navbar = document.querySelector(".navbar-btn");

  menu.addEventListener("click", (e) => {
    navbar.style.transform = `translateX(0)`;
    back.style.display = "block";
    menu.style.display = "none";
  });
  back.addEventListener("click", (e) => {
    navbar.style.transform = `translateX(-100%)`;
    menu.style.display = "block";
    back.style.display = "none";
  });

  let offset = 0;

  nextIcon.addEventListener("click", () => {
    prevIcon.style.background = "#0177F9";
    offset = offset - 305;
    if (offset < -610) {
      offset = -915;
      nextIcon.style.background = "#97CEE8";
    }
    console.log(offset);

    card.forEach((item) => {
      item.style.transform = `translateX(${offset}px)`;
    });
  });
  prevIcon.addEventListener("click", () => {
    nextIcon.style.background = "#0177F9";
    offset = offset + 305;
    if (offset > -305) {
      offset = 0;
      prevIcon.style.background = "#97CEE8";
    }
    console.log(offset);

    card.forEach((item) => {
      item.style.transform = `translateX(${offset}px)`;
    });
  });
});
