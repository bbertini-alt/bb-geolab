document.addEventListener("DOMContentLoaded", () => {

    /* ---------- NAVBAR ---------- */
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        function updateNavbar() {
            navbar.classList.toggle("scrolled", window.scrollY > 10);
        }

        updateNavbar();
        window.addEventListener("scroll", updateNavbar, { passive: true });
    }

    /* ---------- CARROSSEL DE PROJETOS ---------- */
    const track = document.querySelector(".projects-grid");
    const prev = document.querySelector(".carousel-btn--prev");
    const next = document.querySelector(".carousel-btn--next");

    if (track && prev && next) {
        const scrollAmount = () => track.clientWidth * 0.6;

        next.addEventListener("click", () => {
            track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
        });

        prev.addEventListener("click", () => {
            track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
        });

        const updateButtons = () => {
            const maxScroll = track.scrollWidth - track.clientWidth;
            prev.disabled = track.scrollLeft <= 5;
            next.disabled = track.scrollLeft >= maxScroll - 5;
        };

        track.addEventListener("scroll", updateButtons);
        window.addEventListener("resize", updateButtons);
        updateButtons();
    }

});