function updateClock() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    //adds zeros to the time unit
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.querySelector(".clock").innerHTML = hours + ":" + minutes + ":" + seconds;

    //updated every second
    setTimeout(updateClock, 1000);
}


updateClock();
