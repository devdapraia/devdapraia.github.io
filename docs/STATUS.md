# STATUS — Site de Portfólio devdapraia

**Última atualização:** 2026-09-10 (2ª atualização do dia — trabalho de código da Fase 1)
**Fase atual:** Fase 1 — Preservação da base, infraestrutura e preparação do terreno (**quase concluída** — resta 1 item, dependente do autor)
**Próximo passo recomendado:** o autor configura o **GitHub Pages a partir de `main`** e confirma **HTTPS ativo** em `devdapraia.github.io` (único item pendente da Fase 1 — não pode ser feito por código). Em paralelo, conferir no Live Server o branch `rascunho` (site idêntico à base + menu navegando por âncora nos dois temas) e, estando OK, integrar `rascunho` → `main`. Só depois do checkpoint da Fase 1 (site publicado idêntico à base, sob HTTPS) começa a **Fase 2 — Bloco de abertura e apresentação curta**. Ver `docs/PLANO.md`.

**Controle de versão:** repositório Git inicializado; primeiro commit `c311b26` com a base intacta (ponto de retorno); remote `origin` = `https://github.com/devdapraia/devdapraia.github.io.git`; branch `main` enviado ao GitHub. `.gitignore` revisado e `.gitattributes` criado para a stack estática. **Branch `rascunho` criado e ativo** — o trabalho de código da Fase 1 está nele, em 3 commits: `9a9e6b1` (extração de CSS/JS), `c0d082f` (navegação por âncora), `<pendente>` (inventário no README + este STATUS). Ainda **não enviado ao GitHub** nem integrado ao `main`. Nenhum segredo, credencial ou dado de terceiro versionado.

---

## Estado atual do projeto

Terreno preparado, **projeto versionado em Git e com backup no GitHub**, e o **trabalho de código da Fase 1 concluído** no branch `rascunho`: CSS e JS extraídos da base por cópia literal e navegação por âncora real no lugar do `onclick` inline. **O conteúdo ainda não foi revisado** (isso é a Fase 2 em diante). O site ainda **não está publicado** pelo GitHub Pages — este é o único item que falta para fechar a Fase 1 e depende do autor (configuração no painel do GitHub).

### O que foi feito no trabalho de código da Fase 1 (branch `rascunho`)

- **Extração de CSS/JS (commit `9a9e6b1`)** — o conteúdo de `<style>` foi para `css/estilo.css` e o de `<script>` para `js/script.js`, por **cópia literal**: nenhuma regra renomeada, reordenada, reformatada ou "otimizada" (FSD 5.2). `index.html` referencia os dois por caminho relativo. Verificado: `index.html` + `css/estilo.css` + `js/script.js` reconstroem a base do commit `c311b26` **byte a byte**. Removidos os `.gitkeep` de `css/` e `js/` (agora com arquivos reais).
- **Navegação por âncora (commit `c0d082f`)** — menu com 4 itens (projetos, tecnologias, sobre, contato), centralizado, sem logo, cada link com `href="#id"` (FSD 5.3). Item "início" saiu do menu. IDs: `#inicio` no hero, `#stack` renomeado para `#tecnologias`, `<footer id="contato">` como alvo provisório até a seção de contato da Fase 9. Botões do hero viraram âncoras reais. **Todo `onclick` inline foi removido** — o botão de tema agora usa `addEventListener` em `js/script.js`. CSS aditivo isolado no fim de `estilo.css` (`scroll-behavior: smooth`, `scroll-margin-top`, âncora estilizada como botão), sem tocar nas regras herdadas (RT02). A navegação passou a **funcionar sem JavaScript** e a alternância de tema continua funcionando nos dois sentidos.
- **Inventário do código da base** registrado no `README.md` (FSD 25/Fase 1 item 3; PP04): seções, estrutura do HTML, organização do CSS, alternância de tema, componentes reaproveitáveis e o que sai. Conclusão: a base **suporta a troca de conteúdo sem retrabalho estrutural**.

### Pendência da Fase 1 (bloqueia o início da Fase 2)

- [ ] **GitHub Pages + HTTPS** — configurar no painel do repositório `devdapraia/devdapraia.github.io` a publicação a partir do branch `main` (pasta raiz) e confirmar que a base responde em `https://devdapraia.github.io` sob HTTPS. Não é possível fazer isso por código/CLI neste ambiente. Depois de integrar `rascunho` → `main` e o Pages publicar, conferir o endereço.

### O que já havia sido feito antes desta etapa:

