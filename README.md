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
css/estilo.css        estilo (a ser extraído da base — ver docs/PLANO.md, Fase 1)
js/script.js           comportamento (a ser extraído da base — ver docs/PLANO.md, Fase 1)
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

> A preencher na Fase 1 (item 3 do `docs/PLANO.md`): seções existentes, estrutura do HTML, organização do CSS, funcionamento da alternância de tema, componentes reaproveitáveis e o que precisará sair. Se a extração de CSS/JS for abandonada por custo (FSD 5.2), registrar a decisão aqui.

## Documentação viva

Antes de qualquer trabalho, ler `docs/FSD.md`, `docs/DESIGN.md`, `docs/INSUMOS.md`, `docs/PLANO.md`, `docs/STATUS.md` e `docs/ERROS.md`. Ao terminar, atualizar `docs/STATUS.md` e registrar problemas em `docs/ERROS.md`.
