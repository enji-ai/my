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

    document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const openBtn = document.querySelector(".open-popup-btn");
    const closeBtn = document.querySelector(".close-btn");

    openBtn.addEventListener("click", () => {
        popup.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        popup.classList.remove("active");
    });

    // Tutup popup kalau klik di luar box
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.remove("active");
        }
    });
});
