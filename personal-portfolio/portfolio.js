const typedText = document.querySelector(".typing-text");
const words = ["Cybersecurity Geek", "Web Developer", "Designer", "Freelancer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, charIndex);
    typedText.innerHTML = currentText;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 1000);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);




const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});






