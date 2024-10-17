gsap.registerPlugin(ScrollTrigger);

const skills = document.querySelectorAll('.under_skills');
skills.forEach((e) => {
    e.addEventListener('mouseover', (hover) => {
        gsap.to(hover.target, { paddingLeft: 10, duration: 0.5, ease: "power2.out" });
    });

    e.addEventListener('mouseout', (hover) => {
        gsap.to(hover.target, { paddingLeft: 0, duration: 0.5, ease: "power2.out" });
    });
});

const gridFilled = document.querySelectorAll('.grid_filled');
// Faire un forEach qui passe sur gridFilled et qui appelle gsap avec un fromTo() en modifiant l'opacité.