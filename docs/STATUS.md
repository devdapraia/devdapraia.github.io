# STATUS — Site de Portfólio devdapraia

**Última atualização:** 2026-09-10 (5ª atualização do dia — ajustes de conteúdo do autor sobre a Fase 3)
**Fase atual:** Fase 3 — Cards de projeto (HGS e HFS): estrutura e texto (**construída no branch `rascunho`**, aguardando conferência visual do autor)
**Próximo passo recomendado:** o autor confere no Live Server o branch `rascunho` (seção `#projetos` com os dois cards de projeto — HGS e HFS — na estrutura fixa de oito elementos; pílulas de tecnologia; botão "Solicitar apresentação do sistema" só no HGS) nos dois temas e, se possível, no celular. Estando OK, o fluxo de publicação (push do `rascunho`, merge em `main`, push do `main`, retorno ao `rascunho`) é executado. Depois começa a **Fase 4 — Limpeza da autoavaliação de nível**. Ver `docs/PLANO.md`.

**Pendência real registrada (não bloqueia a conclusão da Fase 3):** os cards **ainda não vão ao ar em estado pleno** — o elemento 7 (imagens de tela) está com um **placeholder textual temporário** ("Imagens do sistema em funcionamento — em preparação"). As quatro capturas conferidas e comprimidas entram na **Fase 5**, quando o placeholder é substituído. Até lá, a seção `#projetos` fica publicável e íntegra, mas incompleta por decisão de sequência do `docs/PLANO.md`.

**Pendência conhecida herdada da Fase 1:** o **GitHub Pages a partir de `main` + HTTPS** em `devdapraia.github.io` depende de configuração no painel do GitHub (não é possível por código). Enquanto não confirmado, o site não está publicado — a conferência é feita localmente pelo Live Server.

**Ressalva da Fase 2 (não bloqueia a conclusão):** o hero herdado da base **não empilha em telas estreitas** (a base não tem nenhuma media query). O layout do hero no celular — avatar acima do texto, `h1` reduzido, paddings menores — é entregue na **Fase 10 (Responsividade)**, conforme a sequência do `docs/PLANO.md`. Até lá, a conferência "sem rolagem no celular" (critério 26.3) fica parcialmente pendente da Fase 10. No desktop o hero está correto.

**Controle de versão:** repositório Git inicializado; primeiro commit `c311b26` com a base intacta (ponto de retorno); remote `origin` = `https://github.com/devdapraia/devdapraia.github.io.git`. O trabalho de código da Fase 1 **já foi integrado ao `main`** pelo merge `5a0c80f` e enviado ao GitHub (`origin/main` e `origin/rascunho` sincronizados). O branch `rascunho` foi adiantado até `5a0c80f` e a Fase 2 está sendo construída sobre ele. `.gitignore` revisado e `.gitattributes` criado para a stack estática. Nenhum segredo, credencial ou dado de terceiro versionado.

---

## Estado atual do projeto

Terreno preparado, **projeto versionado em Git e com backup no GitHub**, **Fase 1 concluída** (CSS/JS extraídos, navegação por âncora, base intacta no `main`), **Fase 2 concluída** (bloco de abertura: foto real, posicionamento, selo, botões, apresentação curta) e **Fase 3 construída** no branch `rascunho`: a seção `#projetos` deixou de ser uma linha do tempo de versões técnicas e passou a apresentar **dois cards de projeto** — HGS e HFS — na estrutura fixa de oito elementos, idêntica entre os dois; foi criada a **pílula de tecnologia** (sem ícone, barra ou nível), reaproveitável na Fase 7; o card do HGS tem a nota "protótipo original em Java; app em construção com Flutter e Dart" e o botão "Solicitar apresentação do sistema" (`.btn-ghost`, WhatsApp). As seções `#sobre` e `#tecnologias` ainda têm o conteúdo da base — serão revisadas nas fases seguintes. O site continua **não publicado** pelo GitHub Pages (pendência herdada da Fase 1, depende do autor).

### O que foi feito na Fase 3 (branch `rascunho`)

