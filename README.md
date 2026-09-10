# devdapraia.github.io

Site de portfólio pessoal de João Victor do Nascimento Adôrno. Página única, estática, sem servidor e sem banco de dados.

**Objetivo:** fazer um gestor não técnico entender, em poucos minutos e no celular, que o autor identifica problemas reais e constrói software que funciona.

Este repositório é uma **revisão de conteúdo** sobre uma base HTML/CSS/JS já aprovada. A identidade visual não é recriada — as alterações de estilo são apenas incrementais. Ver `docs/FSD.md` (regras e conteúdo) e `docs/DESIGN.md` (aparência).

## Stack

- HTML5, CSS puro (variáveis em `:root`), JavaScript sem framework.
- Sem servidor, sem banco, sem build, sem gerenciador de dependências.
- Única dependência externa: Google Fonts (Poppins e Space Mono).

## Estrutura

```
index.html            página única — arquivo de entrada
favicon.ico
css/estilo.css        estilo — extraído da base por cópia literal (Fase 1)
js/script.js           comportamento — extraído da base por cópia literal (Fase 1)
imagens/               avatar + capturas (hgs/, hfs/, processo/)
arquivos/              currículo em PDF
docs/                  FSD, DESIGN, INSUMOS, PLANO, STATUS, ERROS e material de apoio
AGENTS.md             contexto para qualquer IA que trabalhe no projeto
```

## Como rodar localmente

Abrir `index.html` no VS Code com a extensão **Live Server** (ou servir a pasta com qualquer servidor estático de arquivos). Não há instalação, dependências nem configuração de ambiente.

## Como publicar

1. Trabalhar e commitar no branch `rascunho`.
2. Conferir no Live Server e, para mudanças de layout ou imagens, em **celular real**.
3. Integrar `rascunho` → `main`.
4. O GitHub Pages publica automaticamente a partir de `main`, no endereço `devdapraia.github.io`, sob HTTPS.
5. Conferir o endereço publicado antes de considerar a etapa concluída.

O primeiro commit contém a base **intacta** e é o ponto de retorno do projeto.

## Inventário do código da base

Levantamento feito na Fase 1 com o código à vista (FSD 25 / Fase 1, item 3; PP04).
Conclusão: **a base suporta a troca de conteúdo sem retrabalho estrutural** — a
Fase 2 pode começar assim que o site publicado estiver idêntico à base.

### Seções existentes (na ordem do HTML)

| Ordem | Marcação | `id` | Situação na revisão |
| --- | --- | --- | --- |
| Menu | `<nav>` com 4 links, `position: sticky` | — | Preservado. Ordem revisada em 2026-09-10: **Sobre · Projetos · Tecnologias · Contato** (alteração consciente de escopo — ver `docs/FSD.md` seção 1). |
| Hero | `.hero` > `.hero-content` (avatar + texto), `.hero-btns` | `inicio` | Preservado. Texto, selo e botões entram na Fase 2. |
| ~~Apresentação~~ | `.apresentacao` | — | Criado na Fase 2, **removido em 2026-09-10** (marcação + CSS). O "quem sou" foi unificado no card "quem sou" da seção Sobre. |
| Sobre mim | `.section` > `.sobre-grid` com 3 `.sobre-card` (um `.destaque-card`) | `sobre` | **Primeira seção após o hero** desde 2026-09-10 (alteração consciente de escopo: o "Sobre" abre a página para dar contexto a quem chega sem repertório; precisa ser curto). Card "quem sou" absorveu o texto do antigo bloco `.apresentacao`. Cards "formação" e "objetivo" revisados no mesmo dia — Marketing (UNIBRA, 2020) ao lado de ADS; objetivo serve a desenvolvimento **ou** marketing. Vira três parágrafos curtos na Fase 8. |
| Projetos | `.section` > dois `.projeto-card` (HGS e HFS) | `projetos` | Linha do tempo `.timeline` removida na Fase 3; entrou o card de projeto de oito elementos. |
| Tecnologias | `.section` > rótulo + `h2` + marcador textual provisório | `tecnologias` (era `stack`) | **Autoavaliação de nível removida** na Fase 4 (`.stack-grid`/`.stack-item`/`.tech-dot`, marcação e CSS). Os dois grupos por contexto de uso e a linha de formação entram na Fase 7. |
| Rodapé | `<footer>` com crédito + link do GitHub | `contato` (provisório) | Vira a seção de contato em tela cheia na Fase 9. |

