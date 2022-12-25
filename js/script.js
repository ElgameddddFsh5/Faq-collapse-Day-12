let box = document.querySelectorAll(".box"),
  exit = document.querySelectorAll(".exit"),
  DropDown = document.querySelectorAll(".dropdown"),
  Answer = document.querySelectorAll(".answer");

DropDown.forEach((e, ind) => {
  e.addEventListener("click", (s) => {
    Answer[ind].classList.remove("notActive");
    box[ind].classList.add("ans");
    exit[ind].classList.add("active");
    DropDown[ind].classList.add("notActive");
  });
});
exit.forEach((e, ind) => {
  e.addEventListener("click", (s) => {
    Answer[ind].classList.add("notActive");
    box[ind].classList.remove("ans");
    exit[ind].classList.remove("active");
    DropDown[ind].classList.remove("notActive");
  });
});
