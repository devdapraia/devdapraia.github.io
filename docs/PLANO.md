# PLANO DE CONSTRUÇÃO — Site de Portfólio devdapraia

**Base:** `docs/FSD.md` (seção 25 — Organização Sugerida da Implementação) e `docs/DESIGN.md`.
**Natureza do projeto:** revisão de conteúdo sobre uma base HTML/CSS/JS já aprovada. **A identidade visual não é recriada.** Alterações de estilo são incrementais e aditivas (FSD 1, 3, 25).

## Como usar este plano

- As fases seguem a **ordem de leitura da página** (FSD 25 / Fase 2). Cada fase é pequena e termina com o site **publicável e íntegro** (RT07).
- Ao concluir uma fase, atualizar `docs/STATUS.md` e registrar problemas em `docs/ERROS.md`.
- Regras que valem em **todas** as fases (FSD 25):
  1. Não reescrever nem refatorar o CSS existente — só alterações incrementais.
  2. Paleta, tipografia, menu fixo, rolagem suave, hero com avatar e alternância de tema são **herdados e preservados**.
  3. Nenhuma dependência externa, biblioteca ou framework (RT01). Só Google Fonts.
  4. A alternância de tema precisa continuar funcionando ao fim de **cada** fase (RT03).
  5. Nenhuma imagem entra no repositório sem conferência prévia contra dado de terceiro (FSD 21.4).
  6. Em conflito entre conteúdo novo e tema claro, o **tema escuro é o padrão**; o claro é ajustado depois.
  7. Todo caminho de arquivo é **relativo** (RT06).

## Fases que NÃO se aplicam a este projeto

Registrado para não serem reintroduzidas por inércia (FSD 5, 8, 10, 11, 15, 16, 17, 18, 19, 20, 22, 23):

- **Banco de dados / persistência / migrations** — não há banco (FSD 3, 10, 11).
- **Autenticação, sessão, recuperação de acesso** — site integralmente público (FSD 15).
- **Controle de acesso, RBAC, perfis, matriz de permissões** — todos os visitantes veem o mesmo conteúdo (FSD 8, 16).
- **Auditoria, soft delete, logs de servidor** — não há código de servidor (FSD 17, 18, 19).
- **APIs, integrações, webhooks** — o site só tem links de saída (FSD 23).
- **Painel administrativo / CMS / configurações globais** — conteúdo alterado no código-fonte (FSD 20).

---

## Fase 1 — Preservação da base, infraestrutura e preparação do terreno

**Objetivo:** ter a base versionada e intacta como ponto de retorno, a estrutura de arquivos organizada, a navegação por âncora funcionando e o site publicado idêntico à base. Nada de conteúdo novo ainda (FSD 25 / Fase 1).

### Checklist

