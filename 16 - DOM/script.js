// alert("Hello");
// document.querySelector("h1").innerHTML = "Goodbye";
// see in console of chrome dev tools
// console.log(document.firstElementChild);
// console.log(document.firstElementChild.firstElementChild);
// console.log(document.firstElementChild.lastElementChild);
// to write and test more than one line, in chrome dev tools, sources -> new snippet -> index.js

var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerText = "Goodbye";
heading.style.color = "red";

document.querySelector("input").click(); // can also combine selectors in querySelector for specific item

var myListItems = document.getElementsByTagName("li");
myListItems[2].style.color = "pink";

var myBtn = document.getElementsByClassName("btn"); // or querySelectorAll(".btn") 
myBtn[0].style.backgroundColor = "yellow"; // camelCase for css properties

var my_btn = document.getElementById("btn"); // or querySelector("#btn")
my_btn.style.color = "purple";

var second_list_item = document.getElementById("second");
second_list_item.innerHTML = '<a href="https://www.w3schools.com/js/js_htmldom.asp">HTML DOM</a>';

console.log(document.querySelector("button").classList);
document.querySelector("button").classList.add("invisible");

// document.querySelector(".invisible").style.visibility = "hidden";
// document.querySelector(".invisible").style.visibility = "visible";
// for seperation of concerns, we add the above thing in styles.css

document.querySelector("button").classList.remove("invisible");

document.querySelector("button").classList.toggle("invisible"); // add
document.querySelector("button").classList.toggle("invisible"); // remove

console.log(document.querySelector("a").attributes);
document.querySelector("a").getAttribute("href");
document.querySelector("a").innerText = "Element Ref"
document.querySelector("a").setAttribute("href", "https://www.w3schools.com/js/js_htmldom_element_reference.asp");