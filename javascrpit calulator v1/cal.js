// Number() function
var a, b, result;
function setValues() {
    a = Number(document.getElementById('a').value);
    b = Number(document.getElementById('b').value);
}
function resultsHTML() {

}
function add() {
    setValues(); // call setValues()
    result = a + b;
    document.getElementById("result").innerHTML = (a + " + " + b + " = " + result + "<br>");
}
function sub() {
    setValues(); // call setValues()
    result = a - b;
    document.getElementById("result").innerHTML = (a + " - " + b + " = " + result + "<br>");
}
function div() {
    setValues(); // call setValues()
    result = a / b;
    document.getElementById("result").innerHTML = (a + " / " + b + " = " + result + "<br>");
}
function multi() {
    setValues(); // call setValues()
    result = a * b;
    document.getElementById("result").innerHTML = (a + " * " + b + " = " + result + "<br>");

}
function exponet() {
    //result = a
}
