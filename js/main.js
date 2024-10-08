document.addEventListener("DOMContentLoaded", function () {
  // Animation pour la section .description_about
  const description = document.querySelector(".description_about p");
  if (description) {
    const descriptionText = description.textContent;
    description.innerHTML = ""; // Vider le texte actuel

    // Envelopper chaque lettre dans un span
    descriptionText.split("").forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.opacity = "0"; // Initialement masqué
      description.appendChild(span);
    });

    document.addEventListener("scroll", () => {
      const aboutSection = document.querySelector(".description_about");
      const spans = aboutSection.querySelectorAll("span");
      const sectionTop = aboutSection.getBoundingClientRect().top;
      const sectionHeight = aboutSection.getBoundingClientRect().height;
      const screenHeight = window.innerHeight;

      const triggerPoint = screenHeight * 0.65; 
      const scrollPosition = (triggerPoint - sectionTop) / 1.2; 
      const isSectionOutOfView = sectionTop + sectionHeight < 0;

      spans.forEach((span, index) => {
        const letterPosition = (index / spans.length) * sectionHeight;

        if (scrollPosition > letterPosition && !isSectionOutOfView) {
          span.style.opacity = "1";
          span.style.transition = `opacity 0.3s ease-out`; 
        } else if (isSectionOutOfView) {
          span.style.opacity = "1";
        } else {
          span.style.opacity = "0.2";
          span.style.transition = `opacity 0.1s ease-out`;
        }
      });
    });
  }

  // Animation pour la section .quote
  const quote = document.querySelector(".quote_container p");
  if (quote) {
    const text = quote.textContent;
    quote.innerHTML = ""; // Vider le texte actuel

    // Envelopper chaque lettre dans un span
    text.split("").forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.opacity = "0"; // Initialement masqué
      quote.appendChild(span);
    });

    document.addEventListener("scroll", () => {
      const quoteSection = document.querySelector(".quote");
      const spans = quoteSection.querySelectorAll("span");
      const sectionTop = quoteSection.getBoundingClientRect().top;
      const sectionHeight = quoteSection.getBoundingClientRect().height;
      const screenHeight = window.innerHeight;

      const triggerPoint = screenHeight * 0.65; 
      const scrollPosition = (triggerPoint - sectionTop) / 1.2; 
      const isSectionOutOfView = sectionTop + sectionHeight < 0;

      spans.forEach((span, index) => {
        const letterPosition = (index / spans.length) * sectionHeight;

        if (scrollPosition > letterPosition && !isSectionOutOfView) {
          span.style.opacity = "1";
          span.style.transition = `opacity 0.3s ease-out`; 
        } else if (isSectionOutOfView) {
          span.style.opacity = "1";
        } else {
          span.style.opacity = "0.2";
          span.style.transition = `opacity 0.1s ease-out`;
        }
      });
    });
  }
});