- **Linha do tempo removida** — `.timeline` / `.timeline-item` saíram da marcação (`index.html`, seção `#projetos`) e do CSS (`css/estilo.css`, bloco `TIMELINE` inteiro). Confirmado por `grep` que nada mais os usa em arquivos vivos. **Não há mais linha do tempo de versões técnicas em nenhum ponto da página** (RN, 26.4, 7.2). O `IntersectionObserver` de `js/script.js` que apontava para `.timeline-item` **foi mantido intacto** — a decisão de reapontar o seletor ou remover a revelação por rolagem é da **Fase 10** (`docs/PLANO.md`); hoje ele apenas observa uma lista vazia, sem efeito.
- **Componente de card de projeto** (`css/estilo.css`, bloco aditivo "FASE 3") — `.projeto-card` reaproveita a base visual de `.sobre-card`: fundo `--card-bg`, borda 1px `--card-border`, raio `12px`, `padding: 20px` (valor herdado, não ajustado à escala — FSD 12.3). Sem cor nova, sem sombra. Espaçamentos internos novos na escala (`6 · 8 · 16 · 24`). Cards ocupam a largura total da coluna (máx. `780px`) e são **empilhados** (`.projeto-card + .projeto-card { margin-top: 24px }`), nunca lado a lado.
- **Componente pílula de tecnologia** — `.tech-lista` (`<ul>` com `list-style: none`, `flex-wrap`, `gap: 8px`) + `.tech-pill` (`<li>`: `padding: 6px 12px`, raio `8px`, borda 1px `--card-border`, fundo `--card-bg`, peso 300). Hover: borda `--destaque`, `translateY(-2px)`. **Sem ícone, bolinha, barra, percentual ou nível** (RN16). Os itens **não são links**. Será reaproveitado na seção de tecnologias (Fase 7).
- **Card do HGS** — oito elementos na ordem fixa (B2): (1) nome `HGS — Hotel Governance System`; (2) uma linha do que é; (3) problema anterior; (4) o que faz; (5) o que mudou na rotina — **sem números**, redigido para aceitar um número depois sem reescrever o parágrafo (RN10); (6) onde está hoje (em produção; app em construção); (7) **placeholder textual** das imagens (Fase 5); (8) pílulas `PHP · MySQL · HTML · CSS · JavaScript · Git e GitHub · Figma` + nota "protótipo original em Java; app em construção com Flutter e Dart". Após o elemento 8, o botão **"Solicitar apresentação do sistema"** — `.btn-ghost`, `https://wa.me/5581995212456?text=…` com a mensagem específica do HGS, `target="_blank"` + `rel="noopener noreferrer"`.
- **Card do HFS** — os **mesmos oito elementos, na mesma ordem, com os mesmos rótulos** (B3): nome `HFS — Hotel Finance System`; uma linha do que é; problema; o que faz; o que mudou (sem números); onde está hoje (em uso, em fase de testes); placeholder de imagens; pílulas `PHP · MySQL · HTML · CSS · JavaScript · Git e GitHub`. **Sem nota e sem botão** (RN18 preservada — a nota e o botão não são elementos da estrutura de oito, são conteúdo extra previsto só para o HGS).
- **Rótulo e título da seção** — `section-label` passou de "projeto principal" para "projetos"; `h2` passou de "Hotel Governance System" para "Dois sistemas em uso real" (consistente com o selo do hero). **Textos propostos** — a redação final dos oito elementos é do autor (PP03); ajustar direto na marcação.
- **CSS aditivo** — bloco "FASE 3" no fim de `css/estilo.css`; tudo consome variável de tema e funciona nos dois temas (RT02/RT04/RT05). Única remoção de CSS: o bloco `TIMELINE` (remoção autorizada — FSD 12.11). Nenhuma regra herdada foi reescrita. Chaves balanceadas (66/66).
- **`.btn-primary` continua aparecendo em um único ponto** (o "Ver projetos" do hero) — o botão do HGS é `.btn-ghost` (RN13). Na Fase 9 entra o segundo e último `.btn-primary` (WhatsApp do contato).

### Ajustes de conteúdo pedidos pelo autor (10/09/2026, após a Fase 3)

Nova regra registrada em `AGENTS.md` › **Regras de conteúdo**: *nenhuma frase, título ou informação aparece duas vezes com a mesma formulação em pontos diferentes da página.* Três repetições corrigidas:

- **Origem na recepção** — contava a mesma história no bloco de apresentação (abaixo do hero) e no card "quem sou" da seção Sobre. Mantido só no bloco de apresentação. O card "quem sou" será **reescrito na Fase 8** com outro recorte (trajetória, o que se estuda hoje, para onde se vai), sem recontar a origem na recepção — checklist adicionado ao `docs/PLANO.md` › Fase 8.
- **Título da seção Sobre** — era "Da recepção ao código", repetindo ao pé da letra a linha de posicionamento do hero. Trocado para **"Minha trajetória"** (provisório; a Fase 8 confirma).
- **"Dois sistemas em uso real"** — aparecia no selo do hero, no fim do parágrafo de apresentação e no título da seção Projetos. Retirada do parágrafo de apresentação (a última frase "Hoje mantenho dois sistemas que a equipe usa de verdade." saiu). Mantida no selo do hero e no título da seção Projetos.

