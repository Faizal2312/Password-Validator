const input = document.querySelector(".input");
const lower = document.querySelector(".limg");
const upper = document.querySelector(".uimg");
const number = document.querySelector(".nimg");
const eight = document.querySelector(".eimg");
const special = document.querySelector(".simg");
const see = document.querySelector(".see");
console.log(see);
let seen = false;

see.addEventListener("click", () => {
  if (seen) {
    input.type = "password";
    seen = false;
    see.src = "icon\\hide.png";
  } else {
    input.type = "text";
    seen = true;
    see.src = "icon\\view.png";
  }
});

var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
function validate() {
  console.log(input.value);
  const val = input.value;

  console.log();
  if (val.match(/[a-z]/)) {
    lower.src = "icon\\check-mark.png";
  } else {
    lower.src = "icon\\x-mark.png";
  }
  if (val.match(/[A-Z]/)) {
    upper.src = "icon\\check-mark.png";
  } else {
    upper.src = "icon\\x-mark.png";
  }
  if (val.match(/[0-9]/)) {
    number.src = "icon\\check-mark.png";
  } else {
    number.src = "icon\\x-mark.png";
  }
  if (val.match(format)) {
    special.src = "icon\\check-mark.png";
  } else {
    special.src = "icon\\x-mark.png";
  }

  if (val.length >= 8) {
    eight.src = "icon\\check-mark.png";
  } else {
    eight.src = "icon\\x-mark.png";
  }
  //
}
