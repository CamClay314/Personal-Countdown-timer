// Global variable to store the timer ID
let timer;

// Function to start the countdown
function startCountdown(seconds) {
    const actually_counting_down = document.getElementById("countdown");

    // Check if the countdown element exists
    if (!actually_counting_down) {
        console.error("Countdown element not found!");
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

        if (seconds < 0) {
            clearInterval(timer);
            timer = null;
            actually_counting_down.innerText = "Time's up!";
        } else {
            actually_counting_down.innerText = seconds + " seconds remaining";
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
        resetCountdown(600); // Pass the initial seconds value to reset the timer
    });
} else {
    console.error("Reset button not found!");
}

// Start the countdown when the window loads
window.onload = function() {
    const actually_counting_down = document.getElementById("countdown");
    if (actually_counting_down) {
        console.log("Page loaded. Starting countdown...");
        startCountdown(600); // Start the countdown with initial 10 seconds
    } else {
        console.error("Countdown element not found!");
    }
};
