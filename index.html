document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Efek Loading Screen
    const loadingScreen = document.querySelector(".loading-screen");

    window.addEventListener("load", function () {
        setTimeout(() => {
            loadingScreen.style.opacity = "0";
            setTimeout(() => {
                loadingScreen.style.display = "none";
            }, 500);
        }, 1000);
    });

    // 🔹 Mode Gelap/Terang
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const icon = darkModeToggle.querySelector("i");

    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        icon.classList.replace("fa-sun", "fa-moon");
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            icon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("dark-mode", "enabled");
        } else {
            icon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("dark-mode", "disabled");
        }
    });

    // 🔹 Pemutar Musik (Fix untuk GitHub Pages)
    const music = document.getElementById("background-music");
    const musicToggle = document.getElementById("music-toggle");
    const musicIcon = musicToggle.querySelector("i");

    // Pastikan audio dalam keadaan mute saat awal
    music.muted = true;

    function enableAudio() {
        music.muted = false;
        document.removeEventListener("click", enableAudio);
        document.removeEventListener("touchstart", enableAudio);
    }

    document.addEventListener("click", enableAudio);
    document.addEventListener("touchstart", enableAudio);

    musicToggle.addEventListener("click", function () {
        if (music.paused) {
            music.play().catch(error => console.log("Autoplay tidak diizinkan:", error));
            musicIcon.classList.replace("fa-play", "fa-pause");
        } else {
            music.pause();
            musicIcon.classList.replace("fa-pause", "fa-play");
        }
    });
});
