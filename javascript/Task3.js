function multiply() {
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let result = number1 * number2;
    document.getElementById("result").innerText = result;
}

function divide() {
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    if (number2 == 0) {
        document.getElementById("result").innerText = "Cannot divide by zero!";
    } else {
        let result = number1 / number2;
        document.getElementById("result").innerText = result;
    }
}
