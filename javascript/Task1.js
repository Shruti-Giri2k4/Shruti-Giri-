function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

function reverseInputNumber() {
    let num = document.getElementById("numInput").value;
    if (num === "") {
        document.getElementById("result").innerText = "Please enter a number!";
        return;
    }
    let reversed = reverseNumber(num);
    document.getElementById("result").innerText = "Reversed Number: " + reversed;
}