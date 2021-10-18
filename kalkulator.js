let addNumber = document.querySelectorAll("button");
addNumber.addEventListener("click", myFunction);

myFunction(e) 
let inputField = document.getElementById("results");
inputField.innerHTML=e.target.value;
console.log(e.target.value);

