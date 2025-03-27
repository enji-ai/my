document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.querySelector(".loading-screen");
    const typingText = document.querySelector(".typing-text");
    const progressFill = document.querySelector(".progress-fill");
    const progressPercent = document.querySelector(".progress-percent");
    const terminalText = document.querySelector(".terminal-text");

    // Teks yang diketik
    const text = "welcome to my website.";
    let i = 0;

    function typeText() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeText, 50); // Kecepatan mengetik
        }
    }

    typeText(); // Mulai animasi mengetik

    // Simulasi loading progress
    let progress = 0;
    function updateProgress() {
        if (progress < 100) {
            progress += Math.floor(Math.random() * 10) + 5; // Naik acak
            if (progress > 100) progress = 100;

            progressFill.style.width = progress + "%";
            progressPercent.textContent = progress + "%";

            // Efek glitch tambahan
            terminalText.textContent = Math.random() > 0.5 ? "_" : "█";

            setTimeout(updateProgress, 300); // Update setiap 300ms
        } else {
            setTimeout(() => {
                loadingScreen.classList.add("hidden"); // Hilangkan loading
            }, 500);
        }
    }
 
      let text = `> Hello,  
> I am enang or usually called enji. 
> I am a student and also a santri at the Jabal Toriq Islamic boarding school. 
> My favorite language is javascript programming and anime. 
> Hehe, I am not a wibu. 
> I am 18 years old. My date of birth is 03-22-2007`;
    
    let index = 0;
    let speed = 50; // Kecepatan mengetik (ms)
    let terminalText = document.getElementById("terminal-text");
    let cursor = document.querySelector(".cursor");

    function typeEffect() {
        if (index < text.length) {
            terminalText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        } else {
            cursor.style.display = "none"; // Hilangkan cursor setelah selesai mengetik
        }
    }

    typeEffect();
      
    updateProgress(); // Mulai progress bar
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
