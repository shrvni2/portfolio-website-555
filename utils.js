// utils.js
export function addEventListeners() {
    try {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler) {
            navbarToggler.addEventListener('click', () => {
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse) {
                    navbarCollapse.classList.toggle('show');
                }
            });
        }

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach((navLink) => {
            navLink.addEventListener('click', (event) => {
                event.preventDefault();
                const targetId = event.target.getAttribute('href');
                if (targetId) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    } catch (error) {
        console.error('Error occurred while adding event listeners:', error);
    }
}

export function animateElements() {
    try {
        const elementsToAnimate = document.querySelectorAll('.animate');
        elementsToAnimate.forEach((element) => {
            const animationClass = element.getAttribute('data-animation');
            if (animationClass) {
                element.classList.add(animationClass);
            }
        });
    } catch (error) {
        console.error('Error occurred while animating elements:', error);
    }
}