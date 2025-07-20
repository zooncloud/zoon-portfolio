document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('testimonial-carousel');
    if (!carousel) return;
    const canvases = carousel.querySelectorAll('.testimonial-carousel-canvas');
    let current = 0;
    const interval = 10000; // 10 secondes

    function showTestimonial(idx) {
        canvases.forEach((el, i) => {
            if (i === idx) {
                el.style.transition = 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)';
                el.style.transform = 'translateX(60px)';
                el.style.opacity = 0;
                el.style.display = '';
                setTimeout(() => {
                    el.style.transform = 'translateX(0)';
                    el.style.opacity = 1;
                }, 10);
            } else {
                el.style.transition = 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)';
                el.style.transform = 'translateX(60px)';
                el.style.opacity = 0;
                setTimeout(() => {
                    el.style.display = 'none';
                }, 700);
            }
        });
    }

    // Initial state
    canvases.forEach((el, i) => {
        el.style.opacity = (i === 0) ? 1 : 0;
        el.style.transition = 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)';
    });

    setInterval(() => {
        current = (current + 1) % canvases.length;
        showTestimonial(current);
    }, interval);

    // Optionnel : swipe/touch ou boutons si besoin
});