Arquivos tocados nesses ajustes: `index.html` (parágrafo de apresentação, `h2` de `#sobre`), `AGENTS.md` (nova seção "Regras de conteúdo"), `docs/PLANO.md` (Fase 8).

### O que foi feito na Fase 2 (branch `rascunho`)

- **Foto real tratada** — `docs/foto_principal.jpeg` (1170×1438) recortada em quadrado enquadrando rosto e ombros, redimensionada para 320×320 e convertida para WebP (qualidade 90): `imagens/avatar.webp`, **12,6 KB** (teto por arquivo: 150 KB). Ferramenta local usada só para o tratamento: Pillow (Python) — **não é dependência do site**. `imagens/.gitkeep` removido (a pasta agora tem arquivo real).
- **Hero revisado** (`index.html`): `<img>` aponta para `imagens/avatar.webp` com `width`/`height` declarados (320×320) e **sem `loading="lazy"`** (o avatar não usa lazy — FSD 21.2); `alt="Retrato de João Adôrno"` (sem nome da pousada). Novo `h1` mantido ("João **Adôrno**"), nova linha de posicionamento em `.hero-sub` (**não menciona marketing** — A1), novo `.hero-selo` ("Dois sistemas em uso real numa pousada de 38 quartos em Maragogi/AL" — **não nomeia a pousada**, RN03). Botões: `.btn-primary` "Ver projetos" → `#projetos`; `.btn-ghost` "Falar comigo" → `#contato`. **Botão GitHub removido do hero** (vai para o contato na Fase 9). Hero **sem WhatsApp** (E2).
- **Apresentação curta** — novo bloco `.apresentacao` com um parágrafo de 3 linhas ("quem sou"), logo abaixo do hero (A3).
- **Estratégia de fontes** (FSD 24.3) — adicionado `preconnect` para `https://fonts.gstatic.com` (crossorigin); a URL do Google Fonts já tinha `display=swap` e só os pesos usados (Poppins 300/400/600/700, Space Mono 400/700); adicionada **pilha de fallback de sistema** nas famílias CSS (`'Poppins', -apple-system, …, sans-serif` e `'Space Mono', ui-monospace, …, monospace`) — inserção mecânica, sem reordenar nem remover regra.
- **CSS aditivo** — bloco "FASE 2" no fim de `css/estilo.css` com `.hero-selo` (pílula discreta, borda `--card-border`, fundo `--card-bg`, raio 8px, espaçamentos da escala) e `.apresentacao` / `.apresentacao p` (texto corrido, peso 300, `--texto-muted`). Tudo consome variável de tema e funciona nos dois temas (RT02/RT04/RT05). Nenhuma regra herdada foi reescrita.
- **Textos são propostos** — posicionamento, selo e apresentação seguem a direção do FSD, mas a redação final é do autor (PP03). Ajustar direto na marcação, se quiser.

### O que foi feito no trabalho de código da Fase 1 (branch `rascunho`)

- **Extração de CSS/JS (commit `9a9e6b1`)** — o conteúdo de `<style>` foi para `css/estilo.css` e o de `<script>` para `js/script.js`, por **cópia literal**: nenhuma regra renomeada, reordenada, reformatada ou "otimizada" (FSD 5.2). `index.html` referencia os dois por caminho relativo. Verificado: `index.html` + `css/estilo.css` + `js/script.js` reconstroem a base do commit `c311b26` **byte a byte**. Removidos os `.gitkeep` de `css/` e `js/` (agora com arquivos reais).
- **Navegação por âncora (commit `c0d082f`)** — menu com 4 itens (projetos, tecnologias, sobre, contato), centralizado, sem logo, cada link com `href="#id"` (FSD 5.3). Item "início" saiu do menu. IDs: `#inicio` no hero, `#stack` renomeado para `#tecnologias`, `<footer id="contato">` como alvo provisório até a seção de contato da Fase 9. Botões do hero viraram âncoras reais. **Todo `onclick` inline foi removido** — o botão de tema agora usa `addEventListener` em `js/script.js`. CSS aditivo isolado no fim de `estilo.css` (`scroll-behavior: smooth`, `scroll-margin-top`, âncora estilizada como botão), sem tocar nas regras herdadas (RT02). A navegação passou a **funcionar sem JavaScript** e a alternância de tema continua funcionando nos dois sentidos.
- **Inventário do código da base** registrado no `README.md` (FSD 25/Fase 1 item 3; PP04): seções, estrutura do HTML, organização do CSS, alternância de tema, componentes reaproveitáveis e o que sai. Conclusão: a base **suporta a troca de conteúdo sem retrabalho estrutural**.

