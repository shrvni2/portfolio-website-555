import { addEventListeners, animateElements } from './utils.js';

function createNavbar() {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark');
    const container = document.createElement('div');
    container.classList.add('container');
    const navbarBrand = document.createElement('a');
    navbarBrand.classList.add('navbar-brand');
    navbarBrand.href = '#';
    navbarBrand.textContent = 'Portfolio Website';
    const button = document.createElement('button');
    button.classList.add('navbar-toggler');
    button.type = 'button';
    button.dataset.bsToggle = 'collapse';
    button.dataset.bsTarget = '#navbarSupportedContent';
    button.ariaControls = 'navbarSupportedContent';
    button.ariaExpanded = 'false';
    button.ariaLabel = 'Toggle navigation';
    const span = document.createElement('span');
    span.classList.add('navbar-toggler-icon');
    button.appendChild(span);
    const div = document.createElement('div');
    div.classList.add('collapse', 'navbar-collapse');
    div.id = 'navbarSupportedContent';
    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav', 'ms-auto', 'mb-2', 'mb-lg-0');
    const li1 = document.createElement('li');
    li1.classList.add('nav-item');
    const a1 = document.createElement('a');
    a1.classList.add('nav-link', 'active');
    a1.href = '#';
    a1.ariaCurrent = 'page';
    a1.textContent = 'Home';
    li1.appendChild(a1);
    const li2 = document.createElement('li');
    li2.classList.add('nav-item');
    const a2 = document.createElement('a');
    a2.classList.add('nav-link');
    a2.href = '#';
    a2.textContent = 'About';
    li2.appendChild(a2);
    const li3 = document.createElement('li');
    li3.classList.add('nav-item');
    const a3 = document.createElement('a');
    a3.classList.add('nav-link');
    a3.href = '#';
    a3.textContent = 'Contact';
    li3.appendChild(a3);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    div.appendChild(ul);
    container.appendChild(navbarBrand);
    container.appendChild(button);
    container.appendChild(div);
    navbar.appendChild(container);
    return navbar;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('bg-dark', 'text-center', 'text-white', 'p-4');
    const p = document.createElement('p');
    p.textContent = 'Copyright 2024 Portfolio Website. All rights reserved.';
    footer.appendChild(p);
    return footer;
}

export { createNavbar, createFooter };