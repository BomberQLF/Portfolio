document.addEventListener("DOMContentLoaded", function() {
    const filterItems = document.querySelectorAll('.work_filter_item');

    // Gérer les classes actives pour le filtrage
    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            // Retirer la classe active de tous les éléments
            filterItems.forEach(i => i.classList.remove('active_filter_item'));

            // Ajouter la classe active à l'élément cliqué
            item.classList.add('active_filter_item');
        });
    });

    // Création des variables contenant les éléments à filtrer
    let personal = document.querySelectorAll('.ps');
    let landingPage = document.querySelectorAll('.lp');
    let academic = document.querySelectorAll('.ac');
    let concept = document.querySelectorAll('.ct');

    // Création des filtres
    let filterAll = document.getElementById('all');
    let filterPersonal = document.getElementById('personal');
    let filterAcademic = document.getElementById('academic');
    let filterConcept = document.getElementById('concept');
    let filterLandingPage = document.getElementById('landing_page');

    // Fonction pour afficher ou masquer des éléments
    function showElements(elements) {
        elements.forEach(element => {
            element.style.display = 'block';
        });
    }

    function hideElements(elements) {
        elements.forEach(element => {
            element.style.display = 'none'; 
        });
    }

    function filterProjects(filterElement, show1, hide1, hide2, hide3) {
        filterElement.addEventListener('click', () => {
            // Tout masquer d'abord
            hideElements(show1.concat(hide1, hide2, hide3));
            
            // Puis afficher seulement les éléments filtrés
            showElements(show1);
        });
    }

    // Appliquer la fonction de filtrage sur chaque filtre
    filterProjects(filterPersonal, Array.from(personal), Array.from(landingPage), Array.from(academic), Array.from(concept));
    filterProjects(filterLandingPage, Array.from(landingPage), Array.from(personal), Array.from(academic), Array.from(concept));
    filterProjects(filterAcademic, Array.from(academic), Array.from(personal), Array.from(landingPage), Array.from(concept));
    filterProjects(filterConcept, Array.from(concept), Array.from(personal), Array.from(landingPage), Array.from(academic));

    // Filtre pour tout afficher
    filterAll.addEventListener('click', () => {
        // Tout afficher quand on clique sur 'All'
        showElements(Array.from(personal).concat(Array.from(landingPage), Array.from(academic), Array.from(concept)));
    });
});