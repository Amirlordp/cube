const btnsContaner = document.querySelector(".contanerbtn");
const mods = document.querySelectorAll(".butens");
const mode1 = document.querySelector(".btn1");
const mode2 = document.querySelector(".btn2");
const contaner = document.querySelector(".boxparenret");
const boxes = document.querySelectorAll(".box");
const backdoor = document.querySelector(".backdoor");
// for removing the items and replase
const remover = function () {
  contaner.classList.remove("hide");
  backdoor.classList.remove("hide");
  btnsContaner.classList.add("hide");
};
// to relode the page and reset the functionality
const backward = function () {
  backdoor.addEventListener("click", function (e) {
    e.preventDefault();
    location.reload();
    backdoor.classList.add("hide");
    btnsContaner.classList.remove("hide");
    contaner.classList.add("hide");
  });
};
// to choose betwen the mods
const modschanger = function () {
  mods.forEach(function (value, index) {
    value.addEventListener("click", function (e) {
      if (e.target.classList.contains("btn1")) {
        remover();
        manual();
      } else {
        remover();
        Automatic();
      }
    });
  });
};

//  ---------------- manual model ----------------------
const manual = () => {
  boxes.forEach(function (value, index) {
    const colorchanger = function () {
      const x = (max, min) => {
        return Math.floor(Math.random() * max) + min;
      };
      value.style.backgroundColor = `rgb(${x(255, 1)},${x(255, 1)},${x(
        255,
        1
      )})`;
      value.style.borderRadius = 10 + "px";
    };
    value.addEventListener("mouseover", colorchanger);
    value.addEventListener("mouseout", function () {
      value.style.borderRadius = Math.floor(Math.random() * 100) + 10 + "px";
    });
  });
};

//  ---------------- Automatic model -------------------

const Automatic = () => {
  boxes.forEach(function (value, index) {
    const colorchanger = function () {
      // to get accsess the color random foreath of the box's
      const x = (max, min) => {
        return Math.floor(Math.random() * max) + min;
      };
      // for set the time
      const timer = 1000;
      setInterval(
        () =>
          // colorise the cube's
          (value.style.backgroundColor = `rgb(${x(255, 1)},${x(255, 1)},${x(
            255,
            1
          )})`),
        timer
      );

      setInterval(
        () =>
          // set the redus for shape shifting
          (value.style.borderRadius =
            Math.floor(Math.random() * 100) + 10 + "px"),
        timer
      );
      // setInterval(()=> value.style.borderRadius = 10 + "px" , 1000)
    };
    colorchanger();
  });
};
// calling the metods to working as fuck yaaaaaaa🤞
modschanger();
backward();
