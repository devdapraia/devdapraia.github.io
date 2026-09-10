# DESIGN.md — Site de Portfólio devdapraia

**Documento de design extraído da base existente**
Versão 1.0 · Extraído do código-fonte da versão anterior do site

---

## Sobre este documento

Este documento registra a identidade visual e os padrões de interface **já
existentes** no site, extraídos diretamente do código-fonte. Serve como
referência para a revisão de conteúdo prevista no PRD v1.1.

Regra geral da revisão: **a identidade visual está aprovada e não deve ser
recriada.** Alterações no estilo devem ser incrementais, apenas o necessário
para acomodar o conteúdo novo.

Componentes que ainda não existem na base (cards de projeto, bloco de Figma)
estão marcados como **A DEFINIR NO FSD** — este documento não os inventa.

---

## 1. Paleta de cores

O site usa variáveis CSS declaradas em `:root`, com um conjunto alternativo
sobrescrito por `[data-tema="claro"]`. O tema escuro é o padrão.

### 1.1 Tema escuro (padrão)

| Variável | Valor | Função |
| --- | --- | --- |
| `--base` | `#0a0712` | Fundo da página |
| `--destaque` | `#F29441` | Cor primária da marca (âmbar) |
| `--acento` | `#D95D30` | Cor secundária (terracota) |
| `--neutro` | `#F2F2F2` | Texto principal |
| `--card-bg` | `rgba(255,255,255,0.05)` | Fundo dos cards |
| `--card-border` | `rgba(242,148,65,0.15)` | Borda dos cards |
| `--nav-bg` | `rgba(10,7,18,0.97)` | Fundo da navegação fixa |
| `--texto-muted` | `rgba(242,242,242,0.6)` | Texto secundário |
| `--texto-sub` | `rgba(242,242,242,0.65)` | Subtítulo do hero |

### 1.2 Tema claro (alternativo)

Ativado pelo atributo `data-tema="claro"` no `body`. Sobrescreve sete
variáveis; `--destaque` e `--acento` permanecem iguais nos dois temas.

| Variável | Valor | Função |
| --- | --- | --- |
| `--base` | `#F5F3F0` | Fundo da página |
| `--neutro` | `#1a1a2e` | Texto principal |
| `--card-bg` | `rgba(0,0,0,0.04)` | Fundo dos cards |
| `--card-border` | `rgba(242,148,65,0.3)` | Borda dos cards |
| `--nav-bg` | `rgba(245,243,240,0.97)` | Fundo da navegação |
| `--texto-muted` | `rgba(26,26,46,0.75)` | Texto secundário |
| `--texto-sub` | `rgba(26,26,46,0.75)` | Subtítulo do hero |

### 1.3 Regras de uso

- `--destaque` marca ação, link ativo, elemento em foco e o sobrenome no
  título principal.
- `--acento` marca rótulo de seção, versão e links do rodapé. Nunca é usado
  como fundo de área ampla.
- Bordas e divisores usam sempre uma variação translúcida de `--destaque`,
  nunca cinza puro.
- Todo componente que muda de cor entre temas deve consumir variável, nunca
  valor fixo. Exceção existente: o texto sobre `--destaque` é sempre
  `#0a0712`, porque o fundo âmbar não muda entre temas.

---

## 2. Tipografia

Duas famílias, carregadas do Google Fonts com `preconnect`.

| Família | Pesos | Uso |
| --- | --- | --- |
| **Poppins** | 300, 400, 600, 700 | Toda a interface |
| **Space Mono** | 400, 700 | Rótulos técnicos e códigos de versão |

### 2.1 Escala tipográfica