- [x] Estrutura de pastas criada: `css/`, `js/`, `imagens/hgs/`, `imagens/hfs/`, `imagens/processo/`, `arquivos/` (FSD 5.4).
- [x] `index.html` na raiz como **cópia literal e intacta** de `docs/index.html` (arquivo de entrada da página única).
- [x] `favicon.ico` gerado — quadrado, âmbar da marca `#F29441`, 16px e 32px (FSD 5.4).
- [x] `README.md` criado com o que é o projeto, como rodar local e como publicar.
- [x] `.gitignore` criado.
- [x] `docs/PLANO.md`, `docs/STATUS.md`, `docs/ERROS.md` criados; `AGENTS.md` criado na raiz.
- [x] `arquivos/curriculo-joao-victor.pdf` — cópia de `docs/curriculo-joao-victor.pdf` (já conferido quanto a dados sensíveis — INSUMOS 1; sem tratamento necessário).
- [ ] Inicializar o repositório Git local e fazer o **primeiro commit com a base intacta** (ponto de retorno — FSD 9.1, 25/Fase 1 item 2). *Depende de decisão do autor.*
- [ ] Criar o repositório remoto **`devdapraia.github.io`** no GitHub, com esse nome exato (FSD 4.3, 25/Fase 1 item 1). *Depende do autor.*
- [ ] Registrar no `README.md` o **inventário do código da base** (seções existentes, estrutura do HTML, organização do CSS, alternância de tema, componentes reaproveitáveis, o que sairá) — FSD 25/Fase 1 item 3; PP04.
- [ ] Configurar **GitHub Pages** a partir do branch `main` e confirmar que a base responde no endereço sob **HTTPS** (FSD 4.3, 25/Fase 1 item 4).
- [ ] Criar o branch **`rascunho`** e passar a trabalhar nele (FSD 4.2, 25/Fase 1 item 5).
- [ ] **Extrair** o CSS embutido para `css/estilo.css` e o JS embutido para `js/script.js`, por **cópia literal**, em **commit isolado**; conferir renderização idêntica nos dois temas (FSD 5.2, 25/Fase 1 item 7). Se a extração se mostrar custosa demais com o código à vista, pode ser abandonada e o arquivo único mantido — decisão registrada no `README.md` (FSD 5.2).
- [ ] **Substituir a navegação `onclick` por âncoras reais**: `href="#id"` nos links, `id` nas seções, `scroll-behavior: smooth` no elemento raiz, `scroll-margin-top` nas seções. Menu passa a ter 4 itens — Projetos, Tecnologias, Sobre, Contato — centralizado, sem logo (FSD 5.3). A navegação deve funcionar **sem JavaScript**.

### Critérios de pronto

- Existe o commit inicial com a base intacta e é possível voltar a ele (FSD 26.2).
- O site publicado está **idêntico** à base original nos dois temas.
- CSS e JS separados do HTML sem reescrita — ou a manutenção do arquivo único está justificada no `README.md`.
- O menu navega por âncora real e funciona sem JavaScript.
- Nenhum estilo embutido (`style="..."`) nem comportamento inline (`onclick="..."`) remanescente na marcação alterada.
- Todos os caminhos internos relativos; nenhum caminho absoluto com barra inicial.
- HTTPS ativo no endereço `devdapraia.github.io`.

### Áreas prováveis de alteração

`index.html`, `css/estilo.css` (novo), `js/script.js` (novo), `README.md`, configuração do repositório e do GitHub Pages.

### Dependências

Ponto de verificação obrigatório: a Fase 2 **só começa** após o site publicado estar idêntico à base, com a estrutura organizada e a navegação por âncora funcionando (FSD 25).

---

## Fase 2 — Bloco de abertura e apresentação curta

**Objetivo:** entregar a mensagem central do site (posicionamento, foto real, selo de uso real) acima da dobra no celular, com caminho claro para Projetos e Contato (FSD Módulo A; 12.2; 25/Fase 2 itens 9–10).

### Checklist

- [ ] Tratar `docs/foto_principal.jpeg` → `imagens/avatar.png` **ou** `imagens/avatar.webp`: recorte quadrado, conversão para WebP, redimensionamento (~320px de lado), peso bem abaixo de 150 KB (FSD 10; INSUMOS 4). `alt` descritivo, **sem** nome da pousada (RN03).
- [ ] Substituir o texto do `h1`, a tag do hero e a linha de posicionamento pelo novo conteúdo. O posicionamento **não menciona marketing** (A1).
- [ ] Adicionar o **selo de credibilidade** — sistemas em uso real, **sem nomear a pousada** (A2, RN03).
- [ ] Botões do hero: `.btn-primary` "Ver projetos" → `#projetos`; `.btn-ghost` "Falar comigo" → `#contato`. **Remover** o botão GitHub do hero (vai para o contato). O hero **não** tem link de WhatsApp (A1, 12.2, E2).
- [x] ~~Apresentação curta — duas ou três linhas logo abaixo do hero (A3).~~ Feita na Fase 2 e **removida em 2026-09-10** (marcação `.apresentacao` + CSS): com a seção "Sobre mim" abrindo a página logo após o hero, o bloco virou redundância. O "quem sou" foi **unificado no card "quem sou"** da seção Sobre (ver Fase 8 e FSD 6/A3).
- [ ] Ajustar os rótulos do menu se ainda não feito na Fase 1. **Ordem do menu (revisada em 2026-09-10 — ver Fase 8 e alteração consciente na seção 1 do FSD):** Sobre, Projetos, Tecnologias, Contato.
- [ ] Estratégia de fontes: `display=swap` já na URL, pilha de fallback de sistema nas famílias CSS, só os pesos usados (FSD 24.3).

