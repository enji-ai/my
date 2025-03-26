document.addEventListener("DOMContentLoaded", function () {
    // Efek Loading
    setTimeout(() => {
        document.querySelector(".loading-screen").style.display = "none";
    }, 2000);

    // Dark Mode Toggle
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    const darkModeIcon = document.getElementById("darkModeIcon");
    const body = document.body;

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            darkModeIcon.classList.replace("fa-moon", "fa-sun");
        } else {
            darkModeIcon.classList.replace("fa-sun", "fa-moon");
        }
    });
});
