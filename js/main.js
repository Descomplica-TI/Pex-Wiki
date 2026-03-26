document.addEventListener('DOMContentLoaded', () => {

    // ── View Switcher (Discohook-style isolated navigation) ──────────────────

    const navItems       = document.querySelectorAll('.sidebar-nav-item[data-view]');
    const sections       = document.querySelectorAll('.view-section');
    const menuFundamentos = document.getElementById('menu-fundamentos');
    const menuExecucao   = document.getElementById('menu-execucao');
    const menuMissoes    = document.getElementById('menu-missoes');

    // Mapeamento de views por grupo de menu
    const EXECUCAO_IDS = ['funcionalidades', 'criterios', 'submissao'];
    const MISSAO_IDS   = [
        'missao-pex1', 'missao-pex2', 'missao-pex3', 'missao-pex4',
        'missao-pex5', 'missao-pex6', 'missao-pex7', 'missao-pex8'
    ];

    /**
     * Mostra apenas o grupo de menu correspondente ao viewId ativo.
     * @param {string} viewId
     */
    function switchMenuContext(viewId) {
        const allMenus = [menuFundamentos, menuExecucao, menuMissoes];
        allMenus.forEach(m => { if (m) m.style.display = 'none'; });

        let active;
        if (MISSAO_IDS.includes(viewId))   active = menuMissoes;
        else if (EXECUCAO_IDS.includes(viewId)) active = menuExecucao;
        else                                active = menuFundamentos;

        if (active) active.style.display = 'block';
    }

    if (navItems.length > 0 && sections.length > 0) {

        /**
         * Ativa uma view pelo ID e atualiza view + menu contextual da sidebar.
         * @param {string} viewId
         */
        function activateView(viewId) {
            // 1. Ocultar TODAS as sections
            sections.forEach(sec => sec.classList.remove('is-active'));

            // 2. Exibir APENAS a section correspondente
            const target = document.getElementById(viewId);
            if (target) target.classList.add('is-active');

            // 3. Remover active de todos os itens da sidebar
            navItems.forEach(item => item.classList.remove('active'));

            // 4. Aplicar active ao item correspondente
            const activeLink = document.querySelector(`.sidebar-nav-item[data-view="${viewId}"]`);
            if (activeLink) activeLink.classList.add('active');

            // 5. Trocar o grupo de menu visível na sidebar
            switchMenuContext(viewId);

            // 6. Forçar scroll de volta ao topo
            window.scrollTo(0, 0);
        }

        // Verificar se a URL tem ?view= (vindo de um card da Home)
        const params = new URLSearchParams(window.location.search);
        const viewParam = params.get('view');
        if (viewParam) {
            activateView(viewParam);
        } else {
            // Sem parâmetro: exibir contexto default (Fundamentos)
            switchMenuContext('introducao');
        }

        // Escutar cliques na sidebar
        navItems.forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                const viewId = this.getAttribute('data-view');
                activateView(viewId);
            });
        });
    }

});




// ── Prompt Copy Button ───────────────────────────────────────────────────────
// Função global para que onclick="copyPrompt(this)" funcione dentro das views

function copyPrompt(btn) {
    const card = btn.closest('.prompt-card');
    const body = card ? card.querySelector('.prompt-card-body') : null;

    if (!body) return;

    const text = body.innerText;

    navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'Copiado!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = 'Copiar';
            btn.classList.remove('copied');
        }, 2000);
    }).catch(() => {
        // Fallback para navegadores sem Clipboard API
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        btn.textContent = 'Copiado!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = 'Copiar';
            btn.classList.remove('copied');
        }, 2000);
    });
}
