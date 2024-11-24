document.addEventListener('DOMContentLoaded', () => {
  const loadingContainer = document.querySelector('.loading_container');
  const hiddenSections = document.querySelector('.hidden');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const introduction = document.querySelector('.introduction');
  const quote = document.querySelector('.quote');
  const gridkey = document.querySelector('.grid_key');
  const timeline = document.querySelector('.timeline');
  const story = document.querySelector('.story');
  const mywork = document.querySelector('.my_work');
  const caseList = document.querySelector('.case_list');
  const classFooter = document.querySelector('.footer_about_container');

  // Vérifie si loadingContainer existe avant d'appliquer les changements
  if (loadingContainer) {
    // Affiche les sections après la fin de l'animation de chargement
    setTimeout(() => {
      loadingContainer.style.display = 'none';

      // Vérifie si chaque section existe avant de modifier son style
      if (caseList) caseList.style.display = "flex";
      if (mywork) mywork.style.display = "block";
      if (story) story.style.display = "block";
      if (timeline) timeline.style.display = "flex";
      if (gridkey) gridkey.style.display = "grid";
      if (quote) quote.style.display = "flex";
      if (introduction) introduction.style.display = "block";
      if (footer) {
        footer.style.display = "flex";
        footer.style.flexDirection = "column";
      }
      if (main) main.style.display = "block";
      if (hiddenSections) {
        hiddenSections.style.display = 'block';
        hiddenSections.classList.add('show');
      }
      // Affiche la section footer_about_container après l'animation
      if (classFooter) {
        classFooter.style.display = 'flex';
      }
    }, 2300);
  }
});