# 🌍 Festive World: US & UK Traditions
### Guia Cultural Comparativo de Feriados e Celebrações nos EUA e Reino Unido

Um site web responsivo, interativo e cultural focado na exploração e comparação aprofundada de celebrações, folclore, origens históricas e feriados tradicionais dos **Estados Unidos (EUA)** e do **Reino Unido (UK)** ao longo das quatro estações do ano.

Este projeto foi construído fielmente a partir do design system do **Google Stitch** (`DESIGN.md`), implementando alta legibilidade editorial, contrastes elegantes e recursos interativos multimídia (áudio nativo, matrizes comparativas e curiosidades históricas).

---

## 🚀 Como Executar o Projeto

1. Basta abrir o arquivo `index.html` em qualquer navegador web moderno (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
2. Não requer instalação de servidores ou dependências adicionais: funciona localmente via `file:///` ou hospedado em qualquer servidor estático (GitHub Pages, Vercel, Netlify).
3. Você também pode acessar diretamente as seções sazonais:
   - `winter.html` → Redireciona diretamente para a seção de Inverno
   - `spring.html` → Redireciona diretamente para a seção de Primavera
   - `summer.html` → Redireciona diretamente para a seção de Verão
   - `autumn.html` → Redireciona diretamente para a seção de Outono

---

## 🎨 Estrutura das Estações e Conteúdo Cultural

### 1. 🏠 Home / Visão Geral (`#home`)
- **Apresentação:** Título editorial e introdução sobre o patrimônio festivo transatlântico.
- **Métricas Culturais:** 4 Estações, 8 Grandes Celebrações, 2 Nações e dezenas de emblemas e pratos típicos.
- **Cards das Quatro Estações:** Cards com imagens em alta definição, resumos das festividades e pílulas de símbolos festivos interativos com modal informativo e áudio nativo.

### 2. ❄️ Winter Traditions: Christmas & Boxing Day (`#winter`)
- **Comparação Paralela:**
  - 🇺🇸 **EUA (Christmas in America):** Encontros familiares entre estados, meias na lareira (*stockings*), biscoitos e leite para o Papai Noel, decorações luminosas suburbanas gigantescas.
  - 🇬🇧 **UK (Christmas & Boxing Day):** Estalo de *Christmas crackers* com coroas de papel na ceia, *mince pies* e pudim flamejante ao conhaque, pronunciamento real do Rei, feriado público de *Boxing Day* (26 de dezembro) com futebol e compras.
- **Recursos Interativos:**
  - Spotlight de tradições e origens históricas (*The Stocking Stuffer Custom* vs *The Origins of Boxing Day*).
  - Alternador de visualização: **Diagrama de Venn** (traços únicos vs núcleo compartilhado) e **Matriz de Contraste**.
  - Cronômetro e sorteador de tópicos para debates culturais.

### 3. 🌸 Spring Occasions: St. Patrick's Day & Easter (`#spring`)
- **Comparação Paralela:**
  - 🇺🇸 **EUA (St. Patrick's Day):** Rio Chicago tingido de verde-esmeralda com fórmula vegetal ecológica, desfiles colossais em NYC e Boston, tradição do trevo (*shamrock*) e comidas típicas como *corned beef and cabbage*.
  - 🇺🇸 & 🇬🇧 **Tradição Compartilhada (Easter):** Caça aos ovos nos jardins (*Egg hunt*), ovos ocos de chocolate no Reino Unido vs coelhinhos nos EUA, tradicional corrida de ovos na Casa Branca (*White House Egg Roll*), *Hot cross buns* e assado de cordeiro no Domingo de Páscoa.
- **Recursos Interativos:**
  - Ticker de símbolos e emblemas da primavera com áudio e história.
  - **Holiday Curiosities:** Fatos históricos e curiosidades sobre a Páscoa na Casa Branca, o consumo de ovos de chocolate no Reino Unido e o tingimento do rio em Chicago.

### 4. ☀️ Summer Events: 4th of July & Notting Hill Carnival (`#summer`)
- **Comparação Paralela:**
  - 🇺🇸 **EUA (4th of July - Independence Day):** Churrascos em família (*cookouts/barbecues*), trajes em vermelho, branco e azul, desfiles cívicos comunitários e grandiosos shows pirotécnicos noturnos.
  - 🇬🇧 **UK (Notting Hill Carnival):** Maior festa de rua da Europa celebrando a herança afro-caribenha britânica, desfile de fantasias com plumas e penas (*Masquerade / 'Mas'*), paredes gigantescas de caixas de som (*Sound systems*) tocando reggae e soca, barracas de *jerk chicken* e comida caribenha.
- **Recursos Interativos:**
  - Gráficos métricos circulares comparando a participação nacional nos EUA (84%) versus os 2+ milhões de pessoas no Notting Hill Carnival em Londres.
  - Alternador de visualização: Grade lado a lado ou visualização empilhada (*Stacked Focus*).
  - Síntese cultural de contrastes: Soberania Cívica vs. Celebração Multicultural, Barbecue vs. Jerk Spices, Fogos de Artifício vs. Sound Systems.

### 5. 🍂 Autumn Gatherings: Halloween, Thanksgiving & Guy Fawkes Night (`#autumn`)
- **Comparação em Três Colunas:**
  - 🎃 **Halloween (Compartilhado EUA/UK):** Origem no Samhain celta, fantasias criativas, escultura de abóboras (*Jack-o'-lanterns*), *trick-or-treating* e brincadeiras tradicionais como morder maçãs na água.
  - 🦃 **Thanksgiving (EUA):** O banquete com peru assado, purê e torta de abóbora, o momento de expressar gratidão pelas bênçãos do ano, a parada de balões gigantes da Macy's e jogos da NFL.
  - 🎆 **Guy Fawkes Night / Bonfire Night (UK):** A conspiração de 1605 da pólvora contra o Parlamento, as fogueiras gigantescas queimando o boneco de palha (*Guy*), fogos de artifício e batatas assadas na brasa com bolo de gengibre (*parkin*).
- **Recursos Interativos:**
  - Matriz comparativa cultural completa com critérios de Origem Histórica, Alimentos, Atividade Central e Atmosfera.
  - **Módulo de Reflexão Cultural:** Pergunta síntese sobre raízes históricas com ângulos de análise e bloco de notas interativo com salvamento local (`localStorage`).
  - Indicador de jornada pelas quatro estações (100%).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico:** Estrutura acessível com tags `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>` e atributos ARIA.
- **CSS3 & Tailwind CSS:** Estilizado estritamente de acordo com os tokens do `DESIGN.md` (paleta navy `#00236f`, crimson `#bb0112`, emerald `#004b1f`, tipografia Outfit e Inter, raios de borda e sombras suaves).
- **Vanilla JavaScript (ES6+):** Código moderno e limpo sem dependências externas:
  - Roteamento por hash (`#home`, `#winter`, etc.) e navegação fluida.
  - **Web Speech API (`speechSynthesis`):** Pronúncia nativa em inglês americano (`en-US`) e britânico (`en-GB`) dos termos e tradições culturais.
  - Cronômetros digitais com start/pause/reset.
  - Bloco de anotações com persistência via `localStorage`.
  - Manipulação de modais acessíveis e notificações toast.
- **Design Totalmente Responsivo & Temas:**
  - **Modo Escuro / Claro (Dark Mode):** Botão na barra de navegação superior para alternar facilmente entre o modo claro e escuro, com suporte automático à preferência do sistema operacional (`prefers-color-scheme`) e persistência via `localStorage`.
  - **Estilos de Impressão Limpos:** Suporte nativo a impressão (`@media print` via `Ctrl+P`) que oculta barras de navegação e controles interativos para gerar apostilas culturais limpas sem poluir a interface visual com botões extras.
  - Desktop: Barra de navegação superior fixa com efeito blur, botões de alternância e grade de comparação em 2 e 3 colunas.
  - Mobile: Barra de navegação inferior estilo aplicativo com safe-area insets e toque otimizado.
