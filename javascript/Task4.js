function showDate() {
    let today = new Date();
    let formattedDate = today.getDate() + "/" + today.toLocaleString('default', { month: 'long' }) + "/" + today.getFullYear();
    document.getElementById("dateOutput").innerText = formattedDate;
}

function showTime() {
    let time = new Date();
    document.getElementById("timeOutput").innerText = time;
}
