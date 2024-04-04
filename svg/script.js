const root = document.querySelector(':root');

window.onload = function setInitialHandPositions() {
    // const svg = document.getElementById("reloj")

    // const root = document.documentElement;
    // const root = document.querySelector(':root');
    console.log("root", root)

    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    console.log("hours", hours);
    console.log("minutes", minutes);
    console.log("seconds", seconds);

    const totalSeconds = (hours * 60 * 60) + (minutes * 60) + seconds;
    root.style.setProperty('--currentSeconds', totalSeconds.toString());

    root.style.setProperty('--currentSecond', seconds / 60);
    root.style.setProperty('--currentMinute', (minutes + seconds / 60) / 60);
    root.style.setProperty('--currentHour', ((hours % 12) + minutes / 60) / 12);

    // console.log("second cycle", root.style.getPropertyValue("--currentSecond"));
    // console.log("minute cycle", root.style.getPropertyValue("--currentMinute"));
    // console.log("hour cycle", root.style.getPropertyValue("--currentHour"));

    console.log("total seconds", totalSeconds);
    console.log("valor currentSeconds", root.style.getPropertyValue("--currentSeconds"));
}

// Set initial positions
// setInitialHandPositions();