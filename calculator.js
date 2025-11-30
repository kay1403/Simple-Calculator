function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    if (n2 === 0) return "Cannot divide by zero";
    return n1 / n2;
}

function getNumbers() {
    return {
        number1: parseFloat(document.getElementById("number1").value) || 0,
        number2: parseFloat(document.getElementById("number2").value) || 0
    };
}

document.getElementById("add").addEventListener("click", function () {
    const { number1, number2 } = getNumbers();
    document.getElementById("calculation-result").textContent = add(number1, number2);
});

document.getElementById("subtract").addEventListener("click", function () {
    const { number1, number2 } = getNumbers();
    document.getElementById("calculation-result").textContent = subtract(number1, number2);
});

document.getElementById("multiply").addEventListener("click", function () {
    const { number1, number2 } = getNumbers();
    document.getElementById("calculation-result").textContent = multiply(number1, number2);
});

document.getElementById("divide").addEventListener("click", function () {
    const { number1, number2 } = getNumbers();
    document.getElementById("calculation-result").textContent = divide(number1, number2);
});
