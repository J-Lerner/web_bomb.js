// All credits go to Jordan Lerner
// This project is licensed under MIT
//
// https://github.com/J-Lerner/web_bomb.js
//
// web_bomb.js version 0.1

function bomb(newTabAmount, newTabURL, bombInterval, maxBombs) {
    newTabAmount = newTabAmount ?? 10;
    maxBombs = maxBombs ?? 1;
    newTabURL = newTabURL ?? "https://google.com";
    bombInterval = bombInterval ?? 500;
    totalBombs = 0;
    let intervalId = setInterval(function() {
        for (let i = 0; i < newTabAmount; i++) {
            window.open(newTabURL);
        }
        totalBombs++;
        if (totalBombs >= maxBombs) {
            clearInterval(intervalId);
        }
    }, bombInterval);
}