| Elemento | Tamanho | Peso | Família | Tratamento |
| --- | --- | --- | --- | --- |
| Título do hero (`h1`) | `2.8em` | 700 | Poppins | line-height 1.1 |
| Título de seção (`h2`) | `1.6em` | 600 | Poppins | — |
| Subtítulo do hero | `1em` | 300 | Poppins | — |
| Título de item (`h3`) | `0.95em` | 600 | Poppins | — |
| Texto de card | `0.9em` | 300 | Poppins | line-height 1.7 |
| Texto de item | `0.85em` | 300 | Poppins | line-height 1.6 |
| Link de navegação | `0.85em` | 400 | Poppins | maiúsculas, letter-spacing 1px |
| Botão | `0.9em` | 600 (primário) / 400 (ghost) | Poppins | — |
| Rodapé | `0.8em` | 400 | Poppins | — |
| Tag do hero | `12px` | 400 | Space Mono | maiúsculas, letter-spacing 3px |
| Rótulo de seção | `11px` | 400 | Space Mono | maiúsculas, letter-spacing 2px |
| Rótulo de card | `11px` | 600 | Poppins | maiúsculas, letter-spacing 1px |
| Versão / código técnico | `11px` | 400 | Space Mono | letter-spacing 1px |

### 2.2 Regras de uso

- **Space Mono é reservado para elementos técnicos**: tag do hero, rótulo de
  seção e códigos de versão. Nunca em texto corrido.
- Rótulos em maiúscula sempre acompanham `letter-spacing`. Quanto menor a
  fonte, maior o espaçamento.
- Texto corrido usa peso 300. Peso 600 e 700 ficam restritos a títulos,
  rótulos e botões.
- Tamanhos são declarados em `em`, relativos ao contexto — não em `px`,
  exceto nos rótulos pequenos.

---

## 3. Layout e espaçamento

### 3.1 Grade

| Propriedade | Valor |
| --- | --- |
| Largura máxima do conteúdo | `780px`, centralizado |
| Padding lateral das seções | `40px` |
| Padding vertical das seções | `48px` |
| Padding do hero | `60px` topo, `50px` base, `40px` lateral |
| Padding da navegação | `16px` vertical, `40px` lateral |
| Padding do rodapé | `32px` vertical, `40px` lateral |

### 3.2 Escala de espaçamento observada

Os valores usados no CSS seguem uma progressão consistente:

`4px · 6px · 8px · 12px · 16px · 24px · 28px · 32px · 40px · 48px`

Novos componentes devem usar valores dessa escala.

### 3.3 Raios de borda

| Elemento | Raio |
| --- | --- |
| Cards | `12px` |
| Botões | `8px` |
| Itens de tecnologia | `8px` |
| Avatar, botão flutuante, marcadores | `50%` (círculo) |

### 3.4 Reset

O CSS abre com reset universal: `margin: 0`, `padding: 0`,
`box-sizing: border-box` em todos os elementos.

---

## 4. Componentes existentes

### 4.1 Navegação (`nav`)

Barra fixa no topo (`position: sticky`), centralizada, com `z-index: 10`.

- Fundo translúcido (`--nav-bg`, opacidade 0.97)
- Borda inferior de 1px em `rgba(242,148,65,0.3)`
- Espaçamento entre links: `32px`
- Links em maiúsculas, cor `--texto-muted`, mudando para `--destaque` no
  hover e no estado ativo
- Navegação por rolagem suave (`scrollIntoView` com `behavior: 'smooth'`)

### 4.2 Hero

Bloco de abertura com fundo decorativo e conteúdo em duas colunas.

- Efeito de brilho radial via `::before`: círculo de `400px` com gradiente
  de `rgba(242,148,65,0.12)` ao transparente, posicionado acima e ao centro,
  com `pointer-events: none`
- Borda inferior de 1px em `rgba(242,148,65,0.2)`
- Tag superior centralizada, em Space Mono
- Conteúdo em `flex`, avatar à esquerda e texto à direita, `gap: 40px`
- Avatar circular de `160px`, borda de 3px em `--destaque`,
  `object-fit: cover`
- Sobrenome no `h1` recebe `--destaque`
- Grupo de botões com `gap: 12px` e `flex-wrap`

### 4.3 Botões

**Primário (`.btn-primary`)**

- Fundo `--destaque`, texto `#0a0712`, sem borda
- Padding `12px 28px`, raio `8px`, peso 600
- Hover: opacidade 0.88 e deslocamento vertical de -1px

**Secundário (`.btn-ghost`)**

