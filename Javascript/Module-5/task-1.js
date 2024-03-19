// Function to handle the event during the capturing phase
function capturingEventHandler() {
    console.log("Capturing phase: Button clicked!");
}

// Function to handle the event during the bubbling phase
function bubblingEventHandler() {
    console.log("Bubbling phase: Button clicked!");
}

document.getElementById("myButton").addEventListener("click", capturingEventHandler, true);

document.getElementById("myButton").addEventListener("click", bubblingEventHandler);
