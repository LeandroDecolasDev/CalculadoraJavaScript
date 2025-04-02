let expression = "";

function addNumber(num) {
    expression += num;
    document.getElementById("monitor").innerText = expression;
}
function addOperator(op) {
    if (expression !== "" && !isNaN(expression[expression.length - 1])) {
        expression += op;
        document.getElementById("monitor").innerText = expression;
    }
}
function calculate() {
    try {
        expression = eval(expression).toString();
        document.getElementById("monitor").innerText = expression;
    } catch {
        document.getElementById("monitor").innerText = "Error";
    }
}
function clearMonitor() {
    expression = "";
    document.getElementById("monitor").innerText = "0";
}