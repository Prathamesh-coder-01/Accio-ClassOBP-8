// // let heading = document.createElement("h1");
// // const { createElement } = require("react");
// // heading.textContent = "Hello javascript learner";
// // document.getElementById("container").append(heading);

// // creating h1
// let heading = document.createElement("h1");
// heading.textContent = "welcome to learn javascript ";
// document.getElementById("container").append(heading);

// // // creating p
// let para = document.createElement("p");
// para.textContent = "Hello how much js do you know lets learn ";
// document.getElementById("container").append(para);

// // creating button
// let btn = document.createElement("button");
// btn.textContent = "submit";
// document.getElementById("container").append(btn);

// // creating li
// let list = document.createElement("li");
// list = textContent = "Apple";
// document.getElementById("list").append(list);

// // creating li multiple element
// let fruits = ["Kiwi", "Mango", "Banana", "orange"];
// let lists = document.getElementById("list");
// for (let fruit of fruits) {
//   let li = document.createElement("li");
//   li.textContent = fruit;
//   lists.append(li);
// }

// // creating msg :
// let msg = document.createElement("p");
// msg.textContent = "this is a paragraph tag ";
// document.getElementById("chat").append(msg);

// //
// // let carts = ["Laptop", "Mobile", "car", "Bike"];
// // let cartlist = document.getElementById("cart");

// // for (let cart of carts) {
// //   let lis = document.createElement("li");
// //   lis.textContent = cart;
// //   cartlist.append(lis);
// // }


//Creating and append the child
let container = document.getElementById("container");
let paragraph = document.createElement("h1");
paragraph.textContent = "Hello let's learn the javascript .";
container.appendChild(paragraph);


// prepend added to the node
let list = document.getElementById("list");
let li = document.createElement("li");
li.innerHTML = "Apple";
list.prepend(li); // add to the present first node


//
let para = document.getElementById("second");
let p = document.createElement("p");
p.textContent = "This is the First paragraph From the dom";
para.before(p); //


// 
let ids = document.getElementById("second");
let h = document.createElement("h1");
h.textContent = "This is the Heading tag ";
ids.before(h);
