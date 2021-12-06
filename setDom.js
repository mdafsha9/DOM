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

//Attributes,
//.value
let att = document.querySelector("#anchor a");
let change = att.attributes[0].value="https://youtube.com";
console.log(change);

//Attributes//.name
let nam = document.querySelector("#anchor a");
let attr = nam.attributes[0].name;
console.log(attr);

//removeAttribute
let rem = document.querySelector("#anchor a");
rem.removeAttribute('title');
console.log(rem);
