function startTimer() {
    let timeInput = document.getElementById('time-input');
    let time = parseInt(timeInput.value, 10);

    if (isNaN(time) || time <= 0) {
        alert('this is not the time');
        return;
    }

    let seconds = time;
    let timer = setInterval(function() {
        seconds--;
        if (seconds <= 0) {
            clearInterval(timer);
            playRingtone();
        }
    }, 1000);
}

function playRingtone() {
    let ringtone = document.getElementById('ringtone');
    ringtone.play();
    alert('Timer')
}
