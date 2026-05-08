import { createNavbar, createFooter } from './components.js';
import { addEventListeners, animateElements } from './utils.js';

try {
    const navbar = createNavbar();
    const footer = createFooter();
    document.body.appendChild(navbar);
    document.body.appendChild(footer);

    addEventListeners();
    animateElements();
} catch (error) {
    console.error('Error occurred:', error);
}

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

window.addEventListener('resize', () => {
    const navbar = document.querySelector('nav');
    if (navbar) {
        if (window.innerWidth < 768) {
            navbar.classList.add('mobile');
        } else {
            navbar.classList.remove('mobile');
        }
    }
});