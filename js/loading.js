document.addEventListener('DOMContentLoaded', () => {
    const loadingContainer = document.querySelector('.loading_container');
    const heroSection = document.querySelector('.hero_section');
  
    // Affiche la hero_section après la fin de l'animation de chargement
    setTimeout(() => {
      loadingContainer.style.display = 'none';
      heroSection.style.display = 'inline'; // Change le display pour afficher la section
      heroSection.classList.add('show');
    }, 4000); // 3000 ms correspond au temps de l'animation
  });