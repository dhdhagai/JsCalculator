const input = document.getElementById("display");
const one = document.getElementById(1);
const two = document.getElementById(2);
const three = document.getElementById(3);
const four = document.getElementById(4);
const five = document.getElementById(5);
const six = document.getElementById(6);
const seven = document.getElementById(7);
const eight = document.getElementById(8);
const nine = document.getElementById(9);
const zero = document.getElementById(0);
const equal = document.getElementById("equ");
const add = document.getElementById("plu");
const sub = document.getElementById("min");
const mult = document.getElementById("mul");
const divi = document.getElementById("dev");
const del = document.getElementById("del");
let input_val = input.value;
let inp_val;
input_val = 0;
//Update Display When Buttons Clicked
one.addEventListener("click", function () {
  input_val = input_val + "1";
  input.innerHTML = input_val;
});
two.addEventListener("click", function () {
  input_val = input_val + "2";
  input.innerHTML = input_val;
});
three.addEventListener("click", function () {
  input_val = input_val + "3";
  input.innerHTML = input_val;
});
four.addEventListener("click", function () {
  input_val = input_val + "4";
  input.innerHTML = input_val;
});
five.addEventListener("click", function () {
  input_val = input_val + "5";
  input.innerHTML = input_val;
});
six.addEventListener("click", function () {
  input_val = input_val + "6";
  input.innerHTML = input_val;
});
seven.addEventListener("click", function () {
  input_val = input_val + "7";
  input.innerHTML = input_val;
});
eight.addEventListener("click", function () {
  input_val = input_val + "8";
  input.innerHTML = input_val;
});
nine.addEventListener("click", function () {
  input_val = input_val + "9";
  input.innerHTML = input_val;
});
zero.addEventListener("click", function () {
  input_val = input_val + "0";
  input.innerHTML = input_val;
});

equal.addEventListener("click", function () {
  input_val = eval(input_val);
  input.innerHTML = input_val;
});

add.addEventListener("click", function () {
  if (
    input_val.slice(input_val.length - 1, input_val.length) == "-" ||
    input_val.slice(input_val.length - 1, input_val.length) == "*" ||
    input_val.slice(input_val.length - 1, input_val.length) == "/"
  ) {
    input_val = input_val.slice(0, input_val.length - 1);
    input_val = input_val + "+";
    console.log(input_val);
  } else {
    input_val = input_val + "+";
  }

  input.innerHTML = input_val;
});
sub.addEventListener("click", function () {
  if (
    input_val.slice(input_val.length - 1, input_val.length) == "+" ||
    input_val.slice(input_val.length - 1, input_val.length) == "*" ||
    input_val.slice(input_val.length - 1, input_val.length) == "/"
  ) {
    input_val = input_val.slice(0, input_val.length - 1);
    input_val = input_val + "-";
    console.log(input_val);
  } else {
    input_val = input_val + "-";
  }

  input.innerHTML = input_val;
});
mult.addEventListener("click", function () {
  if (
    input_val.slice(input_val.length - 1, input_val.length) == "-" ||
    input_val.slice(input_val.length - 1, input_val.length) == "+" ||
    input_val.slice(input_val.length - 1, input_val.length) == "/"
  ) {
    input_val = input_val.slice(0, input_val.length - 1);
    input_val = input_val + "*";
    console.log(input_val);
  } else {
    input_val = input_val + "*";
  }

  input.innerHTML = input_val;
});
divi.addEventListener("click", function () {
  if (
    input_val.slice(input_val.length - 1, input_val.length) == "-" ||
    input_val.slice(input_val.length - 1, input_val.length) == "*" ||
    input_val.slice(input_val.length - 1, input_val.length) == "+"
  ) {
    input_val = input_val.slice(0, input_val.length - 1);
    input_val = input_val + "/";
    console.log(input_val);
  } else {
    input_val = input_val + "/";
  }

  input.innerHTML = input_val;
});
del.addEventListener("click", function () {
  input_val = input.innerHTML;
  input_val = input_val.slice(0, input_val.length - 1);
  input.innerHTML = input_val;
});
