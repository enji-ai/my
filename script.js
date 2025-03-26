document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Efek Loading Screen
    const loadingScreen = document.querySelector(".loading-screen");

    window.addEventListener("load", function () {
        setTimeout(() => {
            loadingScreen.style.opacity = "0";
            setTimeout(() => {
                loadingScreen.style.display = "none";
            }, 500);
        }, 1000); // Waktu loading 1 detik
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

    // 🔹 Pemutar Musik
    const music = document.getElementById("background-music");
    const musicToggle = document.getElementById("music-toggle");
    const musicIcon = musicToggle.querySelector("i");

    musicToggle.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            musicIcon.classList.replace("fa-play", "fa-pause");
        } else {
            music.pause();
            musicIcon.classList.replace("fa-pause", "fa-play");
        }
    });
});
