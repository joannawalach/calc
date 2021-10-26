const numbers = document.getElementById("numbers");
numbers.addEventListener('click', function(e) {
        let input = document.getElementById("results");
        input.value= input.value+e.target.value;
        console.log(e.target.value);
        });

const operators = document.getElementById("operators");
operators.addEventListener('click', function(e) {
    let input = document.getElementById("results");
    input.value= input.value+e.target.value;
    console.log(e.target.value);
});

const operator = document.getElementById("clear");
operator.addEventListener('click', function() {
document.getElementById("results").value=""; 
console.log("");
});
 
const result = document.getElementById("finalresult");
result.addEventListener('click', function(e) {
    let input = document.getElementById("results").value;
    let finalResult = eval(input);
    console.log(finalResult);
});