document.addEventListener('DOMContentLoaded', () => {

// Quick animation on the hover of the tags in the About Page
const reliability = document.getElementById('reliability');
const adaptability = document.getElementById('adaptability');
const commitment = document.getElementById('commitment');

// Function to handle hover effect
const hoverTags = (tagID) => {
    const tagElement = document.getElementById(tagID);
    
    tagElement.addEventListener('mouseover', () => {
        tagElement.style.transition = "0.5s"
        tagElement.style.opacity = "1";
    });

    tagElement.addEventListener('mouseout', () => {
        tagElement.style.transition = "0.5s"
        tagElement.style.opacity = "0.7";
    });
}

// Call the hoverTags function for each tag
hoverTags('reliability');
hoverTags('adaptability');
hoverTags('commitment');
});