//declaring variables

var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var alpha = document.getElementById("alpha");

var inputs = document.querySelectorAll("input");
// console.log(inputs)

var colorOutput = document.querySelector(".color-output");
var codeOutput = document.querySelector(".code-output");

let getValues = () => {
    return {red : red.value,green : green.value , blue : blue.value , alpha : alpha.value};
}

let getOuput = (datas) => {
    let {red,green,blue,alpha} = datas;

    let result = `rgba(${red},${green},${blue},${alpha})`;

    colorOutput.style.background = result;
    codeOutput.textContent = result;
}

inputs.forEach(input => {
    input.addEventListener("change",() => {
        getOuput(getValues());
    });
});
