document.addEventListener('DOMContentLoaded', () => {

    // ── View Switcher (Discohook-style isolated navigation) ──────────────────

    const navItems       = document.querySelectorAll('.sidebar-nav-item[data-view]');
    const sections       = document.querySelectorAll('.view-section');
    const menuFundamentos = document.getElementById('menu-fundamentos');
    const menuExecucao   = document.getElementById('menu-execucao');
    const menuMissoes    = document.getElementById('menu-missoes');

    // Mapeamento de views por grupo de menu
    const EXECUCAO_IDS = ['funcionalidades', 'criterios', 'submissao', 'modelos'];
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

// ── ODS Modal Logic ────────────────────────────────────────────────────────
const odsData = [
  {
    title: "1. Erradicação da Pobreza",
    desc: "Acabar com a pobreza em todas as suas formas, em todos os lugares.",
    tech: "Desenvolver um app de mapeamento e logística para conectar doadores locais diretamente a famílias vulneráveis cadastradas por uma ONG."
  },
  {
    title: "2. Fome Zero e Agricultura Sustentável",
    desc: "Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição.",
    tech: "Sistema web para controle de estoque de bancos de alimentos, notificando supermercados sobre produtos próximos do vencimento que podem ser doados."
  },
  {
    title: "3. Saúde e Bem-Estar",
    desc: "Assegurar uma vida saudável e promover o bem-estar para todos.",
    tech: "Criação de um sistema de triagem digital ou agendamento online para reduzir filas em postos de saúde (SUS) de bairros periféricos."
  },
  {
    title: "4. Educação de Qualidade",
    desc: "Assegurar a educação inclusiva e equitativa e de qualidade.",
    tech: "Plataforma de tutoria gamificada ou software de acessibilidade para ajudar no ensino de matemática em escolas públicas."
  },
  {
    title: "5. Igualdade de Gênero",
    desc: "Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.",
    tech: "Desenvolvimento de um portal seguro e anônimo para denúncias, ou uma plataforma de mentoria para conectar meninas do ensino médio a mulheres na área de TI."
  },
  {
    title: "6. Água Potável e Saneamento",
    desc: "Assegurar a disponibilidade e gestão sustentável da água e saneamento.",
    tech: "Dashboard com painéis de visualização de dados abertos da prefeitura para monitorar áreas com falta de saneamento básico."
  },
  {
    title: "7. Energia Limpa e Acessível",
    desc: "Assegurar o acesso confiável, sustentável, moderno e a preço acessível à energia.",
    tech: "Uma calculadora web que mostre a pequenos comerciantes o quanto eles economizariam migrando para matrizes energéticas ou trocando equipamentos ineficientes."
  },
  {
    title: "8. Trabalho Decente e Crescimento Econômico",
    desc: "Promover o crescimento econômico e trabalho decente para todos.",
    tech: "Plataforma digital estilo 'freelancer' focada apenas em conectar prestadores de serviço de uma comunidade carente aos moradores do próprio bairro."
  },
  {
    title: "9. Indústria, Inovação e Infraestrutura",
    desc: "Construir infraestruturas resilientes, promover a industrialização inclusiva e fomentar a inovação.",
    tech: "Criar um software de gestão open-source (código aberto) ou automação simples (ex: bots de WhatsApp) para digitalizar microempreendedores (MEIs)."
  },
  {
    title: "10. Redução das Desigualdades",
    desc: "Reduzir a desigualdade dentro dos países e entre eles.",
    tech: "Desenvolvimento de plugins ou extensões de acessibilidade (leitores de tela, alto contraste) para sites de associações de bairro."
  },
  {
    title: "11. Cidades e Comunidades Sustentáveis",
    desc: "Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.",
    tech: "App colaborativo onde moradores podem reportar e geolocalizar focos de lixo irregular, enviando dados para a associação de moradores."
  },
  {
    title: "12. Consumo e Produção Responsáveis",
    desc: "Assegurar padrões de produção e de consumo sustentáveis.",
    tech: "Sistema de economia circular (app de trocas) onde moradores podem trocar itens que não usam mais, reduzindo o descarte."
  },
  {
    title: "13. Ação Contra a Mudança Global do Clima",
    desc: "Tomar medidas urgentes para combater a mudança climática e seus impactos.",
    tech: "Instalação de sensores de baixo custo (IoT/Arduino) interligados a um sistema web para monitorar riscos de alagamento ou qualidade do ar numa comunidade."
  },
  {
    title: "14. Vida na Água",
    desc: "Conservação e uso sustentável dos oceanos e dos recursos marinhos.",
    tech: "Banco de dados e site institucional para uma ONG litorânea catalogar espécies locais ou organizar mutirões de limpeza de praias."
  },
  {
    title: "15. Vida Terrestre",
    desc: "Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres.",
    tech: "App para catalogação de flora nativa de um parque municipal, servindo como ferramenta de educação ambiental para escolas."
  },
  {
    title: "16. Paz, Justiça e Instituições Eficazes",
    desc: "Promover sociedades pacíficas e instituições eficazes e transparentes.",
    tech: "Portal de Transparência Cidadã, compilando e traduzindo dados de gastos de vereadores locais em gráficos fáceis de entender (DataViz)."
  },
  {
    title: "17. Parcerias e Meios de Implementação",
    desc: "Fortalecer os meios de implementação e revitalizar a parceria global.",
    tech: "Plataforma de 'matchmaking' tecnológico (tipo um Tinder de ONGs) que conecta estudantes de TI que precisam fazer o PEX com ONGs que precisam de software."
  }
];

document.addEventListener('DOMContentLoaded', () => {
    const odsCards = document.querySelectorAll('.ods-card');
    const modal = document.getElementById('ods-modal');
    if (!modal || odsCards.length === 0) return;

    const modalTitle = document.getElementById('ods-modal-title');
    const modalDesc = document.getElementById('ods-modal-desc');
    const modalTech = document.getElementById('ods-modal-tech');
    const closeBtn = document.getElementById('ods-modal-close');

    odsCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const data = odsData[index];
            if(data) {
                modalTitle.textContent = data.title;
                modalDesc.textContent = data.desc;
                modalTech.textContent = data.tech;
                modal.classList.remove('hidden');
            }
        });
    });

    const closeModal = () => modal.classList.add('hidden');
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });
});