### Estrutura do HTML

- Documento único, `lang="pt-br"`, `<meta viewport>` presente, `favicon.ico` referenciado.
- Após a Fase 1: sem `<style>` e sem `<script>` embutidos; sem `onclick`/`style=` inline.
- Fontes do Google Fonts com `preconnect` e `display=swap` — pesos Poppins 300/400/600/700 e Space Mono 400/700.
- Navegação por âncora real (`href="#id"` + `id` nas seções); rolagem suave por CSS (`scroll-behavior: smooth`), com `scroll-margin-top` compensando o menu fixo.

### Organização do CSS (`css/estilo.css`, cópia literal da base)

- Abre com reset universal (`* { margin:0; padding:0; box-sizing:border-box }`).
- Paleta em variáveis: `:root` (tema escuro, padrão) e `[data-tema="claro"]` sobrescrevendo 7 variáveis; `--destaque` e `--acento` são iguais nos dois temas.
- Blocos comentados por componente: `TOGGLE`, `NAV`, `HERO`, `SECTIONS`, `SOBRE`, `FOOTER` (os blocos `TIMELINE` e `STACK` da base foram removidos nas Fases 3 e 4). Blocos aditivos por fase no fim do arquivo (`FASE 1`, `FASE 2`, `FASE 3`, `FASE 4`), isolados e sem tocar nas regras herdadas.
- Sem nenhuma media query (responsividade só na Fase 10).
- Bloco aditivo da Fase 1 no fim do arquivo, isolado e sem tocar nas regras herdadas.

### Alternância de tema

- Botão `.theme-toggle` fixo no canto inferior direito.
- `js/script.js` mantém `data-tema="claro"` no `<body>` (ausência do atributo = tema escuro) e troca o ícone ☀️/🌙.
- Na base era acionada por `onclick` inline; na Fase 1 passou a `addEventListener` no mesmo `js/script.js`. Sem persistência (decisão do FSD 12.9).

### Componentes reaproveitáveis

- `.section` + `.section-label` (rótulo Space Mono) + `h2` + `.divider`: base de toda seção nova.
- `.sobre-card`: padrão visual do **card de projeto** da Fase 3 (fundo `--card-bg`, borda `--card-border`, raio 12px, padding 20px).
- `.btn-primary` / `.btn-ghost`: botões do hero, do card do HGS e do contato.
- `IntersectionObserver` (`threshold: 0.1`, atraso de 120ms): base da revelação por rolagem da Fase 10 — hoje apontado para `.timeline-item`.

### O que sai da base

- `.timeline` / `.timeline-item` — marcação e CSS (Fase 3, feito).
- `.stack-item` / `.tech-dot` / `.dot-on` / `.dot-off` e os textos de nível (`avançado`, `intermediário`…) — marcação e CSS (Fase 4, feito).
- Botão "GitHub" do hero — vai para a seção de contato (Fase 2).
- Textos da base ("Maragogi → Recife", "Porto Digital", "Estágio Jan 2027", "v1.0 — Portugol"…) — substituídos ao longo das Fases 2–9. Os do card "objetivo" e "formação" da seção Sobre já foram trocados em 2026-09-10 (sem destino/data fixos; Marketing ao lado de ADS).

### Decisão sobre a extração de CSS/JS

A extração **foi feita** (não foi abandonada). É cópia literal, verificada: `index.html` + `css/estilo.css` + `js/script.js` reconstroem a base do commit `c311b26` byte a byte. Nenhuma regra foi renomeada, reordenada ou reformatada.

## Documentação viva

Antes de qualquer trabalho, ler `docs/FSD.md`, `docs/DESIGN.md`, `docs/INSUMOS.md`, `docs/PLANO.md`, `docs/STATUS.md` e `docs/ERROS.md`. Ao terminar, atualizar `docs/STATUS.md` e registrar problemas em `docs/ERROS.md`.
