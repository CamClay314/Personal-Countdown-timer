// Global variable to store the timer ID
let timer;
const countdownDuration = 120;

// Function to start the countdown
function startCountdown(seconds) {
    const actually_counting_down = document.getElementById("countdown");
    const progressBar = document.getElementById("timeProgress");

    // Check if the countdown element exists
    if (!actually_counting_down || !progressBar) {
        console.error("Countdown or progress bar element not found!");
        return;
    }

    // Check if a timer is already running
    if (timer) {
        clearInterval(timer);
        timer = null;
    }

    // Start a new interval (countdown every second)
    timer = setInterval(function() {
        seconds--;

        // Calculate percentage of time passed
        let percentage = ((countdownDuration - seconds) / countdownDuration) * 100;
        progressBar.value = percentage; // Update the progress bar

        if (seconds < 0) {
            clearInterval(timer);
            timer = null;
            actually_counting_down.innerText = "Time's up!";
        } else {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            actually_counting_down.innerText = `${minutes} minutes ${remainingSeconds} seconds remaining`;
        }
    }, 1000);
}

// Function to reset the countdown
function resetCountdown(seconds) {
    console.log("Resetting timer...");
    startCountdown(seconds); // Restart the countdown from the beginning
}

// Add event listener to the reset button
const resetButton = document.getElementById("resetButton");
if (resetButton) {
    console.log("Reset button found! Adding event listener...");
    resetButton.addEventListener("click", function() {
        resetCountdown(countdownDuration + 1); // Pass the initial seconds value to reset the timer
    });
} else {
    console.error("Reset button not found!");
}

// Start the countdown when the window loads
window.onload = function() {
    const actually_counting_down = document.getElementById("countdown");
    const progressBar = document.getElementById("timeProgress");
    if (actually_counting_down && progressBar) {
        console.log("Page loaded. Starting countdown...");
        startCountdown(countdownDuration + 1); // Start the countdown with initial coubtdownDuration seconds
    } else {
        console.error("Countdown or progress bar element not found!");
    }
};
