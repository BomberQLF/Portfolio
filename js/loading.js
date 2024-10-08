document.addEventListener('DOMContentLoaded', () => {
    const loadingContainer = document.querySelector('.loading_container');
    const hiddenSections = document.querySelector('.hidden');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const myWork = document.querySelector('.my_work');
  
    // Affiche la hero_section après la fin de l'animation de chargement
    setTimeout(() => {
      loadingContainer.style.display = 'none';
      footer.style.display = "flex";
      footer.style.flexDirection = "column";
      main.style.display = "block";
      hiddenSections.style.display = 'block'; 
      hiddenSections.classList.add('show');
      myWork.style.display = 'block';
    }, 4000);
  });