- Fundo transparente, texto `--neutro`, borda de 1px
- Borda `rgba(242,242,242,0.5)` no tema escuro,
  `rgba(26,26,46,0.3)` no claro
- Mesmo padding e raio do primário, peso 400
- Hover: borda passa a `--destaque` e deslocamento de -1px

### 4.4 Seção (`.section`)

Estrutura padrão de toda seção de conteúdo:

1. Rótulo em Space Mono, cor `--acento`, maiúsculas
2. Título `h2`, com `24px` de margem inferior
3. Conteúdo

Entre seções, um divisor `.divider`: linha de 1px em
`rgba(242,148,65,0.12)`, com margem lateral de `40px`.

### 4.5 Card (`.sobre-card`)

- Fundo `--card-bg`, borda de 1px em `--card-border`, raio `12px`
- Padding `20px`
- Rótulo superior em maiúsculas, cor `--destaque`, peso 600
- Texto em peso 300, cor `--texto-muted`, line-height 1.7
- Variante `.destaque-card`: borda em `rgba(217,93,48,0.4)` e ocupação da
  largura total da grade (`grid-column: 1 / -1`)
- Disposição em grade de duas colunas com `gap: 16px`

### 4.6 Botão de alternância de tema (`.theme-toggle`)

- Fixo no canto inferior direito, `24px` das bordas
- Círculo de `44px`, fundo `--destaque`, `z-index: 100`
- Sombra `0 4px 12px rgba(242,148,65,0.4)`
- Hover: escala 1.1 e opacidade 0.9
- Ícone alterna entre sol e lua conforme o tema ativo

### 4.7 Rodapé

- Texto centralizado, `0.8em`, cor `--texto-muted`
- Nome da marca em `--destaque`
- Links em `--acento`, mudando para `--destaque` no hover

---

## 5. Componentes a definir no FSD

Os itens abaixo constam do PRD v1.1 mas **não existem na base atual**. Suas
regras visuais devem ser definidas no FSD, respeitando os padrões deste
documento.

| Componente | Observação |
| --- | --- |
| **Card de projeto** | Oito elementos em ordem fixa (RN18), idêntico para HGS e HFS. Deve reaproveitar o padrão visual de `.sobre-card` |
| **Grupo de tecnologias** | Substitui `.stack-item` com bolinhas. Dois grupos por contexto de uso, sem nível declarado |
| **Bloco de processo (Figma)** | Bloco próprio após os cards de projeto. Menor prioridade — primeiro candidato a corte |
| **Imagens de tela** | Duas por card, em formato comprimido, com `loading="lazy"` abaixo da dobra. Recortes focados, legíveis sem ampliação |
| **Botão de apresentação** | Ação de solicitar apresentação do sistema. Usar `.btn-ghost` — o âmbar preenchido (`.btn-primary`) fica reservado ao "Ver projetos" do hero e ao WhatsApp do contato (ver FSD E2/RN13) |
| **Link do currículo** | Download direto de PDF. Usar `.btn-ghost` |

### Componentes a remover

| Componente | Motivo |
| --- | --- |
| `.timeline` e `.timeline-item` | Cronologia de versões técnicas substituída por cards de projeto |
| `.stack-item` com `.tech-dot` | Autoavaliação de nível removida por decisão do PRD v1.1 |

O CSS desses componentes pode ser removido junto com a marcação
correspondente, desde que nada mais o utilize.

---

## 6. Movimento e transição

| Elemento | Transição |
| --- | --- |
| Troca de tema (`body`) | `background 0.3s, color 0.3s` |
| Fundo da navegação | `background 0.3s` |
| Link de navegação | `color 0.15s` |
| Botões | `transform 0.15s, opacity 0.15s` / `border-color 0.15s` |
| Cards | `background 0.3s, border-color 0.3s` |
| Item de tecnologia | `border-color 0.2s, transform 0.2s, background 0.3s` |
| Botão de tema | `transform 0.2s, opacity 0.2s` |

### 6.1 Regras de movimento

- Interações rápidas (hover em link e botão) usam `0.15s` a `0.2s`.
- Mudanças de estado amplas (troca de tema) usam `0.3s`.
- O deslocamento de hover é sutil: `-1px` em botões, `-2px` em cards.
- Não há animação de entrada de página nem parallax.

