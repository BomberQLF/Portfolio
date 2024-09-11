document.addEventListener("DOMContentLoaded", function() {
    const filterItems = document.querySelectorAll('.work_filter_item');

    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            // Permet retirer la classe active de tous les éléments
            filterItems.forEach(i => i.classList.remove('active_filter_item'));

            // Ajouter la classe active au click
            item.classList.add('active_filter_item');
        });
    });

    const description = document.querySelector('.description_about p');
    const text = description.textContent;
    description.innerHTML = ''; // Clear the current text

    // Wrap each letter in a span
    text.split('').forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.opacity = '0'; // Initially hidden
        description.appendChild(span);
    });
});

document.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('.description_about');
    const spans = aboutSection.querySelectorAll('span');
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const sectionHeight = aboutSection.getBoundingClientRect().height;
    const screenHeight = window.innerHeight;

    // Adjust the scroll trigger sensitivity
    const triggerPoint = screenHeight * 0.8; // Adjust this for fine-tuning when highlighting starts
    const scrollPosition = triggerPoint - sectionTop;

    // Determine if the section is fully out of view
    const isSectionOutOfView = sectionTop + sectionHeight < 0;

    spans.forEach((span, index) => {
        const letterPosition = (index / spans.length) * sectionHeight;

        if (scrollPosition > letterPosition && !isSectionOutOfView) {
            // If section is in view or partially in view, highlight letters
            span.style.opacity = '1';
            span.style.transition = `opacity 0.35s ease-out`; // Slow transition for highlighting
        } else if (isSectionOutOfView) {
            // If section is fully out of view, keep opacity at 1
            span.style.opacity = '1';
        } else {
            // If section is partially out of view or scrolling back up
            span.style.opacity = '0.2'; // Slightly visible when scrolling up
            span.style.transition = `opacity 0.15s ease-out`; // Faster reset when scrolling back up
        }
    });
    
});