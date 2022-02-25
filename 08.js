//iterate elements


const lists = document.getElementsByTagName("a");


//using simple for loop
for(let i =0; i<lists.length; i++){
  console.log(lists[i]);
  const list = lists[i];
  list.style.color = "orange";
  list.style.textDecoration = "none";
}

//using for of loop


for(let list of lists ){
  console.log(list);
}
