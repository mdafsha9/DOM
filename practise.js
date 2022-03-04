//practising

const header = document.getElementById("header");
console.log(header);
header.textContent = "Document Object Model";
console.log(header);
header.style.color = "hotpink";

const node = document.getElementsByClassName("nodes");
console.log(node);

const node1 = document.querySelectorAll(".methods");
console.log(node1[1]);


for(let i=0; i<node1.length; i++){
  console.log(node1[i]);
}

for(let node2 of node1){
  console.log(node2);
}


const anchor = document.querySelector("#anchor a");
console.log(anchor.getAttribute("href"));
anchor.setAttribute("href", "https://www.w3schools.com");
console.log(anchor.getAttribute("href"));
