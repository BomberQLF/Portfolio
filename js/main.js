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
});