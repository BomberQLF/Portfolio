const skills = document.querySelectorAll('.under_skills');

skills.forEach((e) => {
    e.addEventListener('mouseover', (hover) => {
        gsap.to(hover.target, {paddingLeft: 10, duration: 0.5, ease: "power2.out"});
    });

    e.addEventListener('mouseout', (hover) => {
        gsap.to(hover.target, {paddingLeft: 0, duration: 0.5, ease: "power2.out"});
    });
});

