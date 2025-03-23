document.addEventListener("DOMContentLoaded", function () {
    let loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("fade-out");

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);
    }, 1500);
});
