document.addEventListener('DOMContentLoaded', () => {
    let body = document.querySelector('body');
    let menu = document.getElementById('menu');
    let navSection;

    menu.addEventListener('click', () => {
        if (!navSection) {
            navSection = document.createElement('section');
            navSection.classList.add('navMenu');
            body.appendChild(navSection);

            navSection.style.height = "100vh";
            navSection.style.backgroundColor = "#0e0e0e";
            navSection.style.position = 'fixed';
            navSection.style.top = '0';
            navSection.style.left = '0';
            navSection.style.width = '100%';
            navSection.style.opacity = '0';
            navSection.style.transition = 'opacity 0.5s ease';
            navSection.style.zIndex = '100'; // S'assurer que le menu est au-dessus du contenu

            // Création du bouton de fermeture (la croix)
            const closeButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            closeButton.setAttribute("width", "30");
            closeButton.setAttribute("height", "30");
            closeButton.setAttribute("viewBox", "0 0 24 24");
            closeButton.setAttribute("fill", "none");
            closeButton.setAttribute("stroke", "#0e0e0e");
            closeButton.style.position = 'absolute';
            closeButton.style.top = '20px';
            closeButton.style.right = '20px';
            closeButton.style.cursor = 'pointer';
            closeButton.style.zIndex = '200'; // Ajout d'un z-index élevé pour s'assurer que la croix est au-dessus
            closeButton.style.pointerEvents = 'auto'; // S'assurer que le bouton est cliquable

            // Les lignes pour la croix
            const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line1.setAttribute("x1", "4");
            line1.setAttribute("y1", "20");
            line1.setAttribute("x2", "20");
            line1.setAttribute("y2", "4");
            line1.setAttribute("stroke-width", "2");
            line1.setAttribute("stroke", "#ffffff");
            closeButton.appendChild(line1);

            const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line2.setAttribute("x1", "4");
            line2.setAttribute("y1", "4");
            line2.setAttribute("x2", "20");
            line2.setAttribute("y2", "20");
            line2.setAttribute("stroke-width", "2");
            line2.setAttribute("stroke", "#ffffff");
            closeButton.appendChild(line2);

            // Effet de hover (couleur et rotation)
            closeButton.addEventListener('mouseover', () => {
                line1.setAttribute('stroke', '#D9D9D9AD');
                line2.setAttribute('stroke', '#D9D9D9AD');
                closeButton.style.transform = 'rotate(90deg)';
                closeButton.style.transition = '.7s';
            });

            closeButton.addEventListener('mouseout', () => {
                line1.setAttribute('stroke', '#ffffff');
                line2.setAttribute('stroke', '#ffffff');
                closeButton.style.transform = 'rotate(0deg)';
            });

            navSection.appendChild(closeButton);

            let ul = document.createElement('ul');
            ul.classList.add('navUl');
            navSection.appendChild(ul);

            for (let i = 0; i < 3; i++) {
                let li = document.createElement('li');
                ul.appendChild(li);

                li.style.width = '100%';
                li.style.height = '33.33%';
                li.style.padding = '0';
                li.style.display = 'flex';
                li.style.alignItems = 'center'; 
                li.style.justifyContent = 'center'; 
                li.style.position = 'relative'; 
                li.style.borderBottom = '1px solid rgba(255, 255, 255, .2)';

                li.style.overflow = 'hidden';
                li.style.zIndex = '1'; 
                li.style.transition = 'color 0.3s';

                let a = document.createElement('a');
                if (i === 0) {
                    a.id = 'home'; 
                    a.textContent = 'Home';
                    a.href = '/Portfolio/App/index.html';
                } else if (i === 1) {
                    a.id = 'nav_project'; 
                    a.textContent = 'Projects';
                    a.href = '/Portfolio/App/projects.html';
                } else if (i === 2) {
                    a.id = 'apropos'; 
                    a.textContent = 'About';
                    a.href = '/Portfolio/App/about.html';
                }

                a.style.textDecoration = 'none';
                a.style.color = '#ffffff';
                a.style.fontSize = '3.5rem';
                a.style.fontFamily = '"Helvetica Neue"';
                a.style.textTransform = 'uppercase';
                a.style.position = 'relative'; 
                a.style.zIndex = '2'; 

                a.style.display = 'flex'; 
                a.style.alignItems = 'center'; 
                a.style.justifyContent = 'center';
                a.style.width = '90%';
                a.style.height = '100%'; 

                li.appendChild(a);

                li.addEventListener('mouseover', () => {
                    a.style.color = '#D9D9D9AD'; 
                    a.style.transition = '.7s'
                });

                li.addEventListener('mouseout', () => {
                    a.style.color = '#ffffff'; 
                });
            }

            ul.style.padding = '0';
            ul.style.height = '100vh';
            ul.style.display = 'flex';
            ul.style.flexDirection = 'column';
            ul.style.alignItems = 'center';
            ul.style.justifyContent = 'space-evenly';
            ul.style.listStyle = 'none';

            requestAnimationFrame(() => {
                navSection.style.opacity = '1';
            });

            // Action de fermeture au clic sur le bouton de fermeture
            closeButton.addEventListener('click', () => {
                navSection.style.opacity = '0';
                setTimeout(() => {
                    body.removeChild(navSection);
                    navSection = null;
                }, 500);
            });
        } else {
            navSection.style.opacity = '1';
        }
    });
});