### Critérios de pronto

- Posicionamento, foto e selo visíveis **sem rolagem, inclusive no celular** (26.3).
- O hero oferece caminho claro para Projetos e Contato; a ação de WhatsApp **não** está no hero.
- O posicionamento não menciona marketing; o selo não nomeia a pousada.
- O texto do hero aparece antes de as fontes carregarem.
- Alternância de tema continua funcionando.

### Áreas prováveis de alteração

`index.html` (nav + hero), `css/estilo.css` (ajustes incrementais no hero, se necessário), `imagens/avatar.*`.

### Dependências

Texto de posicionamento final (PP03) e apresentação curta — produção de conteúdo. A foto já foi recebida.

---

## Fase 3 — Cards de projeto (HGS e HFS): estrutura e texto

**Objetivo:** apresentar cada sistema como problema resolvido, com a estrutura fixa de oito elementos, idêntica para HGS e HFS, ainda **sem imagens** (FSD Módulo B; 12.3; 25/Fase 2 itens 11–14).

### Checklist

- [ ] **Remover** `.timeline` e `.timeline-item` — marcação e CSS — verificando antes que nada mais os usa (12.11, 25/Fase 2 item 11). A linha do tempo de versões técnicas **não pode existir em nenhum ponto da página** (7.2).
- [ ] Criar o **componente de card de projeto** conforme 12.3: base visual de `.sobre-card` (fundo `--card-bg`, borda 1px `--card-border`, raio `12px`, `padding: 20px` herdado), sem cor nova, sem sombra; espaçamentos internos novos na escala `4·6·8·12·16·24·28·32·40·48`. Largura total da coluna (máx. `780px`); cards **empilhados**, nunca lado a lado.
- [ ] Criar o componente **pílula de tecnologia** (elemento 8 do card) — ver 12.5; será reaproveitado na Fase 7. Sem ícone, sem bolinha, sem barra, sem nível.
- [ ] **Card do HGS** — os oito elementos na ordem fixa (B2), mais a nota "protótipo original em Java; app em construção com Flutter e Dart" abaixo das pílulas, mais o **botão de solicitação de apresentação** (`.btn-ghost`, após o elemento 8) com link `https://wa.me/5581995212456?text=...` e a mensagem específica do HGS (C1, 12.3, RN13).
- [ ] **Card do HFS** — os mesmos oito elementos, mesma ordem, **sem botão** (B3, RN18).
- [ ] "O que mudou" descrito por mudança de rotina, **sem números** não apurados, redigido para aceitar um número depois sem reescrever o parágrafo (B4, RN10).

### Critérios de pronto

- HGS e HFS seguem exatamente a mesma estrutura de oito elementos, na mesma ordem (RN18, 26.4).
- Cada card apresenta o problema antes de qualquer menção a tecnologia; tecnologia é o último elemento (RN08).
- O botão de apresentação aparece **apenas** no card do HGS e tem destino válido (26.4, 26.6).
- Não há linha do tempo de versões técnicas em nenhum ponto da página.
- Nenhum card publicado sem imagem? → nesta fase os cards ainda **não vão ao ar** com o slot de imagem vazio; se for publicar, usar placeholder textual e concluir na Fase 5. (Ver dependência.)
- Alternância de tema continua funcionando; itens de tecnologia legíveis nos dois temas.

### Áreas prováveis de alteração

`index.html` (seção `#projetos`), `css/estilo.css` (componente de card + pílula de tecnologia; remoção do CSS da timeline).

### Dependências

