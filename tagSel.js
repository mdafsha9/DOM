//Finding an HTML element by tag name

const tagSel = document.getElementsByTagName('h1')[0];
console.log(tagSel);
setTimeout(()=>{
  tagSel.textContent = "Document Object Model";
},1000)
