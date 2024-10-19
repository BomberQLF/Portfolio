document.addEventListener('DOMContentLoaded', () => {

    const skills = document.querySelectorAll('.under_skills');
    skills.forEach((e) => {
        e.addEventListener('mouseover', (hover) => {
            gsap.to(hover.target, { paddingLeft: 10, duration: 0.5, ease: "power2.out" });
        });

        e.addEventListener('mouseout', (hover) => {
            gsap.to(hover.target, { paddingLeft: 0, duration: 0.5, ease: "power2.out" });
        });
    });


    const gridFilled = document.querySelectorAll('.filled');

    // Fonction d'animation pour les éléments
    const animateElement = (element) => {
        gsap.fromTo(element, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 2
        });
    };

    // Configuration de l'Intersection Observer
    const observerOptions = {
        root: null, // Le container est le viewport
        rootMargin: '0px',
        threshold: 0.1 // L'animation se déclenche lorsque 10% de l'élément est visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Lancer l'animation pour l'élément visible
                animateElement(entry.target);
                // Arrêter d'observer cet élément après l'animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Actionner l'anmation
    gridFilled.forEach((element) => {
        observer.observe(element);
    });
});