Texto dos oito elementos de cada card (caminho crítico — FSD 28). O **estado "sem imagem" não pode ir ao ar** (12.3): a publicação plena do card depende da Fase 5.

---

## Fase 4 — Limpeza da autoavaliação de nível

**Objetivo:** remover o componente de nível de habilidade da base, deixando o terreno pronto para a seção de tecnologias (FSD 12.11; 25/Fase 2 item 15).

### Checklist

- [ ] **Remover** `.stack-item` e `.tech-dot` (marcação da seção "Stack" e CSS), verificando antes que nada mais os usa (12.11).
- [ ] Confirmar que o componente **pílula de tecnologia** (criado na Fase 3) cobre o uso que resta.
- [ ] Nenhuma barra, porcentagem, estrela, bolinha ou ícone graduado permanece no CSS ou na marcação (RN16).

### Critérios de pronto

- Não há autoavaliação de nível em nenhum ponto do site (RN16, 26.5).
- Não sobra CSS morto dos componentes removidos (26.2).
- Site publicável e íntegro; alternância de tema OK.

### Áreas prováveis de alteração

`index.html` (seção antiga "Stack"), `css/estilo.css`.

### Dependências

A pílula de tecnologia deve existir (Fase 3) antes de remover `.stack-item`.

---

## Fase 5 — Imagens de tela e ampliação ao toque

**Objetivo:** inserir as duas imagens por card, conferidas e comprimidas, e a ampliação ao toque sem biblioteca externa (FSD 12.4; 21; 25/Fase 2 itens 16–17).

### Checklist

- [ ] Conferir **imagem por imagem, em tamanho real**, contra dado de terceiro: nome/documento/telefone de hóspede, valor financeiro real, nome da pousada, nome de funcionário, credencial em tela, aba com endereço interno, notificação do SO (21.4). **Só depois** entra no repositório.
- [ ] Converter para WebP (JPEG como alternativa), largura máx. `1200px`, **teto de 150 KB por arquivo**; se não couber legível, **recortar** a área de interesse (21.2).
- [ ] HGS: duas capturas com dados fictícios em `imagens/hgs/`. HFS: duas capturas com **valores mascarados** em `imagens/hfs/` (B5, RN01, RN02).
- [ ] Marcação de cada imagem: `width` e `height` reais, `loading="lazy"` (imagens abaixo da dobra), `alt` descritivo **sem** dado de hóspede nem nome da pousada, borda 1px `--card-border` e raio `12px` (12.4).
- [ ] Disposição: duas colunas em telas largas, empilhadas em telas estreitas (12.4).
- [ ] Ampliação ao toque: cada imagem envolta por `<a>` para o próprio arquivo (`target="_blank"`, `rel="noopener"`) — **funciona sem JS**; `js/script.js` intercepta o clique e abre overlay próprio (fundo escuro translúcido, imagem até 100% largura / 90% altura, rolagem horizontal quando maior); fecha por clique, botão de fechar e `Esc`; trava a rolagem do corpo enquanto aberto; usa variáveis de tema; só transição de opacidade curta (12.4).

### Critérios de pronto

- Cada card exibe pelo menos uma imagem (meta: duas) do sistema funcionando (26.4).
- Nenhuma imagem contém nome/documento/telefone real de hóspede; HFS sem valores reais (RN01, RN02, 26.4).
- Todas as imagens com `width`, `height` e `alt`; abaixo da dobra com `loading="lazy"`; o avatar **não** usa `lazy` (26.7).
- Ampliação abre e fecha por toque e por `Esc`, legível no celular (26.7).
- Nenhuma imagem acima de 150 KB (26.7).
- Se o JS falhar, o link direto ainda amplia a imagem.

### Áreas prováveis de alteração

`index.html` (elemento 7 dos dois cards), `css/estilo.css` (grade de imagens + overlay), `js/script.js` (overlay), `imagens/hgs/`, `imagens/hfs/`.

### Dependências

Caminho crítico: **as quatro capturas** (PP02). Sem imagem conferida, o card não é publicado (12.3).

