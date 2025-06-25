// file: animations.js

document.addEventListener('DOMContentLoaded', () => {
    // Function to add a temporary class for animation, ensuring it re-triggers
    const addAnimationClass = (element, className, duration) => {
        // Remove the class first
        element.classList.remove(className);

        // Force a reflow (modern browsers optimize rendering, so sometimes we need to force an update)
        // This line makes the browser recalculate the element's style and layout
        void element.offsetWidth;

        // Add the class back to trigger the animation
        element.classList.add(className);

        // Remove the class after the animation duration
        setTimeout(() => {
            element.classList.remove(className);
        }, duration);
    };

    // Animate Logo on Click
    const logoLink = document.querySelector('nav a img');
    if (logoLink) {
        logoLink.parentElement.addEventListener('click', (event) => {
            // Optional: Prevent default link behavior if you only want the animation
            // event.preventDefault();
            addAnimationClass(logoLink, 'logo-clicked', 500); // Animation for 0.5 seconds
        });
    }

    // Animate Navigation Links on Click
    const navLinks = document.querySelectorAll('.div-links ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Optional: Prevent default link behavior if you only want the animation
            // event.preventDefault();
            addAnimationClass(link, 'nav-link-clicked', 300); // Animation for 0.3 seconds
        });
    });

    // Animate Buttons on Click
    const buttons = document.querySelectorAll('.hero-btn, button[type="submit"]'); // Added submit buttons from contact form
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Optional: Prevent default link behavior if you only want the animation
            // event.preventDefault(); // Be careful with preventing default on submit buttons if you want form submission
            addAnimationClass(button, 'button-clicked', 400); // Animation for 0.4 seconds
        });
    });

    // Animate Footer Icons on Click
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            // Optional: Prevent default link behavior if you only want the animation
            // event.preventDefault();
            addAnimationClass(icon, 'icon-clicked', 300); // Animation for 0.3 seconds
        });
    });
});
