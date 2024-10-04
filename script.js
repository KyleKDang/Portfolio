document.addEventListener('DOMContentLoaded', () => {
    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1
    });

    const targets = document.querySelectorAll('.hidden');
    targets.forEach(target => observer.observe(target));
});