// document.addEventListener('DOMContentLoaded', () => {
//     window.onload = function() {
//         const heroSection = document.querySelector('.hero_section');
//         const hero = document.querySelector('.hero');
//         const svg = document.querySelector('.hero svg');
      
//         // Start the animation after a delay to ensure everything is loaded
//         setTimeout(() => {
//           svg.classList.add('move');
//         }, 1000); // Delay before starting the animation
      
//         // Show HTML elements after SVG animation is complete
//         svg.addEventListener('transitionend', () => {
//           heroSection.classList.add('show');
//           document.body.style.overflow = 'auto'; // Allow scrolling after animation
//         });
//       };
// })