---

## Fase 6 — Bloco de processo de design (Figma)

**Objetivo:** mostrar que o app do HGS passou por protótipo e design system, em bloco próprio após os dois cards (FSD 12.6; C3; 25/Fase 2 item 18).

### Checklist

- [ ] Seção autocontida com `id="processo"`, imediatamente após os cards: rótulo Space Mono + `h2` + uma linha curta + 2 a 3 recortes do Figma.
- [ ] Imagens com as mesmas regras técnicas da Fase 5 (dimensões declaradas, `loading="lazy"`, `alt` descritivo, ampliação ao toque) em `imagens/processo/`. Sem dado real.
- [ ] A seção é o **primeiro candidato a corte**: marcação e estilo **autocontidos**, para que a remoção não afete nenhuma outra parte da página (C3, 12.6).

### Critérios de pronto

- Bloco após os dois cards, autocontido, sem quebrar a paridade dos cards (26.5).
- Imagens conferidas, dentro dos tetos de peso.
- Removê-lo não deixaria efeito colateral em outra seção.

### Áreas prováveis de alteração

`index.html` (nova seção `#processo`), `css/estilo.css` (estilo autocontido do bloco), `imagens/processo/`.

### Dependências

Recortes do Figma (prioridade baixa — INSUMOS 3). Se o prazo apertar, esta fase é cortada sem impacto nas demais.

---

## Fase 7 — Seção de tecnologias e linha de formação

**Objetivo:** dar sinal de substância ao público técnico sem afirmação não verificável, em dois grupos por contexto de uso (FSD 12.5, 12.7, C2; 25/Fase 2 item 19).

### Checklist

- [ ] Seção `#tecnologias`: rótulo + `h2` + dois grupos, com título de grupo em Space Mono maiúsculas, cor `--acento`:
  - **"Usei em projetos que estão no ar":** Java, PHP, MySQL, HTML, CSS, JavaScript, Git e GitHub, Figma.
  - **"Estudando agora":** Flutter e Dart, Python.
- [ ] Itens como pílulas (componente da Fase 3): texto curto, `padding` da escala, raio `8px`, borda 1px `--card-border`, fundo `--card-bg`, peso 300, `flex-wrap`, `gap` da escala. Hover: borda `--destaque`, `-2px`. **Não são links.** Sem indicação de nível (RN16).
- [ ] Linha de formação abaixo dos grupos, texto corrido peso 300: "Análise e Desenvolvimento de Sistemas, conclusão prevista para junho de 2028".
- [ ] Verificar o **lastro** (RN09): nenhuma tecnologia de "projetos que estão no ar" pode faltar nos cards. Java tem lastro na nota do card do HGS.

### Critérios de pronto

- Dois grupos com os itens exatos; nenhuma barra/estrela/percentual/nível (26.5).
- Toda tecnologia do primeiro grupo tem lastro nos cards (26.5).
- Curso de ADS e conclusão prevista em uma linha (26.5).
- Legível nos dois temas.

### Áreas prováveis de alteração

`index.html` (seção `#tecnologias`), `css/estilo.css` (título de grupo, se necessário — a pílula já existe).

### Dependências

Listas já definidas (INSUMOS 3, C2). Depende da pílula de tecnologia (Fase 3) e da limpeza da Fase 4.

---

## Fase 8 — Seção "Sobre mim"

**Objetivo:** dar contexto de quem é o autor a quem chega sem repertório prévio. A seção **abre a página** (primeira após o hero — o bloco `.apresentacao` foi descontinuado), então precisa ser **curta** — o visitante tem de chegar rápido aos sistemas (FSD Módulo D/D1; 12.7; 25/Fase 2 item 20; alteração consciente de escopo na seção 1 do FSD).

### Feito antecipadamente (2026-09-10, fora da Fase 8, por decisão do autor)

