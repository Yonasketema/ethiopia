const boxes = document.querySelectorAll(".img");
const title = document.querySelector(".main__title__desc");
const scrollimgs = document.querySelectorAll(".scroll-img");

window.addEventListener("scroll", checkBox);
let initialTranslation = 0;

function checkBox() {
  const triggerBottom = window.innerHeight;
  const scrollTop = window.scrollY;

  const titleTop = title.getBoundingClientRect().top;
  if (titleTop < triggerBottom) {
    title.classList.add("anime");
  }

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("rotate");
    } else {
      box.classList.remove("rotate");
    }
  });

  scrollimgs.forEach((img) => {
    const boxTop = img.getBoundingClientRect().top;

    if (boxTop) {
      img.style.transform = `translateY(-${
        initialTranslation + scrollTop / 100
      }%) `;
    } else {
      img.style.transform = `translateY(${
        initialTranslation + scrollTop / 100
      }%) `;
    }
  });
}
