document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const zoomElements = document.querySelectorAll('.zoom-in');
    const slideElements = document.querySelectorAll('.slide-in-left'); 

    const showElements = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        fadeElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('fade-in-visible');
            } else {
                element.classList.remove('fade-in-visible');
            }
        });

        zoomElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('zoom-in-visible');
            } else {
                element.classList.remove('zoom-in-visible');
            }
        });

        slideElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('slide-in-left-visible');
            } else {
                element.classList.remove('slide-in-left-visible');
            }
        });
    };

    window.addEventListener('scroll', showElements);
    showElements(); 
});
