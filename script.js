document.addEventListener("DOMContentLoaded", function() {
    // Loading effect
    setTimeout(() => {
        document.querySelector(".loading-screen").style.opacity = "0";
        setTimeout(() => {
            document.querySelector(".loading-screen").style.display = "none";
            document.body.style.opacity = "1";
        }, 500);
    }, 1000); // Durasi loading 1 detik sebelum hilang

    // Parallax effect
    window.addEventListener("scroll", function() {
        let parallax = document.querySelector(".parallax");
        let scrollPosition = window.scrollY;
        parallax.style.backgroundPositionY = scrollPosition * 0.5 + "px";
    });
});
