document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll Effect for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Sticky Navbar with Background Change on Scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // Responsive Navbar (Hamburger Menu)
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "&#9776;"; // Hamburger icon
    header.appendChild(menuToggle);

    const nav = document.querySelector("nav ul");
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Scroll-Based Animations (Fade-in effect)
    const sections = document.querySelectorAll("section");
    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.8) {
                section.classList.add("visible");
            }
        });
    };
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Initial check


    // Check for saved mode
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeBtn.textContent = "☀️ Light Mode";
}

   // Dark Mode Toggle
    const darkModeBtn = document.createElement("button");
    darkModeBtn.textContent = "🌙 Dark Mode";
    darkModeBtn.classList.add("dark-mode-btn");
    header.appendChild(darkModeBtn);

    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        darkModeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
});
