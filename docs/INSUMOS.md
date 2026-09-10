# Inventário de insumos do projeto

**Projeto:** Site de Portfólio devdapraia
**Data do inventário:** 09/09/2026 · **Atualizado:** 10/09/2026
**Base de referência:** `docs/FSD.md` (seção 5.4 — estrutura de diretórios; seção 21 — arquivos publicados)

Este documento lista **tudo o que está hoje na pasta `docs/`** e o que cada arquivo representa.
A pasta `docs/` é documentação e apoio — **não é a pasta pública do site**. Os arquivos que o
site precisar exibir em execução serão copiados, mais tarde, para a área de assets definida
pela stack (no FSD: pasta `imagens/`, com subpastas `hgs/`, `hfs/`, `processo/`, e `arquivos/`
para o currículo). Nenhuma cópia é feita nesta etapa.

---

## 1. Arquivos presentes em `docs/`

| Arquivo | O que é | Usado pelo sistema em execução? | Onde será usado | Observações |
|---|---|---|---|---|
| `FSD.md` | Documento de Especificação Funcional (funcional + técnica). Autoridade sobre conteúdo, estrutura, comportamento e regras. | Não | Documentação / referência da implementação | Publicado junto com o site (fica acessível por URL). Sem credencial nem dado de terceiro — aceitável conforme FSD 5.5. |
| `DESIGN.md` | Identidade visual extraída da base existente: paleta, tipografia, escala de espaçamento, raios, transições e componentes. Autoridade sobre aparência. | Não | Documentação / referência visual | Idem acima. |
| `INSUMOS.md` | Este inventário. | Não | Documentação | — |
| `index.html` | **Código-fonte da base existente** (versão anterior do site), arquivo único com CSS em `<style>` e JS em `<script>` embutidos. 1 nav + hero + Sobre + Projetos (timeline) + Stack (bolinhas) + footer. | Não diretamente — **é a base que será versionada, extraída e revisada** | Raiz do repositório (`devdapraia.github.io/index.html`) na Fase 1 | Confirma a paleta (`#0a0712 / #F29441 / #D95D30 / #F2F2F2`), Poppins + Space Mono, `data-tema="claro"`, nav `position: sticky`. Contém: navegação por `onclick` inline (troca por âncora — FSD 5.3), `.timeline`/`.timeline-item` e `.stack-item`/`.tech-dot` (a remover — FSD 12.11), `opacity: 0` no CSS da timeline (inverter para melhoria progressiva — FSD 12.10), referência a `favicon.ico` (arquivo ainda não entregue), `alt="João Adôrno"` no avatar, botão GitHub inline no hero. |
| `foto_principal.jpeg` | Foto real de João (retrato, sorrindo, ambiente externo). 1170×1438 px, ~136 KB, JPEG. | **Sim** (confirmado) — foto do bloco de abertura (hero), no lugar do avatar ilustrado da base | Bloco de abertura (hero) — avatar circular de 160px | Tratar antes de publicar: recorte quadrado, conversão para WebP, redimensionamento (~320 px de lado bastam para 160px em telas retina), bem abaixo do teto de 150 KB. Copiar para `imagens/` na etapa do hero, como `imagens/avatar.png` **ou** `imagens/avatar.webp` (definir na construção). `alt` descritivo sem nome da pousada. Substitui o avatar ilustrado da base. |
| `curriculo-joao-victor.pdf` | Currículo de João Victor. 2 páginas, ~53 KB. Perfil, formação (ADS — conclusão jun/2028; Marketing — 2020), experiência (recepcionista; coordenador de e-commerce; vendedor), projetos (HGS, HFS, devdapraia), conhecimentos técnicos. Já renomeado (era `curriculo joao victor.pdf`). | **Sim** — download direto na seção de contato | Seção de contato → `arquivos/curriculo-joao-victor.pdf` | **Conferido quanto a dados sensíveis (FSD 21.4.5):** contém nome completo, cidade/estado (Maragogi/AL), telefone `(81) 99521-2456`, e-mail, LinkedIn e GitHub — dados que o próprio site já vai expor. **Não contém** endereço residencial, documento (CPF/RG) nem data de nascimento. Aprovado para publicação em endereço aberto. |
| `screen.png` | Captura de tela do site atual/anterior (estado da base): menu "INÍCIO / SOBRE / PROJETOS / STACK", hero com avatar ilustrado, seção "Sobre mim" em cards. 1734×975 px, ~231 KB, PNG. | Não | Referência visual / documentação — mostra o ponto de partida da revisão | **Não vai para o site.** Serve para conferir a identidade herdada e o que muda. Evidencia conteúdos que a revisão vai remover (menção a "Recife", "Porto Digital", "Estágio Jan 2027", cards em "Sobre mim"). |

