/**
 * Events in js
 *
 * Click()
 * mouseover / Mouseout -->
 * mousedown / mouseUp  -->
 * keyUp / KeyDown  -->
 *
 */

// let buttons = document.querySelector(".click-btn");
// buttons.addEventListener("click", greet) // this is the correct way
// // buttons.addEventListener("click", greet()) // this is not a correct way because it call itself

// function greet() {
//   alert("Hello World");
// }

/*
==================== using arrow function ==========================
 */
// buttons.addEventListener('click', ()=>{
//     alert ("hello world from click back")
// })

// let btn1=document.querySelectorAll('.click-btn')[0];
// let btn2=document.querySelectorAll('.click-btn')[1];

// btn1.addEventListener ('click',()=>{
//     alert ("btn 1 is clicked")
// })
// btn2.addEventListener ('click',()=>{
//     alert ("btn 2 is clicked")
// });

// let buttons = document.querySelectorAll(".click-btn");

// buttons[0].addEventListener("click", () => {
//   alert("Button 1 clicked");
// });

// buttons[1].addEventListener("click", () => {
//   alert("Button 2 clicked");
// });

// let btns =document.querySelectorAll('.click-btn');
// btns.forEach(items => {
//     items.addEventListener('click',(e)=>{
//         let btnName =e.target.textContent;
//         console.log (`${btnName} is clicked`);
//     })

// });

// let btn = document.querySelector(".click-btn");
// btn.addEventListener("click", func);

// // here the function should be same in adddEvenListner
// btn.removeEventListener("click", fun);

// function func() {
//   console.log("hello1");
// }


let form= document.querySelector('form');
let div= document.querySelector('div');
let p= document.querySelector('p');
console.log (form);
console.log (p);
p.innerHTML ;
p.innerText='hello this is paragraph'