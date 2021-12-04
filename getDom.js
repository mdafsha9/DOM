//get DOM values
//innerHTML
//innerText
//getAttribute
//getAttributeNode
//attributes

const content = document.querySelector("#dom").innerText;
console.log(content);

const content1 = document.querySelector("#dom").innerHTML;
console.log(content1);

const att = document.querySelector("ul").getAttribute("class");
console.log(att);

const att1 = document.querySelector("ul").getAttributeNode("class");
console.log(att1);

const att2 = document.querySelector("ul").attributes;
console.log(att2);
