 // Set the target sale end date
// Set the target date
const saleEndDate = new Date("December 15, 2024 23:59:59").getTime();

// Update every second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = saleEndDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } 
    else {
        clearInterval(countdownInterval);
        document.querySelector(".countdown-ad").innerHTML = `
            <h1>🎉 Sale Ended!</h1>
            <p>Stay tuned for our next sweet event! 🍪</p>
        `;
    }
}, 1000);
