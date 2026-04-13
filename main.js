document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll-spy: highlight active nav link
    const sections = document.querySelectorAll('header[id], section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    function updateActiveNav() {
        let currentId = '';
        sections.forEach(section => {
            const top = section.offsetTop - 150;
            if (window.scrollY >= top) {
                currentId = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();

    // Keyboard support for modal
    document.addEventListener('keydown', function (e) {
        const modal = document.getElementById('qr-modal');
        if (!modal || !modal.classList.contains('active')) return;

        if (e.key === 'Escape') {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        } else if (e.key === 'ArrowRight') {
            if (typeof changeSlide === 'function' && activeSlides && activeSlides.length > 1) {
                changeSlide(1);
            }
        } else if (e.key === 'ArrowLeft') {
            if (typeof changeSlide === 'function' && activeSlides && activeSlides.length > 1) {
                changeSlide(-1);
            }
        }
    });
});
