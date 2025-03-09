function updateClock() {
    const timer = document.getElementById("time");
    const datenow = document.getElementById("date");
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const pmam = hours >= 12 ? "AM" : "PM";
    //proxy
    timer.textContent = `${hours}:${minutes}:${seconds} ${pmam}`;
}

setInterval(updateClock, 1000);
updateClock();
