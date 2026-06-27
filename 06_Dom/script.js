// // console.log (document.querySelector("#elem"))

// // console.log(document.getElementById('ele'));
// // console.log(document.getElementsByClassName('classElement'));
// // console.log(document.getElementsByClassName('classElement')[2]);

// // how to put coller using js
// // let element = document.getElementById('element');
// // element.style.color ="blue";
// // element.style.backgroundColor ="aqua";


// // =============================  closest   =============================


// // let chapter = document.querySelector(".chapter");
// // console.log(chapter);    // chapter returns the first element
// // console.log(chapter.closest('.book'));    // book element
// // console.log(chapter.closest('.div'));    // book element
// // console.log(chapter.closest('.Contents'));  // Contents element
// // console.log (chapter.closest('h1'));   //null because it is not a ancestor

// // console.log(document.querySelector(".Contents").id); // gives the present id
// // console.log(document.querySelector(".Contents").className); //gives the present classes

// // let Contents = document.querySelector(".Contents"); // using this method we can change the id name using js
// // Contents.id = "newId";  //newID given
// // console.log(document.querySelector(".Contents").id);

// // Contents.className ='wraper newClass'
// // console.log (document.querySelector('.wraper').className)

// // let img =document.querySelector('.img')
// // img.src= ""
// // img.alt ="Dog Image "

// //=========== classList =============
// // classList is used to add or change the new class

// // console.log(document.querySelector(".Contents").classList);
// // let Contents = document.querySelector(".Contents").classList;
// // Contents.add("newClass"); // add classname
// // Contents.remove("newClass"); // remove classname
// // Contents.toggle("active"); // toggle classname
// // console.log(Contents.contains("container")); // check the className exist  retue (True or false )

// /*

// - getAttibute
// - setAttribute

// */

// // let img = document.querySelector("img");
// // console.log(img.getAttribute("src"));
// // console.log(img.getAttribute("alt"));

// // img.setAttribute("src" ,"https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*");
// // img.setAttribute("alt", "DOG IMAGE ");

// /*

// using this method we can make the changes in the html
// like (p , div , heading , etc)
// -  appendChild --> this add the element in the HTML

// */
// const boxcontainer = document.querySelector(".box-container");

// let div = document.createElement("div");
// div.style.height = "300px";
// div.style.width = "300px";
// div.style.backgroundColor = "red";
// div.className = "box";
// boxcontainer.appendChild(div);

// let p = document.createElement("p");
// p.textContent = "hello this is a paragraph tag  ";
// boxcontainer.appendChild(p);

// let fruits = ["apple", "banana", "kiwi", "orange"];

// let list = document.getElementById("fruitList");

// for (let fruit of fruits) {
//   let li = document.createElement("li");
//   li.textContent = fruit;
//   list.append(li);
// }

// let names = ["ram", "shyam", "lakhan", "kunal"];

// let nameList = document.getElementById("nameList");

// for (let name of names) {
//   let li = document.createElement("li");
//   li.textContent = name;
//   nameList.append(li);
// }

// let users = [
//   { id: 1, name: "Pranav" },
//   { id: 2, name: "Sourav" },
//   { id: 3, name: "Anjali" },
//   { id: 4, name: "Megha" },
//   { id: 5, name: "Rahul" },
// ];

// let table = document.getElementById("tableBody");

// users.forEach((item) => {
//   let tr = document.createElement("tr");

//   let tdId = document.createElement("td");
//   tdId.textContent = item.id;

//   let tdName = document.createElement("td");
//   tdName.textContent = item.name;

//   tr.appendChild(tdId);
//   tr.appendChild(tdName);
//   table.appendChild(tr);
// });

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let ul = document.querySelector("ul");
let li = document.createElement("li");
let p = document.createElement ('p');
p.textContent ='Pranav';


li.textContent ='Banana';
ul.append(li);// add to the end
ul.prepend(li); //add at the start 
ul.before(p); // before sibling element
// ul.after(p); // after sibling element
ul.remove()// deletion of an element in the dom 
p.remove();