---

## 2. Valores de contato (confirmados pelo autor — 10/09/2026)

Fornecidos pelo autor; **não existiam na base**, exceto o GitHub. Vão para a marcação do site
(hero → só link de projetos/contato; seção de contato → todos).

| Canal | Valor | Uso |
|---|---|---|
| WhatsApp | `https://wa.me/5581995212456` | Ação principal da seção de contato; botão "Pedir a gravação" nos dois cards (com `?text=`) |
| E-mail | `jvictorna.dev@gmail.com` | Link `mailto:` na seção de contato |
| LinkedIn | `https://linkedin.com/in/joaoadorno` | Link secundário, nova aba, `rel="noopener noreferrer"` |
| GitHub | `https://github.com/devdapraia` | Link secundário (já existe na base) |

**Mensagens pré-preenchidas do WhatsApp (curtas, propositalmente):**

- Genérica: `Olá, João. Vi seu portfólio e gostaria de conversar.`
- Gravação do HGS: `Olá, João. Vi seu portfólio e gostaria de receber a gravação do Hotel Governance System funcionando.`
- Gravação do HFS: `Olá, João. Vi seu portfólio e gostaria de receber a gravação do Hotel Finance System funcionando.`

*Atualização 2026-09-10 (alteração consciente de escopo — FSD seção 1, item 4):* o botão de contato dos cards passou de "Solicitar apresentação do sistema" (só no HGS) para **"Pedir a gravação"** nos **dois** cards. Existem gravações de tela dos dois sistemas, mas elas **não entram na página** (teto de peso — FSD 21.2; vídeo fora de escopo — FSD 7.1): o autor as envia pelo WhatsApp a quem pedir. Os arquivos brutos (`apresentacao-*.mp4`) ficam fora do repositório (`.gitignore`).

---

## 3. Insumos previstos no FSD que **ainda não chegaram**

| Insumo | Situação | Referência no FSD | Impacto |
|---|---|---|---|
| `favicon.ico` | **A gerar.** A base referencia `favicon.ico` na raiz, mas o arquivo não veio junto. Decisão (10/09/2026): gerar um simples, quadrado, no âmbar da marca (`#F29441`), sem investir tempo. | Seção 5.4; DESIGN 8 | Baixo. |
| 2 capturas de tela do HGS | **A capturar.** Dados fictícios obrigatórios; sem nome/documento/telefone de hóspede. | B2, B5, 12.4, 21; PP02 | **Alto (caminho crítico).** Sem imagem, o card do HGS não é publicado. |
| 2 capturas de tela do HFS | **A capturar.** Valores financeiros mascarados. | B3, B5, 12.4, 21; PP02 | **Alto (caminho crítico).** Sem imagem, o card do HFS não é publicado. |
| 2–3 recortes do Figma (protótipo + design system do app HGS) | **A capturar.** | C3, 12.6, 21 | Baixo. Bloco de menor prioridade e primeiro candidato a corte. |
| Textos a redigir: posicionamento (1 linha), apresentação curta, 8 elementos do card HGS, 8 elementos do card HFS, "Sobre mim" (3 parágrafos), linha de formação | **A escrever.** Parte da matéria-prima já existe no currículo (perfil, projetos, formação com conclusão jun/2028). | Módulos A, B, C, D; seção 10; PP03 | **Alto (caminho crítico).** O FSD afirma que o gargalo das 2 semanas é a produção de texto e imagens. |
| Listas de tecnologias canônicas por card e por grupo (C2) | **Resolvido (10/09/2026).** FSD B2, B3 e C2 ajustados: HGS = PHP, MySQL, HTML, CSS, JavaScript, Git e GitHub, Figma (+ nota Java/Flutter+Dart); HFS = PHP, MySQL, HTML, CSS, JavaScript, Git e GitHub. | B2, B3, C2, RN09 | — |

---

## 4. Marcação para a etapa de construção — arquivos de `docs/` que vão para a área pública

| Arquivo em `docs/` | Destino (FSD 5.4) | Tratamento antes de copiar |
|---|---|---|
| `foto_principal.jpeg` | `imagens/avatar.png` ou `imagens/avatar.webp` | Recorte quadrado + WebP + redimensionamento (~320 px) + peso << 150 KB |
| `curriculo-joao-victor.pdf` | `arquivos/curriculo-joao-victor.pdf` | Nenhum (já renomeado) |
| `index.html` | Raiz do repositório | Nenhum na Fase 1 (commit intacto). Depois: extração de CSS/JS por cópia literal |

`FSD.md`, `DESIGN.md`, `INSUMOS.md` e `screen.png` **permanecem apenas como documentação** e
não são usados pelo site em execução. Nenhuma pasta de assets é criada nesta etapa — apenas
registrada a intenção.
