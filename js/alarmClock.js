const alarms = [];

function setAlarm() {
    const alarmTime = document.getElementById("alarmTime").value;
    const currentTime = new Date();
    const alarm = new Date(currentTime.toDateString() + " " + alarmTime);

    if (isNaN(alarm.getTime())) {
        alert("error");
        return;
    }

    const timeUntilAlarm = alarm.getTime() - currentTime.getTime();
    if (timeUntilAlarm < 0) {
        alert("setup alarm");
        return;
    }

    const alarmItem = {
        time: alarmTime,
        active: true
    };

    alarms.push(alarmItem);
    updateAlarmsList();

    setTimeout(function() {
        if (alarmItem.active) {
            alert("Wake up!");
            alarmItem.active = false;
            updateAlarmsList();
        }
    }, timeUntilAlarm);
}

function updateAlarmsList() {
    const alarmsList = document.getElementById("alarmsList");
    alarmsList.innerHTML = "";

    alarms.forEach(function(alarmItem, index) {
        const listItem = document.createElement("li");

        const timeText = document.createTextNode(alarmItem.time);
        listItem.appendChild(timeText);

        const toggleSwitch = document.createElement("input");
        toggleSwitch.type = "checkbox";
        toggleSwitch.checked = alarmItem.active;
        toggleSwitch.addEventListener("change", function() {
            alarms[index].active = this.checked;
        });
        listItem.appendChild(toggleSwitch);

        alarmsList.appendChild(listItem);
    });
}
