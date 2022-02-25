//iterate elements


const list = document.getElementsByTagName("a");

for(let i =0; i<list.length; i++){
  console.log(list[i]);
  const lists = list[i];
  lists.style.color = "orange";
  lists.style.textDecoration = "none";
}
