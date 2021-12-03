//Finding HTML element by using getElementById

const idSelector = document.getElementById('dom');
console.log(idSelector);
setTimeout(()=>{
  idSelector.style.border = "2px solid blue";
}, 1000)
