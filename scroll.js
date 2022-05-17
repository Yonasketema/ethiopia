const boxes = document.querySelectorAll(".img");
const scrollimgs = document.querySelectorAll(".scroll-img");

window.addEventListener("scroll", checkBox);
let initialTranslation = 0;

function checkBox() {
  const triggerBottom = window.innerHeight;
  const scrollTop = window.scrollY;

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

const cards = document.querySelectorAll(".scroll-img");
const letters = document.querySelector(".letters");

let scrollAmount = 10;
let oldScrollAmount = 0;
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight;
  const scrollTop = window.scrollY;
  const boxTop = letters.getBoundingClientRect().top;
  const boxBottom = letters.getBoundingClientRect().bottom;

  if (boxTop < triggerBottom) {
    if (boxBottom < triggerBottom) {
      return scrollAmount * 0.09;
    }
    cards.forEach((card) => {
      if (scrollTop + window.innerHeight > card.offsetTop) {
        if (scrollTop > oldScrollAmount) {
          scrollAmount--;
        } else if (scrollTop < oldScrollAmount) {
          scrollAmount++;
        }

        card.style.transform = `translateY(${scrollAmount * 0.09}%)`;
      }
    });
    oldScrollAmount = scrollTop;
  }
});
