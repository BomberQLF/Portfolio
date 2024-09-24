document.addEventListener("DOMContentLoaded", function() {
    const filterItems = document.querySelectorAll('.work_filter_item');

    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            // Retirer la classe active de tous les éléments
            filterItems.forEach(i => i.classList.remove('active_filter_item'));

            // Ajouter la classe active à l'élément cliqué
            item.classList.add('active_filter_item');
        });
    });

    const description = document.querySelector('.description_about p');
    const text = description.textContent;
    description.innerHTML = ''; // Vider le texte actuel

    // Envelopper chaque lettre dans un span
    text.split('').forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.opacity = '0'; // Initialement masqué
        description.appendChild(span);
    });
});

document.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('.description_about');
    const spans = aboutSection.querySelectorAll('span');
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const sectionHeight = aboutSection.getBoundingClientRect().height;
    const screenHeight = window.innerHeight;

    // Ajuster la sensibilité du déclenchement (scroll légèrement plus profond dans la section)
    const triggerPoint = screenHeight * 0.65; // Commencer un peu plus tôt que la moitié du viewport

    // Ajustement pour déclencher l'animation de manière plus précise
    const scrollPosition = (triggerPoint - sectionTop) / 1.2; // Légèrement moins de sensibilité pour terminer plus vite

    // Vérifier si la section est complètement hors vue
    const isSectionOutOfView = sectionTop + sectionHeight < 0;

    spans.forEach((span, index) => {
        const letterPosition = (index / spans.length) * sectionHeight;

        if (scrollPosition > letterPosition && !isSectionOutOfView) {
            // Si la section est visible ou partiellement visible, animer les lettres
            span.style.opacity = '1';
            span.style.transition = `opacity 0.3s ease-out`; // Transition légèrement plus rapide
        } else if (isSectionOutOfView) {
            // Si la section est complètement hors de vue, garder l'opacité à 1
            span.style.opacity = '1';
        } else {
            // Si on remonte
            span.style.opacity = '0.2'; // Légèrement visible en remontant
            span.style.transition = `opacity 0.1s ease-out`; // Transition rapide pour revenir en arrière
        }
    });

});
