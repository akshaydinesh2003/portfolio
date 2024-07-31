function scrollDown() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


.fade-in {
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.fade-in-visible {
    opacity: 1;
}
