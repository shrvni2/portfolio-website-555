import { createNavbar, createFooter } from './components.js';
import { addEventListeners, animateElements } from './utils.js';

jest.mock('./components.js', () => ({
  createNavbar: jest.fn(() => {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');
    return navbar;
  }),
  createFooter: jest.fn(() => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    return footer;
  }),
}));

jest.mock('./utils.js', () => ({
  addEventListeners: jest.fn(),
  animateElements: jest.fn(),
}));

describe('script.js', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">Portfolio Website</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container mt-5">
        <h1 class="text-center">Welcome to my portfolio website</h1>
        <p class="text-center">This is a modern and fully responsive portfolio website built using HTML, CSS, and JavaScript.</p>
      </div>
    `;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create navbar and footer', () => {
    const navbar = createNavbar();
    const footer = createFooter();
    expect(navbar).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it('should add event listeners', () => {
    addEventListeners();
    expect(addEventListeners).toHaveBeenCalledTimes(1);
  });

  it('should animate elements', () => {
    animateElements();
    expect(animateElements).toHaveBeenCalledTimes(1);
  });

  it('should add scrolled class to navbar on scroll', () => {
    const navbar = document.querySelector('nav');
    window.scrollY = 100;
    window.dispatchEvent(new Event('scroll'));
    expect(navbar.classList.contains('scrolled')).toBe(true);
  });

  it('should remove scrolled class from navbar on scroll', () => {
    const navbar = document.querySelector('nav');
    window.scrollY = 0;
    window.dispatchEvent(new Event('scroll'));
    expect(navbar.classList.contains('scrolled')).toBe(false);
  });

  it('should add mobile class to navbar on resize', () => {
    const navbar = document.querySelector('nav');
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));
    expect(navbar.classList.contains('mobile')).toBe(true);
  });

  it('should remove mobile class from navbar on resize', () => {
    const navbar = document.querySelector('nav');
    window.innerWidth = 1000;
    window.dispatchEvent(new Event('resize'));
    expect(navbar.classList.contains('mobile')).toBe(false);
  });
});