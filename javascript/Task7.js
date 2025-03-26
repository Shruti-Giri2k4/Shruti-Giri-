let train = document.getElementById("train");
let trainPosition = 0;
let trainAnimation;

function startTrain() {
    clearInterval(trainAnimation);
    trainAnimation = setInterval(() => {
        if (trainPosition < window.innerWidth) {
            trainPosition += 5;
            train.style.left = trainPosition + "px";
        } else {
            trainPosition = -200; // Reset when it reaches the end
        }
    }, 50);
}

function stopTrain() {
    clearInterval(trainAnimation);
}
