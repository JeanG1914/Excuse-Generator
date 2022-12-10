/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function randomExcuses(array) {
  let excuses;
  excuses = array[Math.floor(Math.random() * array.length)];
  return excuses;
}

function excuseGenerator(who, action, what, when) {
  let excuse = "";
  excuse =
    randomExcuses(who) +
    " " +
    randomExcuses(action) +
    " " +
    randomExcuses(what) +
    " " +
    randomExcuses(when) +
    " ";
  return excuse;
}

let excuse = excuseGenerator(who, action, what, when);

document.getElementById("excuse").innerHTML = excuse;
