// var svg = document.getElementById("reloj")
// console.log("svg", svg)


// svg.style.setProperty('--start-seconds', currentTime.getSeconds());

function setInitialHandPositions() {
    // const svg = document.getElementById("reloj")
    // const root = document.documentElement;


    const root = document.documentElement;
    console.log("root", root)

    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    const minutes = currentTime.getMinutes();
    const hours = currentTime.getHours();

    // const secondRotation = seconds * 6; // 360deg / 60s
    // const minuteRotation = minutes * 6 + seconds * 0.1; // 360deg / 60m + compensation for seconds
    // const hourRotation = (hours % 12) * 30 + minutes * 0.5; // 360deg / 12h + compensation for minutes

    root.style.setProperty('--seconds', `${seconds}`);
    root.style.setProperty('--minutes', `${minutes}`);
    root.style.setProperty('--hours', `${hours}`);

    // document.documentElement.style.setProperty('--second-rotation', `${secondRotation}deg`);
    // document.documentElement.style.setProperty('--minute-rotation', `${minuteRotation}deg`);
    // document.documentElement.style.setProperty('--hour-rotation', `${hourRotation}deg`);

}

// Set initial positions
// setInitialHandPositions();

// Optionally, update the positions every second if you want the hands to "tick" or adjust for the exact time
// setInterval(setInitialHandPositions, 1000);