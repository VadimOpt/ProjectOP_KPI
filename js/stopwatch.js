let time = 0;
let running = 0;
let lapCounter = 0;

function startPause() {
    if (running === 0) {
        running = 1;
        increment();
        document.getElementById("startStop").innerHTML = "Pause";
    } else {
        running = 0;
        document.getElementById("startStop").innerHTML = "Resume";
    }
}

function reset() {
    running = 0;
    time = 0;
    document.getElementById("startStop").innerHTML = "Start";
    document.getElementById("display").innerHTML = "00:00:00";
    lapCounter = 0;
    document.getElementById("laps").innerHTML = "";
}

function increment() {
    if (running === 1) {
        setTimeout(function () {
            time++;
            let mins = Math.floor(time / 10 / 60);
            let secs = Math.floor(time / 10 % 60);
            let tenths = time % 10;

            if (mins < 10) {
                mins = "0" + mins;
            }
            if (secs < 10) {
                secs = "0" + secs;
            }
            document.getElementById("display").innerHTML =
                mins + ":" + secs + ":" + "0" + tenths;
            increment();
        }, 100);
    }
}

function lap() {
    if (time !== 0) {
        lapCounter++;
        let currentLapTime = document.getElementById("display").innerHTML;
        let lapText = "Lap " + lapCounter + ": " + currentLapTime;
        let node = document.createElement("div");
        node.setAttribute("class", "lap");
        let textnode = document.createTextNode(lapText);
        node.appendChild(textnode);
        document.getElementById("laps").appendChild(node);
    }
}

window.onload = function () {
    document.getElementById("startStop").addEventListener("click", startPause);
    document.getElementById("reset").addEventListener("click", reset);
    document.getElementById("lap").addEventListener("click", lap);
};