### Pendência herdada da Fase 1

- [ ] **GitHub Pages + HTTPS** — configurar no painel do repositório `devdapraia/devdapraia.github.io` a publicação a partir do branch `main` (pasta raiz) e confirmar que o site responde em `https://devdapraia.github.io` sob HTTPS. Não é possível fazer isso por código/CLI neste ambiente. O código da Fase 1 já está no `main` (merge `5a0c80f`, enviado ao GitHub); falta só a configuração do Pages no painel.

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

### Fase 1 — Preservação da base, infraestrutura e preparação do terreno — `[~]` (código no `main`; só falta GitHub Pages + HTTPS, no painel do GitHub)

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

### Fase 2 — Bloco de abertura e apresentação curta — `[x]` (construída no `rascunho`; aguardando conferência visual do autor)

- [x] `docs/foto_principal.jpeg` tratada → `imagens/avatar.webp` (recorte quadrado, WebP 320×320, **12,6 KB** << 150 KB)
- [x] Novo `h1` mantido + nova linha de posicionamento (**sem mencionar marketing**); tag do hero preservada
- [x] Selo de credibilidade (`.hero-selo` — "dois sistemas em uso real numa pousada de 38 quartos em Maragogi/AL", **sem nomear a pousada**)
- [x] Botões do hero: `.btn-primary` "Ver projetos" → `#projetos`; `.btn-ghost` "Falar comigo" → `#contato`; **botão GitHub removido do hero**
- [x] Apresentação curta (`.apresentacao` — parágrafo de 3 linhas abaixo do hero)
- [x] Estratégia de fontes (`display=swap` já na URL + `preconnect` gstatic adicionado + pilha de fallback de sistema nas famílias CSS + só os pesos usados)
- [~] Hero visível "sem rolagem no celular" (critério 26.3): correto no desktop; o empilhamento em telas estreitas é entregue na **Fase 10 (Responsividade)** — a base não tem media queries e o PLANO sequencia isso para a Fase 10.

### Fase 3 — Cards de projeto (HGS e HFS): estrutura e texto — `[x]` (construída no `rascunho`; aguardando conferência visual do autor)

