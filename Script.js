
/* STEP 1: Find all skill cards on the page */
const skillCards = document.querySelectorAll(".skill-card");

/* STEP 2: Go through each skill card */
skillCards.forEach(function (card) {

    /* STEP 3: Listen for a click on this card */
    card.addEventListener("click", function () {

        /* STEP 4: Toggle the selected class */
        card.classList.toggle("selected");

    });

});


const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.textContent = "☰";
    });
});
// Find all navigation links
const navLinksAll = document.querySelectorAll(".nav-links a");

// Find all sections linked in the navbar
const pageSections = document.querySelectorAll(
    "#about, #skills, #Experience, #contact"
);

// Highlight the navigation link for the section in view
window.addEventListener("scroll", function () {
    let currentSection = "";

    pageSections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinksAll.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});


const typingText = document.querySelector("#typing-text");

if (typingText) {
    const titles = [
        "Implementation Consultant",
        "Business Analyst",
        "Data Analytics Enthusiast"
    ];

    let titleIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeHeadline() {
        const currentTitle = titles[titleIndex];

        if (deleting) {
            characterIndex--;
        } else {
            characterIndex++;
        }

        typingText.textContent = currentTitle.substring(
            0,
            characterIndex
        );

        let delay = deleting ? 50 : 100;

        if (!deleting && characterIndex === currentTitle.length) {
            deleting = true;
            delay = 1200;
        } else if (deleting && characterIndex === 0) {
            deleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            delay = 300;
        }

        setTimeout(typeHeadline, delay);
    }

    typeHeadline();
}
