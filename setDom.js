//innerText
//innerHTML
//setAttributes
//Attributes
//.value
//.name
//removeAttributes

//innerText
let h = document.querySelector('h1');
h.innerText = "Document Object Model";
console.log(h);

//innerHTML

let header = document.querySelector('.container, .header');
header.innerHTML = "<h2>innerHTML</h2>";
console.log(header);

//setAttributes
let anc = document.querySelector("#anchor a");
anc.setAttribute('href', 'https://www.facebook.com/');
console.log(anc);