- [x] Remover `.timeline` e `.timeline-item` (marcação + CSS), após verificar que nada mais os usa (o observer de `js/script.js` fica para a Fase 10)
- [x] Componente de card de projeto (base visual de `.sobre-card`, sem cor nova, sem sombra, empilhado)
- [x] Componente pílula de tecnologia (elemento 8 do card) — sem ícone/barra/nível, não é link
- [x] Card do HGS — oito elementos na ordem fixa + nota Java/Flutter+Dart + botão de apresentação (`.btn-ghost`, WhatsApp com mensagem do HGS)
- [x] Card do HFS — os mesmos oito elementos, mesma ordem, mesmos rótulos, sem botão
- [x] "O que mudou" sem números não apurados, redigido para aceitar número depois (RN10)
- [~] Elemento 7 (imagens) com **placeholder textual** — as quatro capturas conferidas entram na **Fase 5**; o card só vai ao ar pleno depois disso (FSD 12.3)

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
- **2026-09-10** — Fase 1 integrada ao `main` (merge `5a0c80f`) e enviada ao GitHub (`origin/main` e `origin/rascunho` sincronizados). Pendência restante da Fase 1: apenas GitHub Pages + HTTPS no painel do GitHub.
- **2026-09-10** — **Ajustes de conteúdo do autor sobre a Fase 3** (branch `rascunho`). Nova regra em `AGENTS.md` › "Regras de conteúdo": nenhuma frase/título/informação se repete com a mesma formulação em pontos diferentes da página. (1) Origem na recepção mantida só no bloco de apresentação; card "quem sou" da seção Sobre a reescrever na Fase 8 com outro recorte — checklist adicionado ao `docs/PLANO.md` › Fase 8. (2) `h2` de `#sobre` "Da recepção ao código" → "Minha trajetória" (provisório; repetia a linha do hero). (3) "Dois sistemas em uso real" retirado do parágrafo de apresentação (frase final removida); mantido no selo do hero e no título de `#projetos`. Arquivos: `index.html`, `AGENTS.md`, `docs/PLANO.md`, `docs/STATUS.md`. Sem alteração de CSS/JS. Testes locais repetidos: `/`, `css/estilo.css`, `js/script.js`, `imagens/avatar.webp`, `favicon.ico`, currículo em PDF → **200**; sem `style=`/`onclick=`/caminho absoluto; `.btn-primary` 1×, `.btn-ghost` 2×.
- **2026-09-10** — **Fase 3 — Cards de projeto (HGS e HFS): estrutura e texto** (branch `rascunho`, sobre `ad1ad13`). Linha do tempo removida: `.timeline`/`.timeline-item` saíram da marcação de `#projetos` (`index.html`) e do CSS (bloco `TIMELINE` de `css/estilo.css`) — `grep` confirmou que nada mais os usa em arquivo vivo; o `IntersectionObserver` de `js/script.js` foi mantido intacto (decisão de reapontar/remover é da Fase 10). Criado o componente `.projeto-card` (base visual de `.sobre-card`: `--card-bg`, borda 1px `--card-border`, raio 12px, padding 20px herdado; sem cor nova, sem sombra; espaçamentos novos na escala; cards empilhados, nunca lado a lado) e o componente pílula de tecnologia `.tech-lista`/`.tech-pill` (`<ul>`/`<li>` com `list-style: none`, `flex-wrap`, peso 300, hover borda `--destaque` + `-2px`; sem ícone/bolinha/barra/percentual/nível — RN16; não são links). Card do HGS: oito elementos na ordem fixa (B2) + nota "protótipo original em Java; app em construção com Flutter e Dart" abaixo das pílulas + botão "Solicitar apresentação do sistema" (`.btn-ghost`, `wa.me` com a mensagem do HGS, `target="_blank"` + `rel="noopener noreferrer"`). Card do HFS: os mesmos oito elementos, mesma ordem, mesmos rótulos, sem nota e sem botão (B3, RN18). "O que mudou" nos dois cards descrito por mudança de rotina, sem números, redigido para aceitar um número depois (RN10). Elemento 7 (imagens) com placeholder textual temporário — as capturas entram na Fase 5. `section-label` "projeto principal" → "projetos"; `h2` "Hotel Governance System" → "Dois sistemas em uso real". CSS aditivo no bloco "FASE 3" do fim de `css/estilo.css`, consumindo variáveis de tema; chaves balanceadas (66/66); nenhuma regra herdada reescrita. Testes locais (`python -m http.server`): `/`, `css/estilo.css`, `js/script.js`, `imagens/avatar.webp`, `favicon.ico`, currículo em PDF respondem **200**; sem `style=`/`onclick=`/caminho absoluto na marcação; `.btn-primary` aparece **1×** (só o hero), `.btn-ghost` **2×** (hero + botão do HGS); peso total dos arquivos servidos ≈ 45 KB (teto 1,5 MB). Sem erros registrados. **Ressalva:** cards com placeholder de imagem — publicação plena depende da Fase 5. Aguardando conferência visual do autor no Live Server / celular; depois: push do `rascunho`, merge em `main`, push do `main`, retorno ao `rascunho`. **Próxima fase: Fase 4 — Limpeza da autoavaliação de nível.**
- **2026-09-10** — **Fase 2 — Bloco de abertura e apresentação curta** (branch `rascunho`, sobre `5a0c80f`). Foto real tratada com Pillow → `imagens/avatar.webp` (recorte quadrado 320×320, WebP q90, 12,6 KB); `imagens/.gitkeep` removido. Hero revisado em `index.html`: `<img>` para `avatar.webp` com `width`/`height` e sem `lazy`, `alt` sem nome da pousada; nova linha de posicionamento (sem marketing); novo `.hero-selo` (uso real, sem nomear a pousada); botões "Ver projetos" (`.btn-primary` → `#projetos`) e "Falar comigo" (`.btn-ghost` → `#contato`); botão GitHub removido do hero; hero sem WhatsApp. Novo bloco `.apresentacao` (3 linhas) abaixo do hero. Estratégia de fontes: `preconnect` gstatic adicionado, pilha de fallback de sistema nas famílias CSS, `display=swap` e pesos já corretos na URL. CSS aditivo "FASE 2" no fim de `css/estilo.css` (`.hero-selo`, `.apresentacao`) — consome variáveis de tema, funciona nos dois temas, sem reescrever regra herdada. Testes locais: `py -m http.server` — `/`, `css/estilo.css`, `js/script.js`, `imagens/avatar.webp`, `favicon.ico`, currículo em PDF respondem 200; peso da página 38,5 KB (teto 1,5 MB); avatar 12,6 KB (teto 150 KB); sem `style=`/`onclick=`/caminho absoluto na marcação. Sem erros registrados. **Ressalva:** empilhamento do hero no celular fica para a Fase 10 (a base não tem media queries). Aguardando conferência visual do autor no Live Server / celular; depois: push do `rascunho`, merge em `main`, push do `main`, retorno ao `rascunho`.
