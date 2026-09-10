# STATUS — Site de Portfólio devdapraia

**Última atualização:** 2026-09-10
**Fase atual:** Fase 1 — Preservação da base, infraestrutura e preparação do terreno (**em andamento**)
**Próximo passo recomendado:** concluir os itens pendentes da Fase 1 — inicializar o repositório Git com o primeiro commit da base intacta, criar o repositório remoto `devdapraia.github.io`, configurar o GitHub Pages sob HTTPS, criar o branch `rascunho`, extrair CSS/JS para `css/estilo.css` e `js/script.js` (cópia literal, commit isolado) e substituir a navegação `onclick` por âncoras reais. Ver `docs/PLANO.md` → Fase 1.

---

## Estado atual do projeto

Terreno preparado. A estrutura de arquivos, os arquivos vivos e o arquivo de contexto para a IA existem. A base foi copiada intacta para a raiz como arquivo de entrada. **O conteúdo ainda não foi revisado** e o projeto ainda não está versionado em Git nem publicado.

O que foi feito nesta etapa:

- Estrutura de pastas criada: `css/`, `js/`, `imagens/hgs/`, `imagens/hfs/`, `imagens/processo/`, `arquivos/`.
- `index.html` na raiz — cópia **literal e intacta** de `docs/index.html` (verificado byte a byte).
- `favicon.ico` gerado — quadrado, âmbar `#F29441`, tamanhos 16px e 32px.
- `README.md` e `.gitignore` criados.
- `AGENTS.md` criado na raiz.
- `docs/PLANO.md`, `docs/STATUS.md`, `docs/ERROS.md` criados.
- `arquivos/curriculo-joao-victor.pdf` — cópia de `docs/curriculo-joao-victor.pdf` (já conferido quanto a dados sensíveis; não requer tratamento).
- `docs/foto_principal.jpeg` **não** foi copiada: precisa de tratamento (recorte quadrado + WebP + redimensionamento) e será processada na Fase 2 (bloco de abertura).

---

## Fases do PLANO e checklist por fase

Legenda: `[x]` concluído · `[~]` em andamento · `[ ]` não iniciado

### Fase 1 — Preservação da base, infraestrutura e preparação do terreno — `[~]`

- [x] Estrutura de pastas (`css/`, `js/`, `imagens/hgs/`, `imagens/hfs/`, `imagens/processo/`, `arquivos/`)
- [x] `index.html` na raiz = cópia intacta de `docs/index.html`
- [x] `favicon.ico` gerado (âmbar `#F29441`, 16px + 32px)
- [x] `README.md` criado
- [x] `.gitignore` criado
- [x] `AGENTS.md` criado
- [x] `docs/PLANO.md`, `docs/STATUS.md`, `docs/ERROS.md` criados
- [x] `arquivos/curriculo-joao-victor.pdf` copiado de `docs/`
- [ ] Repositório Git local inicializado + **primeiro commit com a base intacta** (ponto de retorno)
- [ ] Repositório remoto `devdapraia.github.io` criado no GitHub (nome exato)
- [ ] Inventário do código da base registrado no `README.md` (PP04)
- [ ] GitHub Pages configurado a partir de `main`, respondendo sob HTTPS
- [ ] Branch `rascunho` criado
- [ ] CSS e JS extraídos para `css/estilo.css` e `js/script.js` (cópia literal, commit isolado, renderização idêntica nos dois temas)
- [ ] Navegação `onclick` substituída por âncoras reais (`href="#id"`, `id` nas seções, `scroll-behavior: smooth`, `scroll-margin-top`); menu com 4 itens (Projetos, Tecnologias, Sobre, Contato)

### Fase 2 — Bloco de abertura e apresentação curta — `[ ]`

- [ ] `docs/foto_principal.jpeg` tratada → `imagens/avatar.png` ou `imagens/avatar.webp` (recorte quadrado, WebP, ~320px, << 150 KB)
- [ ] Novo `h1`, tag do hero e linha de posicionamento (sem mencionar marketing)
- [ ] Selo de credibilidade (sistemas em uso real, sem nomear a pousada)
- [ ] Botões do hero: `.btn-primary` "Ver projetos" → `#projetos`; `.btn-ghost` "Falar comigo" → `#contato`; remover botão GitHub do hero
- [ ] Apresentação curta (2–3 linhas abaixo do hero)
- [ ] Estratégia de fontes (`display=swap` + pilha de fallback + só pesos usados)

### Fase 3 — Cards de projeto (HGS e HFS): estrutura e texto — `[ ]`

- [ ] Remover `.timeline` e `.timeline-item` (marcação + CSS), após verificar que nada mais os usa
- [ ] Componente de card de projeto (base visual de `.sobre-card`, sem cor nova, sem sombra)
- [ ] Componente pílula de tecnologia (elemento 8 do card)
- [ ] Card do HGS — oito elementos + nota Java/Flutter+Dart + botão de apresentação (`.btn-ghost`, WhatsApp)
- [ ] Card do HFS — oito elementos, mesma ordem, sem botão
- [ ] "O que mudou" sem números não apurados, redigido para aceitar número depois

