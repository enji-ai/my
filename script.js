document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.querySelector(".loading-screen");
    const typingText = document.querySelector(".typing-text");
    const progressFill = document.querySelector(".progress-fill");
    const progressPercent = document.querySelector(".progress-percent");
    const terminalText = document.querySelector(".terminal-text");
let music = document.getElementById("bg-music");
let toggleBtn = document.getElementById("music-toggle");

toggleBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        toggleBtn.textContent = "🔇 Stop Music";
    } else {
        music.pause();
        toggleBtn.textContent = "🎵 Play Music";
    });
    // Teks yang diketik
    const text = "welcome to my website";
    let i = 0;

    function typeText(callback) {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(() => typeText(callback), 50); // Kecepatan mengetik
        } else {
            setTimeout(callback, 500); // Delay sebelum loading mulai
        }
    }

    // Simulasi loading progress
    function updateProgress() {
        let progress = 0;
        function increaseProgress() {
            if (progress < 100) {
                progress += Math.floor(Math.random() * 10) + 5; // Naik acak
                if (progress > 100) progress = 100;

                progressFill.style.width = progress + "%";
                progressPercent.textContent = progress + "%";

                // Efek glitch tambahan
                terminalText.textContent = Math.random() > 0.5 ? "_" : "█";

                setTimeout(increaseProgress, 300); // Update setiap 300ms
            } else {
                setTimeout(() => {
                    loadingScreen.classList.add("hidden"); // Hilangkan loading
                }, 500);
            }
        }
        increaseProgress(); // Mulai progress bar
    }

    // Jalankan efek ketik dulu, baru loading bar
    typeText(updateProgress);
});
