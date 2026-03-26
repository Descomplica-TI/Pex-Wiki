document.addEventListener('DOMContentLoaded', () => {
    
    // Sidebar active item scroll-spy
    const sections = document.querySelectorAll('.main-content h1, .main-content h2');
    const navItems = document.querySelectorAll('.sidebar-nav-item');

    if (sections.length > 0 && navItems.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= (sectionTop - 60)) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-target') === current) {
                    item.classList.add('active');
                }
            });
        });

        // Smooth scrolling when clicking on sidebar links
        navItems.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('data-target');
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 40,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Interactive Card Mock - just to show cursor pointer
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Se for um link de verdade, o HTML fará a navegação
            const href = card.getAttribute('href');
            if(href && href !== '#'){
                window.location.href = href;
            }
        });
    });
});