### Fase 4 — Limpeza da autoavaliação de nível — `[ ]`

- [ ] Remover `.stack-item` e `.tech-dot` (marcação + CSS), após verificar que nada mais os usa
- [ ] Confirmar que a pílula de tecnologia cobre o uso restante
- [ ] Nenhuma barra/percentual/estrela/bolinha/ícone graduado remanescente

### Fase 5 — Imagens de tela e ampliação ao toque — `[ ]`

- [ ] Conferência imagem por imagem, em tamanho real, contra dado de terceiro (antes do commit)
- [ ] Conversão WebP, largura máx. 1200px, teto 150 KB/arquivo (recortar se não couber)
- [ ] HGS: 2 capturas (dados fictícios) em `imagens/hgs/`
- [ ] HFS: 2 capturas (valores mascarados) em `imagens/hfs/`
- [ ] Marcação: `width`, `height`, `loading="lazy"`, `alt` sem dado de hóspede/pousada, borda e raio
- [ ] Disposição responsiva (2 colunas → empilhado)
- [ ] Ampliação ao toque: `<a>` para o arquivo (funciona sem JS) + overlay em `js/script.js` (fecha por clique, botão e `Esc`; trava a rolagem do corpo)

### Fase 6 — Bloco de processo de design (Figma) — `[ ]`

- [ ] Seção autocontida `id="processo"` após os cards (rótulo + `h2` + linha curta + 2–3 recortes)
- [ ] Imagens do Figma em `imagens/processo/` com as regras técnicas da Fase 5
- [ ] Marcação e estilo autocontidos (remoção não pode afetar outras seções)

### Fase 7 — Seção de tecnologias e linha de formação — `[ ]`

- [ ] Seção `#tecnologias`: rótulo + `h2` + dois grupos com os itens exatos (C2)
- [ ] Itens como pílulas, sem indicação de nível; títulos de grupo em Space Mono / `--acento`
- [ ] Linha de formação: ADS, conclusão prevista para junho de 2028
- [ ] Verificação de lastro (RN09): toda tecnologia do 1º grupo aparece nos cards

### Fase 8 — Seção "Sobre mim" — `[ ]`

- [ ] Seção `#sobre`: rótulo + `h2` + três parágrafos em texto corrido (sem card, sem imagem)
- [ ] Sequência recepção → problema observado → decisão de estudar ADS e construir
- [ ] Marketing em no máximo uma frase
- [ ] Frase do ERBASE 2026 no 3º parágrafo (sem afirmar aceitação, sem desculpas)
- [ ] Sem menção a Recife nem Porto Digital

### Fase 9 — Seção de contato e conversão — `[ ]`

- [ ] Seção `#contato` em tela cheia com pergunta convidativa
- [ ] WhatsApp em `.btn-primary` — único botão em destaque da seção
- [ ] E-mail, LinkedIn, GitHub e download do currículo (`download`, sem formulário) subordinados
- [ ] Links externos com `target="_blank"` + `rel="noopener noreferrer"`
- [ ] Conferir que `.btn-primary` só aparece em dois pontos da página
- [ ] Testar todos os links, um a um

### Fase 10 — Responsividade e revelação por rolagem — `[ ]`

- [ ] Media queries de `768px` e `480px` (tabela por componente da seção 12.8)
- [ ] Conferência a partir de 360px: sem rolagem horizontal em nenhuma faixa
- [ ] Revelação por rolagem reapontada, com `opacity: 0` aplicado só por JS (ou removida)

### Fase 11 — Desempenho, segurança, qualidade e entrega — `[ ]`

- [ ] Tetos de peso (≤ 150 KB/imagem; ≤ 1,5 MB por página); fontes; sem animação pesada
- [ ] Remover `console.log` e código morto
- [ ] Revisão de segurança na ordem da seção 24.4
- [ ] `rel="noopener noreferrer"` em todos os links de nova aba; sem script de terceiro/cookie/analytics
- [ ] Revisão de qualidade — seção 26, item a item
- [ ] Conferência final em celular real
- [ ] Entrega: `rascunho` → `main`, conferir endereço publicado, atualizar link no LinkedIn e no GitHub

---

## Histórico de atualizações

- **2026-09-10** — Preparação do terreno. Criados `docs/PLANO.md`, `AGENTS.md`, `docs/STATUS.md`, `docs/ERROS.md`, `README.md`, `.gitignore`, `favicon.ico` e a estrutura de pastas. `index.html` copiado intacto para a raiz; currículo copiado para `arquivos/`. Fase 1 iniciada e parcialmente concluída (infraestrutura de arquivos pronta; Git, GitHub Pages, extração de CSS/JS e navegação por âncora ainda pendentes).