- Estrutura de pastas criada: `css/`, `js/`, `imagens/hgs/`, `imagens/hfs/`, `imagens/processo/`, `arquivos/`.
- `index.html` na raiz — cópia **literal e intacta** de `docs/index.html` (verificado byte a byte).
- `favicon.ico` gerado — quadrado, âmbar `#F29441`, tamanhos 16px e 32px.
- `README.md` e `.gitignore` criados.
- `AGENTS.md` criado na raiz.
- `docs/PLANO.md`, `docs/STATUS.md`, `docs/ERROS.md` criados.
- `arquivos/curriculo-joao-victor.pdf` — cópia de `docs/curriculo-joao-victor.pdf` (já conferido quanto a dados sensíveis; não requer tratamento).
- `docs/foto_principal.jpeg` **não** foi copiada: precisa de tratamento (recorte quadrado + WebP + redimensionamento) e será processada na Fase 2 (bloco de abertura).
- **`.gitignore` revisado** (rede de segurança para `.env`, chaves, certificados, dumps de banco, logs, lixo de SO/editor) e **`.gitattributes` criado** (fim de linha LF para texto/código; imagens e PDF como binário). Adaptados à stack estática — sem regras de PHP, Node, Python ou banco.
- **Repositório Git inicializado** e **primeiro commit** `c311b26` ("Estrutura inicial do projeto e configuração de controle de versão") com a base intacta — **ponto de retorno** do projeto (FSD 9.1).
- **Conferência anterior ao commit:** `git status` + busca por padrões de segredo (`senha`, `password`, `token`, `api_key`, chaves privadas) — nada encontrado. Nenhum `.env`, credencial, log, dump ou dado de terceiro entrou no repositório. `imagens/hgs/` e `imagens/hfs/` estão vazias (as capturas dos sistemas, ponto de risco real, ainda não existem).
- **Backup no GitHub:** remote `origin` → `https://github.com/devdapraia/devdapraia.github.io.git` (conexão HTTPS); `git push -u origin main` concluído. O repositório remoto foi criado **público** (condição do GitHub Pages gratuito) e **vazio**, sem conflito com os arquivos locais.

---

## Fases do PLANO e checklist por fase

Legenda: `[x]` concluído · `[~]` em andamento · `[ ]` não iniciado

### Fase 1 — Preservação da base, infraestrutura e preparação do terreno — `[~]` (só falta GitHub Pages + HTTPS)

- [x] Estrutura de pastas (`css/`, `js/`, `imagens/hgs/`, `imagens/hfs/`, `imagens/processo/`, `arquivos/`)
- [x] `index.html` na raiz = cópia intacta de `docs/index.html`
- [x] `favicon.ico` gerado (âmbar `#F29441`, 16px + 32px)
- [x] `README.md` criado
- [x] `.gitignore` criado
- [x] `AGENTS.md` criado
- [x] `docs/PLANO.md`, `docs/STATUS.md`, `docs/ERROS.md` criados
- [x] `arquivos/curriculo-joao-victor.pdf` copiado de `docs/`
- [x] `.gitignore` revisado (rede de segurança para segredos) e `.gitattributes` criado (LF/binário), adaptados à stack estática
- [x] Repositório Git local inicializado + **primeiro commit com a base intacta** (`c311b26` — ponto de retorno)
- [x] Conferência de segredos antes do commit (`git status` + busca por padrões sensíveis) — nada versionado
- [x] Repositório remoto `devdapraia/devdapraia.github.io` criado no GitHub (nome exato, público, vazio) + `git push -u origin main`
- [x] Inventário do código da base registrado no `README.md` (PP04)
- [ ] **GitHub Pages configurado a partir de `main`, respondendo sob HTTPS** — *pendente, depende do autor (painel do GitHub); único item que falta na Fase 1*
- [x] Branch `rascunho` criado e ativo
- [x] CSS e JS extraídos para `css/estilo.css` e `js/script.js` (cópia literal, commit isolado `9a9e6b1`, reconstrução byte a byte verificada)
- [x] Navegação `onclick` substituída por âncoras reais (`href="#id"`, `id` nas seções, `scroll-behavior: smooth`, `scroll-margin-top`); menu com 4 itens (projetos, tecnologias, sobre, contato); todo `onclick` inline removido (commit `c0d082f`)

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
- **2026-09-10** — Trabalho de código da Fase 1 (branch `rascunho`). (1) Extração de CSS/JS embutidos para `css/estilo.css` e `js/script.js` por cópia literal, em commit isolado `9a9e6b1`; reconstrução da base do commit `c311b26` verificada byte a byte. (2) Navegação por âncora real no lugar do `onclick` inline, commit `c0d082f`: menu de 4 itens com `href="#id"`, `id` nas seções (`#inicio`, `#tecnologias` no lugar de `#stack`, `#contato` provisório no `<footer>`), botões do hero como âncoras, botão de tema via `addEventListener`, CSS aditivo isolado (`scroll-behavior`, `scroll-margin-top`, âncora-botão) sem tocar em regra herdada. Navegação passou a funcionar sem JavaScript; alternância de tema mantida. (3) Inventário do código da base no `README.md` (PP04) — base suporta a troca de conteúdo sem retrabalho estrutural. **Pendência da Fase 1:** configurar GitHub Pages a partir de `main` e confirmar HTTPS (depende do autor). Nada foi integrado ao `main` nem enviado ao GitHub ainda.
- **2026-09-10** — Controle de versão e backup. `.gitignore` revisado (rede de segurança para `.env`, chaves, certificados, dumps, logs, lixo de SO/editor) e `.gitattributes` criado (LF para texto/código, binário para imagens e PDF), ambos adaptados à stack estática. `git init` + primeiro commit `c311b26` com a base intacta (ponto de retorno). Conferência de segredos antes do commit: nada sensível versionado. Remote `origin` (HTTPS) apontado para `github.com/devdapraia/devdapraia.github.io` e `git push -u origin main` concluído — backup no GitHub feito. Pendências da Fase 1: GitHub Pages + HTTPS, inventário do código no `README.md`, branch `rascunho`, extração de CSS/JS e navegação por âncora.