### 6.2 Revelação por rolagem

A base implementa revelação progressiva via `IntersectionObserver`, com
`threshold: 0.1` e atraso escalonado de `120ms` entre itens. Os elementos
começam com `opacity: 0` e `translateX(-10px)` e recebem a classe
`.visible` ao entrar na viewport.

**Nota para o FSD:** esse comportamento está hoje acoplado a
`.timeline-item`, que será removido. Se a revelação for mantida, o seletor
precisa ser reapontado para os componentes novos. Se não for mantida, o
script correspondente sai junto.

---

## 7. Responsividade

**Estado atual: não há nenhuma media query no CSS.**

O layout se adapta parcialmente por três mecanismos:

- `max-width: 780px` no conteúdo
- `flex-wrap` no grupo de botões do hero
- `grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))` na grade de
  tecnologias

Os pontos que **quebram em telas estreitas** e precisam de tratamento no FSD:

| Elemento | Problema | Ponto de atenção |
| --- | --- | --- |
| `.hero-content` | `display: flex` com avatar de 160px e `gap: 40px` não cabe em tela de 360px | Empilhar em coluna abaixo de determinada largura |
| `.sobre-grid` | Duas colunas fixas (`1fr 1fr`) | Passar a uma coluna |
| Paddings de `40px` | Consomem 80px de uma tela de 360px | Reduzir em telas estreitas |
| `h1` de `2.8em` | Pode estourar a largura | Reduzir escala |
| `nav` com 4 links e `gap: 32px` | Pode exceder a largura disponível | Reduzir espaçamento ou permitir quebra |

**Este é o ponto de maior risco técnico da revisão**, porque o visitante
principal previsto no PRD acessa pelo celular. O FSD deve definir os pontos
de quebra e o comportamento de cada componente.

---

## 8. Estrutura técnica atual

| Item | Estado |
| --- | --- |
| Arquivos | Arquivo único `index.html`, com CSS em `<style>` e JS em `<script>` embutidos |
| Idioma | `lang="pt-br"` |
| Viewport | `width=device-width, initial-scale=1.0` |
| Favicon | `favicon.ico` na raiz |
| Imagens | Pasta `imagens/`, hoje com `avatar.png` |
| Fontes | Google Fonts com `preconnect` |
| Dependências externas | Nenhuma além do Google Fonts |
| Persistência do tema | Nenhuma — a escolha se perde ao recarregar |

### 8.1 Pontos de atenção para o FSD

- **CSS e JS embutidos no HTML.** Funciona, mas dificulta manutenção. O FSD
  deve decidir se separa em arquivos ou mantém. Separar é melhor prática;
  manter é mais rápido e não afeta o resultado visual.
- **Navegação por `onclick` inline.** Os links usam `onclick` no atributo,
  sem `href`. Isso quebra abertura em nova aba, navegação por teclado e
  compartilhamento de link com âncora. O FSD deve avaliar a troca por
  `href="#secao"`.
- **Preferência de tema não persiste.** Se for desejável lembrar a escolha,
  o FSD precisa definir o mecanismo.
- **Sem atributo `alt` descritivo além do avatar.** Com a entrada das
  imagens de tela, todas precisam de texto alternativo.

---

## 9. Princípios a preservar

Regras extraídas do padrão do código, que devem orientar qualquer adição:

1. **Cor vem de variável.** Nenhum componente novo deve usar valor de cor
   fixo, salvo a exceção já documentada do texto sobre âmbar.
2. **Espaçamento vem da escala.** Usar os valores da seção 3.2.
3. **Space Mono é para o que é técnico.** Texto corrido sempre em Poppins.
4. **Movimento é sutil.** Nada de animação chamativa; deslocamentos de 1px
   a 2px e transições curtas.
5. **Contraste vem do âmbar, não do branco.** A hierarquia visual se constrói
   com `--destaque` sobre fundo escuro, não com blocos de cor sólida.
6. **Todo componente funciona nos dois temas.** Se algo só fica legível no
   escuro, está errado.
