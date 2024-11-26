document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                section.classList.add("visible");
            }
        });
    });
});
