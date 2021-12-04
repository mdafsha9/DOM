//querySelector or querySelectorAll
const qerSel = document.querySelector("h1");
console.log(qerSel);
setTimeout(()=>{
  qerSel.style.color="violet";
},1000
)
const qerSelA = document.querySelectorAll("h1");
console.log(qerSelA);


const qerSelTag = document.querySelector('#dom');
console.log(qerSelTag);

const qerSelCls = document.querySelector(".nodes");
console.log(qerSelCls);
