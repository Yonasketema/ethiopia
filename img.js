const parallaxes = document.querySelectorAll(".parallax");

const calculateRangeValue = (oldMin, oldMax, newMin, newMax, oldValue) => {
  const oldRange = oldMax - oldMin;
  const newRange = newMax - newMin;
  return ((oldValue - oldMin) * newRange) / oldRange + newMin;
};

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  parallaxes.forEach((parallax, i) => {
    if (scrollTop + window.innerHeight / 2 > parallax.offsetTop) {
      const oldMin =
        parallax.offsetTop < window.innerHeight / 2
          ? parallax.offsetTop
          : parallax.offsetTop - window.innerHeight / 2;
      const oldMax = oldMin + parallax.offsetHeight;
      const yPosition = calculateRangeValue(oldMin, oldMax, 0, -50, scrollTop);
      parallax.style.backgroundPosition = `center ${yPosition}px`;
    }
  });
});