- [x] **Posição da seção na página** — `#sobre` vem **antes de `#projetos`**, é a primeira seção após o hero. Ordem final: hero → `#sobre` → `#projetos` → `#tecnologias` → `#contato`. O menu foi alinhado a essa ordem: **Sobre · Projetos · Tecnologias · Contato**. Isso **contraria** o FSD original (seções 1, 5.3, 12.1, 13, 25) — tratado como **alteração consciente de escopo** e registrado nesses pontos. *Motivo:* o site também é lido por quem chega sem contexto prévio, e a apresentação antes dos projetos dá esse contexto. Houve um passo intermediário em que `#sobre` chegou a ser movida para depois de `#tecnologias` (alinhando ao FSD antigo); o autor reverteu para antes de `#projetos`.
- [x] **Bloco `.apresentacao` removido e unificado no "quem sou"** — o bloco de apresentação curta abaixo do hero (FSD 6/A3, feito na Fase 2) **saiu da página** (marcação + CSS `.apresentacao` / `.apresentacao p`; `grep` confirmou que nada mais os usa). O texto de "quem sou" foi unificado no card **"quem sou"** da seção Sobre, com esta redação: *"Vim do marketing, do atendimento e da coordenação de equipe. Hoje trabalho na recepção de uma pousada, estudo Análise e Desenvolvimento de Sistemas e construo software a partir dos problemas que vejo travarem a operação todo dia."* *Motivo:* com "Sobre mim" abrindo a página logo após o hero, um bloco separado imediatamente antes seria redundância na mesma dobra.
- [x] **Card "objetivo" — 1ª troca:** texto herdado da base `Estágio no Porto Digital · Recife · Jan 2027` → `Primeira oportunidade na área de desenvolvimento de software` (sem destino nem data; alinhado ao FSD 7.3).
- [x] **Card "objetivo" — 2ª troca (posicionamento marketing + desenvolvimento):** → `Uma posição que una repertório de negócio e capacidade de construir a solução, em desenvolvimento ou em marketing`. A oportunidade pode ser nas duas frentes; a formulação serve às duas sem parecer indefinição (FSD 6/D1, alteração consciente na seção 1).
- [x] **Card "formação" — Marketing ao lado de ADS:** `ADS · 2º período · Anhanguera · Maragogi` → `Análise e Desenvolvimento de Sistemas — conclusão prevista para junho de 2028` **+** `Bacharelado em Marketing — UNIBRA, 2020`. Marketing entra como parte do perfil, não como curiosidade (FSD 6/D1, 10).

### Checklist (restante da fase — redação final)

- [ ] Seção `#sobre`: rótulo + `h2` + **três parágrafos curtos** em texto corrido peso 300, largura de leitura confortável, sem card e sem imagem. **Enxuta** — a seção abre a página.
- [ ] Sequência: **origem em marketing / atendimento / coordenação de equipe** → observação do problema no próprio trabalho → decisão de estudar ADS e construir (D1, revisto).
- [ ] **Formação em Marketing ao lado da de ADS**, como parte do perfil de quem une repertório de negócio e capacidade de construir — **não** como segunda vitrine de trabalhos de comunicação (D1, revisto; alteração consciente na seção 1 do FSD).
- [ ] **Objetivo** dentro dos parágrafos: uma frase que sirva às duas frentes (desenvolvimento e marketing) sem parecer indefinição (D1, revisto).
- [ ] **Sem experiência profissional detalhada** — o portfólio não é currículo; o currículo está para download (D1, revisto; 7.1/7.2).
- [ ] Frase do **ERBASE 2026** no terceiro parágrafo: artigo submetido sobre digitalização de pousadas de pequeno porte, com o feedback dos avaliadores incorporado à evolução do projeto. **Não** afirma nem sugere aceitação; **não** se desculpa nem trata como fracasso (D1, RN17).
- [ ] O texto **não menciona** mudança para Recife nem Porto Digital (D1, 7.3).
- [ ] **Origem/trajetória tem um lugar só** (`AGENTS.md` › Regras de conteúdo). Com o bloco `.apresentacao` removido, a trajetória (marketing/atendimento/coordenação → recepção → ADS → constrói software) vive **só** no primeiro parágrafo desta seção. Conferir que nada no hero repete essa formulação.
- [ ] A grade `.sobre-grid` e os cards provisórios ("quem sou", "formação", "objetivo") saem e dão lugar aos três parágrafos; o conteúdo dos cards (já revisado em 2026-09-10) é a matéria-prima, reescrito em texto corrido.
- [ ] Confirmar o `h2` da seção (hoje **"Minha trajetória"**, provisório desde a Fase 3).
- [ ] **Avaliar o hero** (pedido do autor): a linha "Da recepção ao código: construo software que resolve problema real de operação" serve às duas leituras; conferir, com a seção "Sobre mim" já reescrita, se o conjunto do hero não ficou estreito para o leitor de marketing. Só mexer no hero se a avaliação apontar necessidade — é conteúdo aprovado do FSD 12.2.

