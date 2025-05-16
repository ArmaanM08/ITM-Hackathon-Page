const video = document.getElementById('intro-video');
const audioBtn = document.getElementById('audio-btn');
const skipBtn = document.getElementById('skip-btn');
const splashScreen = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');

// Show main content when video ends
video.onended = () => {
  splashScreen.style.display = 'none';
  mainContent.style.display = 'block';
};

// Unmute audio when button clicked
audioBtn.addEventListener('click', () => {
  video.muted = true;
  video.volume = 1.0;
  video.play();
  audioBtn.style.display = 'none';
});

// Skip video
skipBtn.addEventListener('click', () => {
  video.pause();
  splashScreen.style.display = 'none';
  mainContent.style.display = 'block';
});

// Hackathon events and timer
// script.js
function countdown(endTime, elementId) {
    const timerElement = document.getElementById(elementId);
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${hours}:${minutes}:${seconds}`;

        if (distance < 0) {
            clearInterval(interval);
            timerElement.innerHTML = "EXPIRED";
        }
    }, 1000);
}

// Example usage: Set the countdown for an ongoing hackathon
const hackathonEndTime = new Date("May 15, 2025 15:30:00").getTime();
countdown(hackathonEndTime, "timer");
