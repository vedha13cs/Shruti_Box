// dashboard.js

// ====== AUDIO SETUP ======
let audio = null;
let isPlaying = false;

// CHANGE THIS PATH to your tanpura/pitch sound file
const AUDIO_SRC = "assets/audio/tanpura.mp3";

// Load audio safely
function initAudio() {
    audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.volume = 0.6;

    audio.addEventListener("error", () => {
        console.error("Audio file not found. Check path:", AUDIO_SRC);
    });
}

// ====== PLAY / PAUSE BUTTON ======
function togglePlay() {
    const btn = document.getElementById("playBtn");

    if (!audio) initAudio();

    if (!isPlaying) {
        audio.play()
            .then(() => {
                isPlaying = true;
                if (btn) btn.innerText = "Pause Tanpura ⏸️";
            })
            .catch(err => {
                console.error("Playback error:", err);
                alert("Audio not loading. Check file path or browser permissions.");
            });
    } else {
        audio.pause();
        isPlaying = false;
        if (btn) btn.innerText = "Play Tanpura ▶️";
    }
}

// ====== VOLUME CONTROL ======
function changeVolume(value) {
    if (!audio) initAudio();
    audio.volume = value;
}

// ====== STOP BUTTON ======
function stopAudio() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;

        const btn = document.getElementById("playBtn");
        if (btn) btn.innerText = "Play Tanpura ▶️";
    }
}

// ====== SIMPLE PRACTICE TIMER ======
let timer = 0;
let timerInterval = null;

function startTimer() {
    const display = document.getElementById("timerDisplay");

    if (timerInterval) return;

    timerInterval = setInterval(() => {
        timer++;

        let min = Math.floor(timer / 60);
        let sec = timer % 60;

        if (display) {
            display.innerText =
                `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

// ====== INIT ON PAGE LOAD ======
window.onload = function () {
    initAudio();

    const playBtn = document.getElementById("playBtn");
    const stopBtn = document.getElementById("stopBtn");
    const volSlider = document.getElementById("volume");

    if (playBtn) playBtn.addEventListener("click", togglePlay);
    if (stopBtn) stopBtn.addEventListener("click", stopAudio);
    if (volSlider) volSlider.addEventListener("input", (e) => changeVolume(e.target.value));
};
