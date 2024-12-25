const text = document.querySelector(".container h1");
const img = document.querySelector(".container img");
const reloadBtn = document.querySelector(".container button");

let count = 10;
let intervalId;

function addCountOpacity() {
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    if (count >= 100) {
      clearInterval(intervalId);
    } else {
      count += 3;
      text.textContent = `${count}%`;
      img.style.opacity = count / 100;
    }
  }, 50);
}

reloadBtn.addEventListener("click", () => {
  count = 10;
  text.textContent = `${count}%`;
  img.style.opacity = count / 100;
  addCountOpacity();
});

addCountOpacity();
