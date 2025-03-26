function alphabetizeString(str) {
    return str.split('').sort().join('');
}

function sortInputText() {
    let text = document.getElementById("textInput").value;
    if (text === "") {
        document.getElementById("result").innerText = "Please enter a word!";
        return;
    }
    let sortedText = alphabetizeString(text);
    document.getElementById("result").innerText = "Sorted Letters: " + sortedText;
}