### Critérios de pronto

- Três parágrafos **curtos** na sequência definida; a seção abre a página sem atrasar a chegada aos cards (26.5).
- Marketing aparece ao lado da formação em ADS, como parte do perfil, sem virar segunda vitrine (26.5).
- Objetivo serve às duas frentes sem parecer indefinição (26.5).
- Sem experiência profissional detalhada; sem menção a Recife ou Porto Digital (26.5).
- ERBASE em no máximo uma frase, sem afirmar aceitação e sem desculpas (26.5).
- Nenhuma frase ou informação repete, com a mesma formulação, a linha do hero ou o selo do hero (`AGENTS.md` › Regras de conteúdo). Não há mais bloco `.apresentacao`.

### Áreas prováveis de alteração

`index.html` (seção `#sobre` — hoje contém cards provisórios que serão substituídos por texto corrido; hero, só se a avaliação apontar), `css/estilo.css` (só se o texto corrido exigir ajuste incremental).

### Dependências

Texto "Sobre mim" — três parágrafos (caminho crítico — FSD 28).

---

## Fase 9 — Seção de contato e conversão

**Objetivo:** fechamento da página em tela cheia, com o WhatsApp como única ação de conversão em destaque (FSD Módulo E; 12.7; 25/Fase 2 item 21).

### Checklist

- [ ] Seção `#contato` em tela cheia (altura mínima ≈ viewport, conteúdo centralizado verticalmente), com pergunta convidativa.
- [ ] **WhatsApp** em `.btn-primary` — **único botão em destaque visual da seção** — `https://wa.me/5581995212456?text=Olá,%20João.%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.` (E2, RN13).
- [ ] Abaixo, visivelmente subordinados: e-mail `mailto:jvictorna.dev@gmail.com`; LinkedIn `https://linkedin.com/in/joaoadorno`; GitHub `https://github.com/devdapraia`; **download do currículo** — link direto para `arquivos/curriculo-joao-victor.pdf` com atributo `download`, sem formulário (E3, RN14).
- [ ] Links externos com `target="_blank"` e `rel="noopener noreferrer"` (12.7, 24.2).
- [ ] Conferir que o botão âmbar preenchido (`.btn-primary`) aparece em **no máximo dois pontos** da página inteira: "Ver projetos" (hero) e WhatsApp (contato) — RN13.
- [ ] Testar **todos os links, um a um** (24.2, 26.6).

### Critérios de pronto

- WhatsApp é o único botão em destaque visual do contato (26.6).
- `.btn-primary` só nos dois pontos previstos (26.6).
- E-mail, LinkedIn, GitHub e currículo presentes e funcionando; PDF baixa sem formulário (26.6).
- Nenhuma credencial publicada (26.6).

### Áreas prováveis de alteração

`index.html` (nova seção `#contato` / substituição do rodapé atual conforme necessário), `css/estilo.css` (bloco de contato em tela cheia), `arquivos/curriculo-joao-victor.pdf` (já em posição).

### Dependências

Nenhuma bloqueante — valores de contato confirmados (INSUMOS 2). Currículo já copiado na Fase 1.

---

## Fase 10 — Responsividade e revelação por rolagem

