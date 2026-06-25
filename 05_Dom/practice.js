// let heading = document.getElementById("title");
// console.log(heading); // by Id

// let msg = document.getElementsByClassName("message");
// console.log(msg); // By class

// let tag = document.getElementsByTagName("h1");
// console.log(tag); // By tagName

// let box = document.querySelector(".box");
// console.log(box); // By querySelector

// let head = document.querySelector("#Heading");
// console.log(head);

// let sel = document.querySelectorAll("h3");
// console.log(sel);

// let box2 = document.querySelector(".box2");
// console.log(box2);

// let fruit = document.querySelectorAll(".fruit");
// console.log(fruit);

// let list = document.getElementsByTagName("li");
// console.log(list);
// console.log (list[0].innerText)
// console.log (list[2].innerText)
// console.log (list[3].innerText)

// let box3 =document.querySelector(".box3");
// console.log (box3);

// let head =document.getElementById("title");
// console.log (head);

// let btn = document.querySelector("#btn");
// console.log (btn);

// let para =document.querySelectorAll("p");
// console.log(para);

// let box3 = document.getElementById("title");
// console.log(box3);
// box3.innerText = "welcome To Javascript Dom Manuplation ";

// let btn = document.getElementById("btn");
// console.log(btn);
// btn.innerText = "Hello click me ";

// let list = document.getElementsByClassName("box3");
// console.log(box3);
// box3.innerHTML = `
//  <ul>
//  <li>Apple</>
//  <li>mango</>
//  <li>orange</>

//  </ul>
//  `;

// let user = "Prathamesh to Learn and grow  ";
// document.getElementById("welcome").innerText = "welcome" + user;

// let score = 100;
// document.getElementById("score").innerText = "Your score :" + score;

// let a = document.getElementById("box").innerText;
// console.log(a);

// let b = document.getElementById("box").textContent;
// console.log(b);

// let head = document.getElementById("box").innerHTML;
// console.log(head);

//*********************** PRACTICE QUESTION *************************** */

// // 1. change text Heading
// function changeText() {
//   let change = document.getElementById("title");
//   change.innerHTML = "Welcome change";
// }

// // 2. Change Paragraph Color
// function changeColor() {
//   let para = document.getElementById("para");
//   para.style.color = "red";
//   para.style.backgroundColor = "lightblue";
// }

// // 3. Change Background Color

// function changeBg() {
//   document.body.style.color = "white";
//   document.body.style.backgroundColor = "black";
// }

// // 4. Read Value from Input

// function showName() {
//   let value = document.getElementById("name").value;
//   document.getElementById("result").innerText = value;
// }

// // 5. Hide an Element

// function hideElement() {
//   document.getElementById("text").style.display = "none";
// }

// // Creating element

// let text1 = document.getElementById("text1");

// let text = document.createElement("h1");
// text.innerHTML =" <h2>Laptop</h2>";
//  text.appendChild(text);
