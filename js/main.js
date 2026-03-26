document.addEventListener('DOMContentLoaded', () => {

    // ── View Switcher (Discohook-style isolated navigation) ──────────────────

    const navItems = document.querySelectorAll('.sidebar-nav-item[data-view]');
    const sections = document.querySelectorAll('.view-section');

    if (navItems.length > 0 && sections.length > 0) {

        /**
         * Ativa uma view pelo seu ID e atualiza o estado visual da sidebar.
         * @param {string} viewId - Valor do atributo [data-view] do link clicado.
         */
        function activateView(viewId) {
            // 1. Ocultar TODAS as sections
            sections.forEach(sec => {
                sec.classList.remove('is-active');
            });

            // 2. Exibir APENAS a section correspondente
            const target = document.getElementById(viewId);
            if (target) {
                target.classList.add('is-active');
            }

            // 3. Remover active de todos os itens da sidebar
            navItems.forEach(item => {
                item.classList.remove('active');
            });

            // 4. Aplicar active ao item clicado
            const activeLink = document.querySelector(`.sidebar-nav-item[data-view="${viewId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }

            // 5. Forçar scroll de volta ao topo sempre que trocar de view
            window.scrollTo(0, 0);
        }

        // Escutar cliques na sidebar
        navItems.forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault(); // Impede navegação por âncora e reload
                const viewId = this.getAttribute('data-view');
                activateView(viewId);
            });
        });
    }

    // ── Card click handler (Index Page) ─────────────────────────────────────

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const href = card.getAttribute('href');
            if (href && href !== '#') {
                window.location.href = href;
            }
        });
    });

});
