const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {  
    link.addEventListener('click', function(event) {
        event.preventDefault();

        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const yOffset = -80; 
            const y = targetSection.getBoundingClientRect().top + window.scrollY + yOffset;
            
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    });
});
