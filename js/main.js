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

  // Page ABOUT ME - Photo

  // Création du string "?" qui servira à afficher ma photo
  let container = document.querySelector(".title_container");
  let interrogation = document.createElement("span");
  interrogation.classList.add("img_span");
  interrogation.innerHTML = "?";
  container.append(interrogation);

  // Style du string "?"
  interrogation.style.fontSize = "9rem";
  interrogation.style.color = "#f1F1f1";
  interrogation.style.fontFamily = "Helvetica Neue";
  interrogation.style.position = "absolute";
  interrogation.style.right = "400px";
  interrogation.style.bottom = "200px";
  interrogation.style.transform = "rotate3d(1, 1, 1, 45deg)";
  interrogation.addEventListener("mouseover", (e) => {
    e.target.style.cursor = "help";
  });

  // Création de l'image
  let picture = document.createElement("img");
  picture.classList.add = "myself";
  picture.src = "../assets/img/myself.png";
  container.append(picture);

  // Style de l'image
  picture.style.height = "430px";
  picture.style.width = "430";
  picture.style.position = "absolute";
  picture.style.right = "170px";
  picture.style.bottom = "30px";
  picture.style.opacity = "0"; 
  picture.style.transition = "opacity 4s";
  picture.style.pointerEvents = "none";

  // Affichage de l'image :
  interrogation.addEventListener("click", (e) => {
    // Transition pour masquer le point d'interrogation
    interrogation.style.transition = "opacity 1s";
    interrogation.style.opacity = "0";
    interrogation.style.pointerEvents = "none";

    // Transition pour afficher l'image
    setTimeout(() => {
      picture.style.opacity = "1";
      picture.style.pointerEvents = "auto";
    }, 1000);
  });
});