**Objetivo:** o site precisa funcionar bem no celular — é como o público principal o abre. Este é o ponto de maior risco técnico (FSD 12.8, 12.10; 25/Fase 2 itens 22–23).

### Checklist

- [ ] Adicionar as media queries de `768px` e `480px` conforme a tabela de comportamento por componente (12.8): `.hero-content` empilha, avatar reduz a `110px`; `h1` `2.8em → 2.2em → 1.9em`; grades de duas colunas passam a uma; paddings laterais `40px → 24px → 16px`; paddings verticais de seção `48px → 32px → 24px`; menu `gap 32px → 16px → 12px` com quebra em duas linhas em vez de estourar.
- [ ] Conferir a partir de **360px**: **nenhuma rolagem horizontal** em nenhuma faixa (12.8, 26.7).
- [ ] Revelação por rolagem (12.10): manter o `IntersectionObserver` (`threshold: 0.1`, atraso escalonado de `120ms`), reapontando o seletor para os cards de projeto, os itens de tecnologia e as imagens do bloco de processo. **O estado `opacity: 0` só pode ser aplicado por JavaScript** — o CSS entregue mantém tudo visível; o script esconde e depois revela. Se o JS falhar, o conteúdo continua visível.
- [ ] Alternativa aceitável, se o ajuste da revelação se mostrar custoso: **remover** a revelação junto com o script correspondente — nenhum critério de aceitação depende dela (12.10).

### Critérios de pronto

- Todas as seções legíveis e utilizáveis no celular, inclusive as imagens (26.7).
- Sem rolagem horizontal a partir de 360px (26.7).
- Com JavaScript desativado, todo o conteúdo permanece visível e a navegação funciona (26.7).

### Áreas prováveis de alteração

`css/estilo.css` (media queries — hoje **não há nenhuma**), `js/script.js` (seletor da revelação).

### Dependências

Depende de todas as seções de conteúdo já existirem (Fases 2–9).

---

## Fase 11 — Desempenho, segurança, qualidade e entrega

**Objetivo:** fechar os requisitos transversais e publicar (FSD Módulo F; 24; 25/Fase 2 itens 24–27; 26).

### Checklist

- [ ] **Desempenho** (24.3): conferir os tetos — nenhuma imagem > 150 KB, peso total da página ≤ 1,5 MB (HTML + CSS + JS + imagens + favicon); `display=swap` e pilha de fallback nas fontes; só os pesos usados; sem animação pesada.
- [ ] Remover **todo `console.log`** e código morto dos componentes retirados (19, 26.2).
- [ ] **Revisão de segurança** na ordem da seção 24.4: todas as imagens em tamanho real → PDF do currículo → busca por credencial e por nome da pousada em todo o repositório, **incluindo comentários de código e histórico** → verificação de todos os links → confirmação de HTTPS ativo.
- [ ] Conferir `rel="noopener noreferrer"` em todos os links que abrem em nova aba (24.2).
- [ ] Confirmar que não há script de terceiro, cookie, analytics ou captura de dado do visitante (24.2, RN15).
- [ ] **Revisão de qualidade**: percorrer os critérios da seção 26, item a item.
- [ ] Conferência final em **celular real** (4.2): legibilidade das imagens, menu, tempo de abertura, dois temas, todos os links.
- [ ] **Entrega**: integrar `rascunho` ao `main`; confirmar publicação automática; conferir o endereço publicado; atualizar o link no LinkedIn e no GitHub (25/Fase 2 item 27).

### Critérios de pronto

- Todos os checklists da seção 26 do FSD marcados.
- Site sob HTTPS, sem dado de terceiro em nenhum commit, sem credencial, sem nome da pousada.
- Currículo conferido quanto a dados pessoais em endereço aberto.
- Link publicado e divulgado dentro do prazo.

### Áreas prováveis de alteração

`index.html`, `css/estilo.css`, `js/script.js`, `README.md`, configuração do repositório; branch `main`.

### Dependências

Todas as fases anteriores concluídas e conferidas.
