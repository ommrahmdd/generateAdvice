let id = document.querySelector(".advice__title");
let txt = document.querySelector(".advice__txt");
let btn = document.querySelector(".advice__btn");

btn.addEventListener("click", (e) => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      let { slip } = data;
      console.log(slip);
      id.textContent = `Advice #${slip.id}`;
      txt.textContent = `"${slip.advice}"`;
    });
});

window.addEventListener("load", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      let { slip } = data;
      console.log(slip);
      id.textContent = `Advice #${slip.id}`;
      txt.textContent = `"${slip.advice}"`;
    });
});
