//targeting all required element
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

let tasks = [];

btn.addEventListener("click", (e) => {
  //create Li and span element
  tasks.push(inp.value);
  let li = document.createElement("li");
  li.innerText = inp.value;
  let span = document.createElement("span");
  span.innerText = "x";
  li.append(span);
  console.log(li);
  ul.appendChild(li);
  inp.value = ""; // clear
  console.log(tasks);
  //   let li = document.createElement("li");
  //   let span = document.createElement("span");
  //   li.innerText = input.value;
  //   span.innerText = "X";
  //   li.append(span);
  //   console.log(li);
  //   ul.appendChild(li);
  //   tasks.push(input.value);
  //   console.log(tasks);
});
