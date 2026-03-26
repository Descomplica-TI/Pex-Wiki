# PEX Wiki — Ciência da Computação (Descomplica)

## 🎯 Sobre o Projeto
O **PEX Wiki** é um hub de conhecimento simplificado e moderno, desenvolvido especialmente para os alunos de Ciência da Computação da Faculdade Descomplica. O objetivo é centralizar tudo o que você precisa saber para planejar, executar e entregar todos os seus Projetos de Extensão (PEX) das disciplinas sem dores de cabeça.

Tendo uma leitura direta e sem a burocracia dos manuais, ele reúne todas as ferramentas cruciais, as dicas práticas e foca totalmente em dar exemplos focados na nossa área de **TI**. Tudo isso num site extremamente rápido que muda de tela de forma instantânea através do nosso sistema ágil de *Views*.

![Página Inicial Exemplo](assets/Exemplo%20PEX.png)

## 💡 Recursos Principais
- **Design System Blurple Gamer:** Um estilo escuro e minimalista (Dark Mode nativo) que lembra diretamente e integra bem com as ferramentas de uso principal de tecnologia, como Discord.
- **Gestão de Prazos e Metas:** Resumo prático das 40 horas do projeto e as consequências da perda da Entrega Única Final.
- **Escopo 100% Tech:** Projetos de *Gestão*, *Sites*, *Inclusão Digital* e *Automação* explicados em 4 Passos lógicos de desenvolvimento (Diagnóstico, Arquitetura, Validação e Deploy).
- **Banco de Dados dos ODS:** O PEX é obrigatório focar em impacto social amparado num dos 17 Objetivos da ONU. Criamos uma grade visual com 17 botões interativos das ODS abrindo **Modais Dinâmicos** detalhando como aplicar tecnologia (Apps, Softwares, Bancos de Dados) em cada um deles!
- **Entregáveis Mastigados:** Um checklist passo-a-passo e interativo (que o usuário marca na própria wiki) com as documentações corretas, templates (em breve), turnitin e o formato exigido (ABNT).
- **Ecossistema Linkado:** Atalhos flutuantes em cartões para a [Linktree do PexyAI](https://linktr.ee/PexyAI) (IA criada pelo Carlos Henrique para PEX), e acesso direto à Comunidade no Discord do curso.

### ODS Interativo
O catálogo de impacto social usa Modal JavaScript dinâmico para renderizar o objetivo ideal.

![Exemplo ODS Modal](assets/Exemplo%20ODS.png)

## 📱 Responsividade Extrema
Como muitas vezes acessamos para uma leitura rápida no meio de outra atividade, a Wiki foi desenhada 'Mobile First'. A experiência de rolagem, cliques e checklists continua robusta na tela do celular, organizando a leitura e a experiência visual em colunas ajustáveis dinamicamente.

<p align="center">
  <img src="assets/Exemplo%20Celular%201.png" alt="Exemplo Navegacao Celular 1" width="300" style="margin-right: 20px;"/>
  <img src="assets/Exemplo%20Celular%202.png" alt="Exemplo Navegacao Celular 2" width="300"/>
</p>

## 🛠️ Stack Tecnológica
Sem dependências gigantes, sem node_modules infinitas. Direto ao ponto:
- **HTML5:** Semântico e fragmentado de forma contextual em tags `<section>` (as Views do site).
- **CSS3 Vanilla:** Uso extensivo de variáveis `--colors` para design tokens, Grid e Flexbox com breakpoint de `768px` para telas pequenas, modais responsivos com propriedades `.hidden` combinando `transform scale` e `.opacity` para transições CSS puras maravilhosas.
- **JavaScript (Vanilla):** Roteador simplificado para interceptar requisições, `URLSearchParams` para leitura e manipulação da DOM limpando e atualizando *Event Listeners* ativamente para trocar de páginas (Views) dentro do mesmo index.


### Gestão e Carga Horária
Com alertas (`Callouts`) cruciais e caixas lógicas delimitadas que auxiliam e atraem a atenção imediata.

![Exemplo Carga Horaria](assets/Exemplo%20Carga%20Horária.png)

## 🚀 Como Executar ou Levantar a Wiki Localmente
Não necessita compilação de projeto ou instalação de pacotes (NPM).
1. Clone este repositório usando o terminal:
   ```bash
   git clone https://github.com/zAstergun/pex-wiki.git
   ```
2. Abra a raiz do projeto clonado e dê um duplo-clique no arquivo `index.html` para rodar no navegador (Chrome, Edge, Firefox...).
3. Alternativamente, para explorar e alterar o código de forma nativa e viva, abra na IDE (como VS Code) e rode um `Live Server` port na pasta principal.

## 🤝 Como Contribuir
Qualquer um é bem-vindo a adicionar um erro de material da faculdade, uma alteração em escopo de PEX por semestre, ou injetar os PDFs pendentes de modelos no componente de **Arquivos disponíveis**. Basta abir um *Pull Request* e ajudar a salvar a noite de centenas de alunos!

## 📜 Créditos
Wiki baseada na documentação aberta elaborada exaustivamente por Carlos Henrique (PexyAI) e projetada e compilada pelo [Aster](https://github.com/zAstergun).

Para dúvidas sobre Ciências da Computação, ou os projetos, [Junte-se à Comunidade do Discord](https://discord.gg/AEvAXJ28WQ)!
