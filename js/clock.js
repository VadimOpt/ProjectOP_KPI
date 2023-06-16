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

function updateDate() {
    const currentTime = new Date();
    const timezoneOffset = currentTime.getTimezoneOffset() / 60; // get a timezone


    // we get the date
    const date = "DATE:" + " " + currentTime.toLocaleDateString();

    // we get the timezone
    const timezone = (timezoneOffset < 0 ? "+" : "-") + Math.abs(timezoneOffset).toString().padStart(2, '0') + ":00" + " " +"UTC";

    document.querySelector(".date").innerHTML = date;
    document.querySelector(".timezone").innerHTML = timezone;

    setTimeout(updateClock, 1000);
}

updateClock();
updateDate();