document.addEventListener('DOMContentLoaded', () => {
    const loadingContainer = document.querySelector('.loading_container');
    const hiddenSections = document.querySelector('.hidden');
  
    // Affiche la hero_section après la fin de l'animation de chargement
    setTimeout(() => {
      loadingContainer.style.display = 'none';
      hiddenSections.style.display = 'block'; 
      hiddenSections.classList.add('show');
    }, 4000);
  });