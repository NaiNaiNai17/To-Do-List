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
  //attach eventListener on li
  li.addEventListener("click", (e) => {
    li.classList.toggle("done");
  });

  //span for each li
  let span = document.createElement("span");
  span.innerText = "x";
  span.addEventListener("click", (e) => {
    e.stopPropagation();
    ul.removeChild(li);
    // li.classList.remove(li);
  });
  li.append(span);
  console.log(li);
  ul.appendChild(li);
  inp.value = ""; // clear

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
