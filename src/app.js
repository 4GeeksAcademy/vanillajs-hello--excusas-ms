/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};

function excuseGenerator() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let whoIndexRandom = Math.floor(Math.random() * who.length);
  let actionIndexRandom = Math.floor(Math.random() * action.length);
  let whatIndexRandom = Math.floor(Math.random() * what.length);
  let whenIndexRandom = Math.floor(Math.random() * when.length);
  return `${who[whoIndexRandom]}${action[actionIndexRandom]}${what[whatIndexRandom]}${when[whenIndexRandom]}`;
}
