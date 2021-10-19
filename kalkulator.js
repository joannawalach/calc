let addNum = document.querySelectorAll('button');
let calculation = document.getElementById("results");
let aaa = 
addNum.forEach(function(currentButton) {
currentButton.addEventListener('click', handleEvent);

function handleEvent(e) {
calculation.value=calculation.value+e.target.value;
console.log(e.target.value);
}
})

