# DOCUMENTO DE ESPECIFICAÇÃO FUNCIONAL (FSD)
## Site de Portfólio devdapraia — Revisão de Conteúdo sobre Base Visual Existente

**Versão:** 1.0
**Data:** 09/09/2026
**Autor do projeto:** João Victor do Nascimento Adôrno
**Destino no projeto:** `docs/FSD.md`

---

## 1. Visão Geral

**Nome do sistema:** Site de Portfólio devdapraia (nome provisório).

**Objetivo principal:** fazer com que um gestor não técnico entenda, em poucos minutos e no celular, que o autor identifica problemas reais e constrói soluções que funcionam — e saia do site querendo conversar com ele.

**Resumo do funcionamento:** site público de **página única**, estático, sem servidor de aplicação e sem banco de dados. Todo o conteúdo é fixo e publicado junto com o código. Um menu fixo no topo rola suavemente até cada seção. A página apresenta um bloco de abertura com posicionamento e foto, uma apresentação curta, uma **seção "Sobre mim" enxuta** que dá contexto de quem escreve, dois cards de projeto com estrutura idêntica e imagens de tela, um bloco de processo de design, uma seção de tecnologias agrupada por contexto de uso e um bloco final de contato com uma única ação em destaque. Existe alternância entre tema claro e escuro, herdada da base.

> **Alteração consciente de escopo (2026-09-10) — ordem das seções e posicionamento profissional.** Duas mudanças foram decididas pelo autor depois da versão 1.0 e valem sobre o que este documento diz nas seções indicadas:
>
> 1. **Ordem da página e do menu.** A seção **"Sobre mim" passa a vir antes dos cards de projeto** — ordem final: hero → apresentação curta → **Sobre mim** → projetos → processo → tecnologias → contato. O menu acompanha: **Sobre · Projetos · Tecnologias · Contato**. *Motivo:* o site também é lido por quem chega sem contexto prévio (currículo enviado, link no LinkedIn); a apresentação de quem é o autor antes dos projetos dá esse contexto e evita que o visitante caia direto nos sistemas sem saber quem os construiu. *Contrapartida obrigatória:* como "Sobre mim" agora abre a página, ela precisa ser **curta** — o visitante tem de chegar rápido aos sistemas, que continuam sendo o centro do site. Pontos revistos por esta decisão: 1 (este resumo), 5.3, 12.1, 13 (Fluxo 1) e 25.
> 2. **Posicionamento: marketing + desenvolvimento.** O público principal são gestores de uma agência de comunicação e a oportunidade pode ser tanto em desenvolvimento quanto em marketing. A **formação em Marketing** (Bacharelado, UNIBRA, 2020) passa a aparecer **ao lado da formação em ADS**, como parte do perfil — alguém que veio de marketing, atendimento e coordenação de equipe e hoje constrói software a partir de problemas de operação que vive. O elemento de **objetivo** passa a servir às duas frentes (uma posição que una repertório de negócio e capacidade de construir a solução), sem parecer indefinição. **Não muda:** os cards de projeto seguem sendo o centro do site; marketing entra como contexto de quem é o autor, **não** como segunda vitrine de trabalhos de comunicação; a experiência profissional detalhada continua fora (fica no currículo em PDF). Pontos revistos por esta decisão: 6/A1, 6/D1, 10 e 26 (26.5).

**Natureza do projeto — condição determinante:** este **não é um projeto do zero**. Existe uma versão anterior do site, em HTML e CSS puro, com identidade visual aprovada. Essa versão é a base de partida e **não deve ser recriada**. O trabalho desta versão é **revisão de conteúdo**, com alterações de estilo apenas incrementais, restritas ao necessário para acomodar o conteúdo novo.

**Público usuário:**

| Perfil | Descrição | O que faz na página |
| --- | --- | --- |
| Gestor de agência de comunicação (**público principal**) | Profissional não técnico que recebeu o currículo e pediu o portfólio. Abre o link no celular, com pressa | Lê o posicionamento e o "Sobre mim" curto, percorre os dois cards e aciona o WhatsApp |
| Recrutador de estágio | Pessoa de RH ou avaliador em processo seletivo | Usa o menu, confere tecnologias e formação, baixa o currículo em PDF, abre LinkedIn e GitHub |
| Avaliador técnico / desenvolvedor | Procura sinal de substância e não tolera exagero | Confere tecnologias e situação de cada sistema; solicita apresentação do sistema |
| Autor (João) | Único mantenedor | Altera o conteúdo diretamente no código-fonte e publica pelo repositório. Não existe painel de edição |

**Contexto de uso:** visita curta, majoritariamente em celular, a partir de link recebido por WhatsApp ou clicado no LinkedIn. Tempo de atenção baixo e ambiente de leitura ruim. O site também será usado como link fixo no LinkedIn e no GitHub e enviado em processos seletivos de estágio.

**Observações relevantes para implementação:**

1. O site **não é uma ferramenta**. Não processa dados, não tem login, não tem cadastro, não guarda informação de visitante e não possui banco de dados.
2. O risco técnico desta versão está concentrado em **peso das imagens no celular** e em **exposição de dado de terceiro em repositório público**. As seções 19, 21 e 24 tratam desses pontos com detalhamento proporcional.
3. O gargalo do prazo de duas semanas **não é técnico**: é produção de texto e de imagens. A implementação deve facilitar essa produção, avançando por seções pequenas e sempre publicáveis.
4. A identidade visual está aprovada e não é redecidida. Refatorar, reorganizar, renomear classes ou "melhorar" o CSS existente está fora de escopo.

---

## 2. Documentos do Projeto para Implementação

A IA codificadora deverá usar apenas:

- `docs/FSD.md` — este documento;
- `docs/DESIGN.md` — identidade visual e padrões de interface extraídos da base existente.

Este FSD **já consolida** todas as decisões funcionais e técnicas necessárias para a implementação. Nenhum outro documento e nenhuma conversa anterior são necessários.

**Relação entre os dois documentos:** o `docs/DESIGN.md` é a autoridade sobre **aparência** — paleta, tipografia, escala de espaçamento, raios, transições e componentes já existentes. Este FSD é a autoridade sobre **conteúdo, estrutura, comportamento e regras**. Quando este FSD define um componente novo (card de projeto, grupo de tecnologias, bloco de processo, ampliação de imagem, pontos de quebra), ele o faz reaproveitando os padrões registrados no `docs/DESIGN.md`.

**Registro de situação dos documentos:** o `docs/DESIGN.md` **foi fornecido** na versão 1.0, extraída do código-fonte da base existente. Ele é a referência visual do projeto.

---

## 3. Stack Definida

| Item | Decisão |
| --- | --- |
| Marcação | HTML5 |
| Estilo | CSS puro, com variáveis CSS declaradas em `:root` |
| Comportamento | JavaScript, sem framework e sem dependência externa |
| Linguagem de servidor | **Nenhuma.** Sem PHP, sem Node em produção, sem qualquer processamento no servidor |
| Banco de dados | **Nenhum** |
| Bibliotecas e frameworks | **Nenhum.** Bootstrap não é utilizado. Nenhuma biblioteca pode ser introduzida |
| Dependência externa | Apenas o Google Fonts (Poppins e Space Mono), já presente na base |
| Padrão arquitetural | Separação entre marcação, estilo e comportamento. **MVC não se aplica** — ver seção 5 |
| Publicação | GitHub Pages, a partir do repositório |

**Restrições técnicas:**

1. **Nenhuma dependência externa nova.** Nem biblioteca de carrossel, nem de lightbox, nem de animação, nem de ícones. Todo comportamento novo é implementado em JavaScript próprio.
2. **Nenhum processamento no servidor.** Qualquer solução proposta precisa funcionar apenas com arquivos estáticos servidos por HTTP.
3. **Nenhuma etapa de build.** Não há empacotador, pré-processador de CSS nem transpilador. O arquivo que está no repositório é o arquivo que é servido.
4. **O CSS existente não é reescrito.** Alterações são incrementais e aditivas sempre que possível.

**Observação sobre uso local de bibliotecas:** não se aplica, porque não há bibliotecas. As fontes continuam sendo carregadas do Google Fonts com `preconnect`, como já ocorre na base. A estratégia de carregamento está na seção 24.3.

---

## 4. Ambientes do Projeto

### 4.1 Desenvolvimento local

- **Editor:** VS Code com a extensão Live Server.
- **Execução:** abrir o `index.html` pelo Live Server. Não há servidor de aplicação, banco de dados nem configuração de ambiente a preparar.
- **Sem XAMPP.** Não há PHP nem MySQL a servir.

### 4.2 Conferência antes da publicação

- Trabalho feito em **branch de rascunho** (nome sugerido: `rascunho`).
- Antes de promover para o branch publicado, é **obrigatória** a conferência **em celular real**, não apenas em emulação de navegador.
- A conferência cobre: legibilidade das imagens de tela, comportamento do menu, tempo de abertura, funcionamento dos dois temas e todos os links externos, um a um.

### 4.3 Produção

- **GitHub Pages**, com publicação automática a partir do branch publicado (`main`).
- **Endereço:** `devdapraia.github.io`.
- **O repositório deve chamar-se exatamente `devdapraia.github.io`**, para que o site responda na raiz do endereço. Nome diferente resulta em endereço com subpasta e quebra o link previsto para LinkedIn, GitHub e candidaturas.
- **HTTPS** deve estar ativo antes de qualquer divulgação do link.
- **Domínio próprio:** fora desta versão. O apontamento posterior não exige retrabalho no site.

### 4.4 Observações sobre deploy

1. O GitHub Pages **não gera endereço de prévia isolado**. Prévia e produção são o mesmo destino. A separação entre rascunho e publicado depende de disciplina de branch, não de barreira técnica.
2. **Procedimento explícito de publicação:**
   1. todo o trabalho de uma etapa é feito e commitado no branch `rascunho`;
   2. o autor abre o site local pelo Live Server e confere a etapa;
   3. o autor confere no celular real (para etapas que alterem layout, imagens ou o bloco de abertura);
   4. só então o branch `rascunho` é integrado ao `main`;
   5. a publicação do GitHub Pages ocorre automaticamente a partir do `main`;
   6. o autor confere o endereço publicado antes de considerar a etapa concluída.
3. O repositório será **público** — condição da publicação gratuita. A consequência está tratada nas seções 21 e 24.
4. Os repositórios do HGS e do HFS permanecem privados e não são afetados por este projeto.

---

## 5. Arquitetura do Sistema

### 5.1 Padrão arquitetural — MVC não se aplica

O padrão MVC **não é aplicado neste projeto**, e essa decisão está consolidada.

MVC separa dados, regra de negócio e interface. Este projeto **não possui dados persistidos nem regra de negócio executável**: não há Model, porque não há banco de dados nem entidade a manipular; não há Controller, porque não há ação de usuário processada no servidor. Existe apenas a camada de apresentação. Impor MVC aqui produziria estrutura vazia, consumindo prazo destinado à produção de texto e imagens sem benefício de organização ou manutenção.

**Organização adotada em substituição — separação de responsabilidades em três camadas de arquivo:**

| Camada | Responsabilidade | Onde vive |
| --- | --- | --- |
| Marcação | Conteúdo e estrutura semântica da página | `index.html` |
| Estilo | Toda a apresentação visual | `css/estilo.css` |
| Comportamento | Alternância de tema, ampliação de imagem, revelação por rolagem | `js/script.js` |

**Regras da separação:**

1. Nenhum estilo embutido no HTML (`style="..."`) e nenhum bloco `<style>` no `index.html` após a extração.
2. Nenhum comportamento inline (`onclick="..."`) no HTML. A base existente usa `onclick` na navegação; esse ponto é tratado na seção 5.3.
3. O JavaScript é **melhoria progressiva**: se ele falhar ou não executar, todo o conteúdo permanece visível e a página permanece navegável.

### 5.2 Extração do CSS e do JavaScript embutidos

A base existente é um arquivo único `index.html`, com CSS em `<style>` e JS em `<script>` embutidos.

**Decisão desta versão: extrair para arquivos separados**, em `css/estilo.css` e `js/script.js`, por **cópia literal**.

Condições obrigatórias dessa extração:

- É um **movimento de código, não uma reescrita**. Nenhuma regra CSS é renomeada, reordenada, reformatada, agrupada, minificada ou "otimizada" durante a extração.
- A extração acontece na **Fase 1**, depois do commit da base intacta e antes de qualquer alteração de conteúdo, em um commit próprio e isolado, para que a comparação entre antes e depois seja verificável.
- Depois da extração, o site deve renderizar **exatamente igual** ao commit da base intacta, nos dois temas.
- Se, com o código à vista, a extração se mostrar mais custosa do que o previsto, ela pode ser abandonada e o arquivo único mantido — o resultado visual não é afetado. Nesse caso a decisão deve ser registrada no `README.md` do repositório.

### 5.3 Navegação: substituição do `onclick` inline

A base navega por `onclick` nos links do menu, sem `href`. Isso quebra abertura em nova aba, navegação por teclado e compartilhamento de link com âncora.

**Decisão: substituir por âncoras reais.**

- Cada link do menu passa a usar `href="#identificador-da-secao"`.
- Cada seção da página recebe o `id` correspondente.
- A rolagem suave passa a ser feita por CSS (`scroll-behavior: smooth` no elemento raiz), eliminando a necessidade de JavaScript para navegar.
- O deslocamento causado pelo menu fixo é compensado por `scroll-margin-top` nas seções, com valor equivalente à altura do menu.
- Resultado esperado: a navegação continua funcionando **mesmo sem JavaScript**, e o endereço passa a aceitar âncora direta (por exemplo, `devdapraia.github.io/#contato`).

**Identificadores das seções** (na ordem em que aparecem na página — ver alteração consciente de escopo na seção 1):

| Seção | `id` | Rótulo no menu |
| --- | --- | --- |
| Bloco de abertura | `inicio` | Não aparece no menu (sem item "Início") |
| Apresentação curta | — | (sem `id` próprio e sem item no menu) |
| Sobre mim | `sobre` | Sobre |
| Cards de projeto | `projetos` | Projetos |
| Bloco de processo de design | `processo` | (sem item próprio no menu) |
| Tecnologias | `tecnologias` | Tecnologias |
| Contato | `contato` | Contato |

O menu tem **quatro itens, nesta ordem**: **Sobre, Projetos, Tecnologias, Contato** — a mesma ordem em que as seções aparecem na página. O bloco de processo é alcançado pela rolagem a partir de Projetos.

O menu permanece **centralizado**, como na base, e **não recebe logo nem nome à esquerda** — a navegação da base não tem esse elemento e adicioná-lo alteraria o layout do `<nav>` herdado. O retorno ao topo fica por conta da rolagem: a página é curta e o menu é fixo.

### 5.4 Estrutura de diretórios

A raiz de referência é o **`[Diretório do Projeto - Repositório]`**: a pasta do projeto versionada no repositório Git. Neste projeto, esse diretório corresponde ao repositório `devdapraia.github.io` e é servido na raiz do endereço pelo GitHub Pages.

Em outros ambientes, esse mesmo diretório poderia ser colocado dentro da pasta pública correspondente — por exemplo `htdocs/nome-do-projeto/` em um XAMPP local, `www/nome-do-projeto/` ou `public_html/nome-do-projeto/` em hospedagem tradicional. A implementação **não deve assumir nenhum desses nomes** nem depender de o projeto ocupar sozinho a pasta pública. Na prática, isso significa uma regra simples e verificável: **todos os caminhos internos do site são relativos** (`css/estilo.css`, `imagens/hgs/tela-quartos.webp`), nunca absolutos com barra inicial (`/css/estilo.css`), para que o site funcione igualmente na raiz ou dentro de uma subpasta.

```
[Diretório do Projeto - Repositório]/
├── index.html                      arquivo de entrada — página única
├── favicon.ico                     gerar um simples, quadrado, cor da marca (#F29441)
├── README.md                       o que é o projeto, como rodar local, como publicar
├── .gitignore
├── css/
│   └── estilo.css                  CSS extraído da base, sem reescrita
├── js/
│   └── script.js                   tema, ampliação de imagem, revelação por rolagem
├── imagens/
│   ├── avatar.png                  foto real de João (tratada a partir de docs/foto_principal.jpeg)
│   ├── hgs/                        duas capturas do HGS
│   ├── hfs/                        duas capturas do HFS
│   └── processo/                   recortes do protótipo e do design system em Figma
├── arquivos/
│   └── curriculo-joao-victor.pdf   download direto, sem formulário
└── docs/
    ├── FSD.md
    ├── DESIGN.md
    ├── INSUMOS.md
    ├── index.html                  base intacta, para referência
    ├── foto_principal.jpeg
    ├── curriculo-joao-victor.pdf
    └── screen.png
```

> **Favicon:** a base referencia `favicon.ico` mas o arquivo não foi entregue. Decisão (10/09/2026): gerar um favicon simples, quadrado, no âmbar da marca (`#F29441`). Sem investir tempo além disso.

### 5.5 Observação obrigatória sobre acesso a arquivos e proteção de pastas

Este projeto **inverte a premissa usual de proteção de pastas internas**, e a IA codificadora precisa entender por quê.

Em um projeto com servidor de aplicação, pastas como `config/`, `app/` ou `logs/` precisam ser bloqueadas contra acesso direto por URL. **Aqui não existe nenhuma dessas pastas.** Não há arquivo de configuração, não há credencial, não há log e não há código de servidor. Além disso, o GitHub Pages **serve o repositório inteiro como conteúdo público e não executa `.htaccess`** — não há como bloquear pasta alguma.

Consequência prática, que substitui a proteção por bloqueio:

> **A estratégia de proteção deste projeto é de origem, não de bloqueio: nada que não possa ser público entra no repositório.**

Isso vale para todo arquivo, em todo commit, inclusive no histórico. Os detalhes operacionais estão nas seções 21 e 24.

Registros complementares, para evitar reintrodução por inércia:

- **Não existe arquivo de configuração de credenciais neste projeto** — nem `.env`, nem `config/config.php`, nem equivalente. Não há credencial a armazenar. A proibição de `.env` permanece válida como regra geral e é irrelevante aqui por ausência de objeto.
- **Não existem migrations**, porque não existe banco de dados.
- A pasta `docs/` é publicada junto com o site e fica acessível por URL. Isso é aceitável: os documentos não contêm credencial nem dado de terceiro. Se em algum momento passarem a conter, saem do repositório.

---

## 6. Escopo Funcional da Primeira Versão

### Módulo A — Apresentação e primeiro impacto

**A1. Bloco de abertura (hero)**
*Objetivo:* garantir que mesmo quem sai em dez segundos leve embora a mensagem certa.
*Usuários:* todos os perfis. É o único trecho lido por 100% dos visitantes.
*Conteúdo:* nome, uma linha de posicionamento no espírito de "da recepção ao código: construo software que resolve problema de operação", foto de João, selo de credibilidade e botões de navegação.
*Ações permitidas:* "Ver projetos" (botão primário, rola até a seção Projetos) e "Falar comigo" (botão secundário ghost, rola até a seção Contato). O hero **não contém** link de WhatsApp — a ação de WhatsApp vive na seção de contato e no menu.
*Resultado esperado:* posicionamento, foto e selo visíveis **sem rolagem, inclusive no celular**, com caminho claro para Projetos e para Contato.
*Regras:* o **`h1` e a linha de posicionamento do hero não mencionam marketing** — a linha "da recepção ao código…" serve às duas leituras (desenvolvimento e marketing) sem estreitar nenhuma. Marketing aparece na seção **"Sobre mim"** como parte do perfil — formação em Marketing ao lado da de ADS; trajetória de marketing, atendimento e coordenação de equipe até construir software — e informa o elemento de **objetivo** (ver 6/D1 e a alteração consciente de escopo na seção 1).
*Base existente:* o hero com avatar já existe e é mantido; muda o texto.

**A2. Selo de credibilidade**
*Objetivo:* entregar a credencial mais forte do autor antes de qualquer texto longo.
*Conteúdo:* indicação curta e visível de que os sistemas estão em uso real, na linha de "sistemas em uso real numa pousada de 38 quartos".
*Regras:* **a pousada não é nomeada** em nenhum ponto do site.

**A3. Apresentação curta**
*Objetivo:* criar conexão humana sem atrasar a chegada aos projetos.
*Conteúdo:* duas ou três linhas de "quem sou", logo abaixo do bloco de abertura.

**A4. Menu fixo com navegação por seções**
*Objetivo:* permitir que recrutador e avaliador técnico cheguem direto ao que procuram.
*Base existente:* já implementado, com rolagem suave. Mantido; mudam os rótulos e o mecanismo de navegação (seção 5.3).

**A5. Alternância entre tema claro e escuro**
*Objetivo:* nenhum, do ponto de vista de mensagem — é acabamento herdado que já está pronto.
*Regras:* nenhum esforço adicional é investido nela. Precisa continuar funcionando após cada etapa. Se houver conflito entre o conteúdo novo e o tema claro, **o tema escuro é o padrão** e o claro é ajustado depois.

### Módulo B — Apresentação dos projetos

**B1. Estrutura padrão do card de projeto**
*Objetivo:* tornar cada projeto compreensível para um leigo sem ficar raso para um técnico.
*Regra estrutural (obrigatória, sem exceção entre HGS e HFS):* oito elementos, sempre na mesma ordem:

1. Nome do projeto
2. Uma linha dizendo o que é, em linguagem comum
3. O problema que existia antes
4. O que o sistema faz
5. O que mudou na rotina da equipe
6. Onde está hoje
7. Imagens de tela do sistema funcionando
8. Tecnologias usadas, sem nível declarado

*Regras:* a tecnologia aparece **sempre por último**, nunca como abertura do card. Nenhum card é publicado sem pelo menos uma imagem de tela.
*Dependências:* depende das imagens capturadas e conferidas (seção 21).

**B2. Card do HGS — Hotel Governance System**

| Elemento | Conteúdo definido |
| --- | --- |
| 1. Nome | HGS — Hotel Governance System |
| 2. O que é | Sistema de governança hoteleira para uma pousada de 38 quartos |
| 3. Problema anterior | A comunicação entre recepção, camareiras e manutenção era verbal e o controle dos quartos era feito num caderno de papel — informação se perdia, ninguém sabia o estado real dos quartos e não havia histórico para consultar |
| 4. O que faz | Cada quarto tem status visível para todos; quando a recepção registra um checkout, a camareira é avisada automaticamente; quando a limpeza termina, a recepção já sabe que o quarto está liberado. Tudo fica registrado com data, hora e responsável |
| 5. O que mudou | Descrito por mudança de comportamento da equipe, **sem números** — por exemplo, a camareira não precisa mais descer à recepção para saber quais quartos liberar, e a recepção vê o status na tela em vez de ligar para o andar |
| 6. Onde está hoje | Em produção, usado pela equipe real da pousada. A versão em aplicativo, para celular, está em construção |
| 7. Imagens | Duas capturas, obrigatórias, com dados fictícios |
| 8. Tecnologias | PHP, MySQL, HTML, CSS, JavaScript, Git e GitHub, Figma. **Nota (texto curto abaixo das pílulas):** "protótipo original em Java; app em construção com Flutter e Dart" |

Contém também o **botão de solicitação de apresentação do sistema** (ver C1), no estilo `.btn-ghost`.

**B3. Card do HFS — Hotel Finance System**

| Elemento | Conteúdo definido |
| --- | --- |
| 1. Nome | HFS — Hotel Finance System |
| 2. O que é | Sistema de controle financeiro para o mesmo contexto |
| 3. Problema anterior | O controle de contas a pagar e receber era disperso, sem visão consolidada do saldo e dos vencimentos |
| 4. O que faz | Registra receitas e despesas, acompanha o que foi pago e o que está pendente, e mostra saldo disponível e previsto com indicadores |
| 5. O que mudou | Descrito por mudança de comportamento, **sem números** |
| 6. Onde está hoje | Em uso pela equipe gerencial da pousada, em fase de testes |
| 7. Imagens | Duas capturas, obrigatórias, com **valores financeiros mascarados** |
| 8. Tecnologias | PHP, MySQL, HTML, CSS, JavaScript, Git e GitHub |

*Regra:* **o HFS não tem acesso nem botão de demonstração** — apenas imagens.

**B4. Descrição do "o que mudou" em linguagem de rotina**
*Regra:* nenhum número é publicado enquanto não houver dado apurado. O elemento fica escrito de forma que um número possa ser inserido depois sem reescrever o parágrafo.

**B5. Imagens de tela**
*Objetivo:* para quem não lê código, ver o sistema funcionando vale mais que qualquer parágrafo.
*Regras:* obrigatórias, duas por card; nenhuma pode conter nome, documento ou telefone real de hóspede; as do HFS não exibem valores reais. Tratamento técnico na seção 21.

### Módulo C — Credibilidade e comprovação

**C1. Solicitação de apresentação do sistema (HGS)**
*Objetivo:* transformar a afirmação "está em produção" em algo verificável e identificar contato qualificado.
*Comportamento definido:* o botão leva ao WhatsApp (`https://wa.me/5581995212456?text=...`) com a mensagem previamente preenchida "Olá, João. Vi seu portfólio e gostaria de agendar uma apresentação do Hotel Governance System." Nenhum dado é coletado pelo site. Estilo do botão: `.btn-ghost` (ver 12.3).
*Regra determinante desta versão:* **o perfil somente leitura no HGS não existe e não será criado nesta janela.** O HGS está em produção com a equipe real, e abrir acesso externo a ambiente de produção não é adequado. Portanto:

- o botão é de **solicitação de apresentação do sistema**, conduzida pelo autor, ao vivo ou por vídeo gravado;
- o texto do botão e o trecho correspondente do card refletem **apresentação conduzida**, não navegação autônoma pelo sistema;
- nenhuma credencial aparece na página;
- **nenhum link quebrado é admissível neste ponto** — é critério de aceitação.

*Onde aparece:* **apenas no card do HGS**.

**C2. Seção de tecnologias agrupada por contexto de uso**
*Objetivo:* dar sinal de substância ao público técnico sem fazer afirmação que ninguém consegue verificar.
*Conteúdo definido — dois grupos, com estes itens exatos:*

- **"Usei em projetos que estão no ar":** Java, PHP, MySQL, HTML, CSS, JavaScript, Git e GitHub, Figma
- **"Estudando agora":** Flutter e Dart, Python

Acompanha **uma linha** sobre o curso de ADS e a previsão de conclusão: **Análise e Desenvolvimento de Sistemas, conclusão prevista para junho de 2028**.
*Regras:* sem barra, sem porcentagem, sem estrela, sem bolinha, sem ícone graduado e sem nível declarado por texto, em nenhum ponto do site. Cada item precisa ter lastro no grupo em que aparece — nenhuma tecnologia do grupo "usei em projetos que estão no ar" pode estar ausente dos cards de projeto. **Java** tem lastro na nota do card do HGS ("protótipo original em Java"), o que satisfaz a RN09.

**C3. Bloco de processo de design**
*Objetivo:* mostrar evidência de processo de design a um público de agência de comunicação, para quem isso comunica bem.
*Posição:* **bloco próprio, após os dois cards de projeto.** Não entra dentro do card do HGS.
*Conteúdo:* recortes do protótipo e do design system construídos no Figma para o app do HGS, com uma linha curta explicando que o app está em construção e passou por etapa de protótipo e design system.
*Regra determinante:* a posição em bloco próprio **preserva a exigência de que os dois cards sigam exatamente a mesma estrutura de oito elementos**. Colocar as imagens do Figma dentro do card do HGS quebraria essa paridade, porque o HFS não teria equivalente.
*Prioridade:* é o item de **menor prioridade** da página e o **primeiro candidato a corte** se o prazo apertar. Cortá-lo não afeta nenhuma outra seção.

### Módulo D — História e contexto pessoal

**D1. Seção "Sobre mim"**
*Objetivo:* dar contexto de quem é o autor a quem chega sem repertório prévio (currículo enviado, link no LinkedIn). A seção **abre a página**, logo após a apresentação curta (ver alteração consciente de escopo na seção 1), então precisa ser **curta** — o visitante tem de chegar rápido aos sistemas, que seguem sendo o centro do site.
*Conteúdo:* **três parágrafos curtos**, na sequência: origem em marketing, atendimento e coordenação de equipe → observação do problema no próprio trabalho → decisão de estudar ADS e construir. A **formação em Marketing** (Bacharelado, UNIBRA, 2020) aparece **ao lado da de ADS**, como parte do perfil de quem une repertório de negócio e capacidade de construir — não como curiosidade e **não** como segunda vitrine de trabalhos de comunicação.
*Elemento de objetivo:* uma formulação que sirva às **duas frentes — desenvolvimento e marketing** — sem parecer indefinição: uma posição que aproveite a combinação de repertório de negócio com capacidade de construir a solução. (Na base isso vive num card "objetivo"; na revisão vira uma frase dentro dos parágrafos.)
*Inclui uma frase sobre o artigo científico:* artigo submetido ao ERBASE 2026 sobre digitalização de pousadas de pequeno porte, com o feedback dos avaliadores incorporado à evolução do projeto — evolução técnica e validação com usuários reais.
*Regras:* a frase do artigo **não afirma nem sugere aceitação** e **não se desculpa** nem trata o resultado como fracasso. O texto **não menciona** mudança para Recife nem Porto Digital. **Não inclui experiência profissional detalhada** — o portfólio não é currículo; o currículo está disponível para download.

### Módulo E — Contato e conversão

**E1. Seção de contato em tela cheia (fechamento da página)**
Bloco final, com pergunta convidativa e as formas de contato.

**E2. Ação principal — WhatsApp**
*Regra:* o WhatsApp é a **única ação de conversão em destaque** e, **na seção de contato, é o único botão em destaque visual**. O botão âmbar preenchido (`.btn-primary`) aparece em **no máximo dois momentos** na página inteira: "Ver projetos", no bloco de abertura, e o WhatsApp, na seção de contato. Todo o restante — inclusive o botão de apresentação do HGS — usa o estilo secundário (`.btn-ghost`). Um site com vários botões concorrendo entre si não converte nenhum.

**E3. Ações secundárias — e-mail, LinkedIn, GitHub e download do currículo em PDF**
Presentes e acessíveis, porém visualmente subordinados ao WhatsApp. O currículo é baixado por **link direto, sem formulário**.

### Módulo F — Requisitos transversais

**F1. Boa experiência no celular.** O site precisa funcionar bem em tela pequena, porque é assim que o público principal vai abri-lo. Atenção especial às imagens de tela. Especificação na seção 12.6.
**F2. Carregamento rápido.** Sem animações pesadas nem efeitos que atrasem a exibição. Especificação na seção 24.3 e tetos na seção 21.
**F3. Identidade visual devdapraia herdada.** Paleta, tipografia, componentes e alternância de tema vêm da base e não são redecididos.
**F4. Estrutura de página herdada.** Página única, menu fixo com rolagem suave, seções com rótulo monoespaçado, blocos em card com borda sutil, hero com avatar e fechamento de contato em tela cheia.

---

## 7. Fora de Escopo

### 7.1 Adiados — dependem de material ou de tempo

| Item | Motivo |
| --- | --- |
| Depoimento da gerência ou da proprietária da pousada | Depende de pedir, esperar resposta e possivelmente obter autorização. **Se chegar dentro das duas semanas, é promovido a essencial** e exige um lugar definido na página |
| Números de impacto (quartos, usuários, registros por mês) | Exigem apuração com calma. O elemento "o que mudou" do card já prevê onde encaixá-los depois |
| Página dedicada por projeto | A página única com os dois cards resolve nesta versão |
| Vídeo ou GIF do fluxo do sistema | Gravar e editar consome tempo que o prazo não tem. As imagens cumprem o papel mínimo |
| Seção de experiência profissional em linha do tempo | A experiência formal é recepção e marketing; formato de carreira de desenvolvedor enfraquece a mensagem |
| Versão em inglês | Sem necessidade identificada no público atual |
| Blog | Exige produção contínua |
| Medição de acessos (analytics) | Útil depois; não altera a mensagem agora |
| Domínio próprio | O apontamento posterior não exige retrabalho no site |
| Ambiente de demonstração do HGS separado da produção | Permitiria acesso externo sem risco à operação. Fora desta versão |
| Persistência da preferência de tema | Ver seção 12.7 |

### 7.2 Descartados para este caso

| Item | Motivo |
| --- | --- |
| Linha do tempo de versões técnicas (v1.0 Portugol, v2.0 Java, v4.0 MySQL) | Exige vocabulário de programação. Substituída pelo card de projeto. **Não pode existir em nenhum ponto da página** |
| Autoavaliação de nível de habilidade (bolinhas, barras, estrelas, percentuais) | Subjetiva, não verificável e expõe fragilidade sem necessidade |
| Demonstração aberta, sem controle | Risco real de expor dados de hóspedes e de alterar informação em sistema em produção |
| Trechos de código na página | Afastam exatamente o público que o site precisa conquistar |
| Lista de projetos de curso e exercícios | Diluem a força dos dois sistemas reais |
| Parede de badges e certificados | Vira ruído visual |
| Animações pesadas, terminal falso, efeito de digitação | Atrasam o carregamento e dão aparência de modelo pronto |
| Qualquer menção a preço, venda ou licenciamento | Mistura duas conversas |

### 7.3 Fora do texto por decisão editorial

- **Nome da pousada** — o site diz "uma pousada de 38 quartos em Maragogi/AL".
- **Plano de mudança para Recife e meta do Porto Digital** — assunto de conversa, não de página.
- **Uso de inteligência artificial na construção dos sistemas** — não vira tema do site, mas também não é negado: nenhum texto afirma que cada linha foi escrita sozinho.
- **Resultado da submissão do artigo** — a menção diz o que foi submetido e o que foi feito com o feedback.

### 7.4 Fora de escopo técnico — não devem ser inventados

Banco de dados de qualquer tipo; autenticação, login, cadastro ou área restrita; RBAC, perfis com permissão ou matriz de permissões; auditoria, soft delete, log de erros ou log de segurança; configurações globais, painel administrativo ou gerenciador de conteúdo; formulário de contato ou qualquer captura de dado do visitante; APIs, webhooks ou integração com o HGS, com o HFS ou com sistemas externos; exportações em CSV, PDF ou Excel geradas pelo site; upload de arquivo pelo visitante; analytics, cookies ou aviso de cookies; newsletter, comentários ou área de interação; aplicativo mobile; versão em outro idioma; frameworks, bibliotecas, Bootstrap ou dependências externas de qualquer natureza; arquivo `.env` ou arquivo de configuração de credenciais; migrations e SQL.

---

## 8. Perfis de Usuário e Permissões

**Não existe sistema de permissões a implementar.** O site é integralmente público, sem contas, sem login e sem área restrita. Os "perfis" descritos são **tipos de visitante**, não credenciais. Todos veem exatamente o mesmo conteúdo.

| Perfil | Natureza | Pode fazer | Não pode fazer |
| --- | --- | --- | --- |
| Gestor de agência | Visitante público | Ver todo o conteúdo; acionar WhatsApp e demais contatos; baixar o currículo | Alterar qualquer conteúdo; acessar dados reais dos sistemas |
| Recrutador de estágio | Visitante público | Navegar pelo menu; baixar o currículo; abrir LinkedIn e GitHub | O mesmo acima |
| Avaliador técnico | Visitante público | Conferir tecnologias e situação de cada sistema; solicitar apresentação | Obter credencial pelo site; navegar pelo HGS por conta própria |
| Autor (João) | Mantenedor | Criar, alterar e publicar todo o conteúdo pelo repositório | — (não há painel de edição; tudo é feito no código-fonte) |

**Não deve ser produzida matriz de permissões, tabela de papéis, menu por perfil ou controle de acesso.** Não há o que controlar. A implementação não deve criar nenhum mecanismo que diferencie visitantes.

---

## 9. Recursos Estruturais do Sistema

| Recurso | Situação neste projeto |
| --- | --- |
| Autenticação | **Não existe.** Site integralmente público |
| RBAC / controle de acesso | **Não existe.** Não há perfis com permissão diferenciada |
| Auditoria | **Não se aplica.** Não há registros a auditar. O histórico de alterações fica no Git |
| Soft delete | **Não se aplica.** Não há registros a excluir |
| Log de erros | **Não se aplica.** Não há execução de código de servidor |
| Log de segurança | **Não se aplica** |
| Configurações globais | **Não existem.** Conteúdo alterado diretamente no código |
| Uploads e anexos | **Não há envio pelo visitante.** Imagens e currículo são arquivos publicados — ver seção 21 |
| Exportações | **Não há.** O currículo em PDF é arquivo estático com download direto |
| APIs | **Não existem** |
| Integrações externas | **Não existem.** O site não se comunica com o HGS nem com o HFS |

### 9.1 Recurso estrutural efetivamente adotado: controle de versão com Git

*Objetivo:* neste projeto, o Git cumpre o papel de histórico, contingência e ponto de retorno — funções que, em outro projeto, caberiam a auditoria e log.
*Onde é aplicado:* repositório `devdapraia.github.io` no GitHub, público.
*Comportamento esperado:*

- o **primeiro commit** contém a base existente **intacta**, sem nenhuma modificação. Esse commit é o ponto de retorno do projeto;
- cada etapa de revisão de conteúdo gera pelo menos um commit próprio, com o site em estado publicável;
- o branch `rascunho` concentra o trabalho; o `main` é o que está publicado.

*Cuidado de segurança determinante:* o repositório é público e **o histórico é permanente**. Remover um arquivo do site não o remove do histórico. Ver seções 21 e 24.
*Critério de validação:* é possível voltar ao estado da base intacta a qualquer momento, e nenhum commit contém dado de terceiro ou credencial.

---

## 10. Entidades do Sistema

**Não há entidades de dados e não há modelo de dados a construir.** O site não persiste informação. Não devem ser criadas tabelas, campos, chaves, índices ou relacionamentos.

O que existe é **conteúdo fixo publicado**. A lista abaixo é a lista de materiais que sustenta o cronograma — serve para orientar a produção, não para virar estrutura de dados.

| Conteúdo | Situação | Observações |
| --- | --- | --- |
| Código da base existente | **Recebido** | Aprovado. Não é refeito. Fornecido pelo autor em `docs/index.html`; entra intacto como primeiro commit — ver Fase 1 |
| Foto profissional (avatar) | **Recebida** | Foto real de João em `docs/foto_principal.jpeg`. Substitui o avatar ilustrado da base. Tratar (recorte quadrado + WebP + redimensionamento ~320px, peso << 150 KB) e copiar para `imagens/avatar.png` ou `imagens/avatar.webp` |
| Texto de posicionamento (uma linha) | A escrever | Frase mais importante do site |
| Texto de apresentação curta | A escrever | Duas ou três linhas |
| Conteúdo do card do HGS | A escrever | Oito elementos da estrutura padrão |
| Conteúdo do card do HFS | A escrever | Mesma estrutura |
| Imagens de tela do HGS | **A capturar** | Duas. Dados fictícios obrigatórios |
| Imagens de tela do HFS | **A capturar** | Duas. Valores mascarados |
| Imagens do Figma (protótipo e design system) | **A capturar** | Bloco de processo. Sem dado real |
| Texto "Sobre mim" | A escrever | Três parágrafos curtos, com a frase do ERBASE e a formação em Marketing ao lado da de ADS (ver 6/D1) |
| Listas de tecnologias | **Já definidas** | Por projeto (B2 e B3) e por contexto de uso (C2) |
| Formação | **Definida** | Duas: **Análise e Desenvolvimento de Sistemas** — conclusão prevista para **junho de 2028**; **Bacharelado em Marketing** — **UNIBRA, 2020** (dados do currículo). Na seção de tecnologias (C2), a linha de formação cita **só a de ADS** (é contexto técnico); a de Marketing aparece na seção "Sobre mim" (6/D1). |
| Currículo em PDF | **Recebido** | `docs/curriculo-joao-victor.pdf`. Conferido quanto a dados sensíveis (sem endereço, documento ou data de nascimento). Copiar para `arquivos/curriculo-joao-victor.pdf` |
| Links de contato e perfis | **Recebidos** | WhatsApp `5581995212456`, e-mail `jvictorna.dev@gmail.com`, LinkedIn `/in/joaoadorno`, GitHub `/devdapraia`. Só o GitHub existia na base — ver seção 23 |

---

## 11. Modelo de Dados Proposto

**Não se aplica a este projeto.**

Não existe banco de dados, não existe persistência e não existe informação a modelar. Em consequência, **não há**:

- tabelas, campos, tipos de dados, chaves primárias ou estrangeiras;
- índices ou constraints;
- campos de auditoria (`created_at`, `created_by`, `updated_at`, `updated_by`);
- campos de soft delete;
- **migrations** de qualquer natureza, nem mecanismo de controle de execução, nem pasta `database/migrations/`, nem rotina de execução;
- SQL de qualquer tipo.

A IA codificadora **não deve criar** nenhum desses artefatos, nem estrutura preparatória para eles. A introdução de qualquer um deles é um desvio de escopo.

---

## 12. Módulos e Telas

O site tem **uma única página**. As "telas" são as seções da página, na ordem de leitura. O layout visual detalhado de cada componente está no `docs/DESIGN.md`; esta seção define conteúdo, comportamento, estados e as regras dos componentes que ainda não existem na base.

### 12.1 Menu fixo

*Objetivo:* permitir acesso direto às seções.
*Usuários:* todos, principalmente recrutador e avaliador técnico.
*Elementos:* quatro links, na ordem das seções na página — **Sobre, Projetos, Tecnologias, Contato** (ver alteração consciente de escopo na seção 1).
*Comportamento:* barra fixa no topo, fundo translúcido, borda inferior sutil; links em maiúsculas; cor muda para `--destaque` no hover e no estado ativo. Navegação por âncora real (seção 5.3). Menu **centralizado**, sem logo nem nome de marca à esquerda — o layout do `<nav>` da base é preservado.
*Estado ativo:* opcional. Se implementado, é feito por `IntersectionObserver` marcando a seção visível; se não for implementado, o hover basta. Não é critério de aceitação.
*Estados:* não há estados de erro, vazio ou carregamento.
*Design:* componente 4.1 do `docs/DESIGN.md`, preservado.

### 12.2 Bloco de abertura (hero)

*Objetivo:* entregar a mensagem central e um caminho para o conteúdo em dez segundos.
*Elementos exibidos:* tag superior em Space Mono; avatar circular (foto real de João); `h1` com nome (sobrenome em `--destaque`); linha de posicionamento; selo de credibilidade; grupo de botões.
*Ações:* botão primário (`.btn-primary`, texto "Ver projetos") → rola até `#projetos`; botão secundário (`.btn-ghost`, texto "Falar comigo") → rola até `#contato`. O hero **não contém** link de WhatsApp nem botão de GitHub — o GitHub sai do hero e permanece na seção de contato.
*Regra de composição:* posicionamento, foto, selo e o grupo de botões precisam caber **acima da dobra em tela de celular**. Se não couberem, reduzir na ordem: tamanho do avatar → tamanho do `h1` → espaçamentos verticais. **Nunca cortar o selo nem os botões.**
*Mensagens:* nenhuma.
*Design:* componente 4.2 do `docs/DESIGN.md`, preservado; muda o texto.

### 12.3 Card de projeto — componente novo

Componente marcado como "A DEFINIR NO FSD" no `docs/DESIGN.md`. Especificação:

*Base visual:* reaproveita o padrão de `.sobre-card` — fundo `--card-bg`, borda de 1px em `--card-border`, raio `12px`, `padding: 20px` **herdado de `.sobre-card`** (valor da base; não é ajustado para a escala, para não criar inconsistência com os cards já existentes na mesma página). Não introduz cor nova nem sombra. Os espaçamentos **novos** internos do card — gaps e margens entre os oito elementos — usam a escala `4 · 6 · 8 · 12 · 16 · 24 · 28 · 32 · 40 · 48`.
*Largura:* o card ocupa a largura total da coluna de conteúdo (`780px` no máximo). Os dois cards são empilhados verticalmente, com espaçamento da escala entre eles. **Não são colocados lado a lado**, nem no desktop: cada card contém imagens e precisa de largura.
*Ordem interna — os oito elementos, na ordem fixa:*

| # | Elemento | Tratamento tipográfico |
| --- | --- | --- |
| 1 | Nome do projeto | `h3` do padrão, peso 600 |
| 2 | Uma linha do que é | Texto de card, peso 300, cor `--texto-muted` |
| 3 | O problema que existia antes | Rótulo curto em maiúsculas (padrão de rótulo de card, peso 600, `--destaque`) + parágrafo |
| 4 | O que o sistema faz | Mesmo padrão de rótulo + parágrafo |
| 5 | O que mudou na rotina | Mesmo padrão de rótulo + parágrafo |
| 6 | Onde está hoje | Rótulo + linha curta. Pode usar marcador circular pequeno, herdado do padrão de marcadores |
| 7 | Imagens de tela | Duas imagens — ver 12.4 |
| 8 | Tecnologias | Lista de itens de tecnologia, sem nível — ver 12.5 |

*Botão:* apenas o card do HGS recebe o botão de solicitação de apresentação, posicionado **após o elemento 8**, usando **`.btn-ghost`** (estilo secundário — o âmbar preenchido fica reservado ao "Ver projetos" do hero e ao WhatsApp do contato; ver E2 e RN13). O card do HFS não tem botão.
*Regra inviolável:* os dois cards têm exatamente os mesmos oito elementos, nos mesmos rótulos e na mesma ordem. Se um elemento não tiver conteúdo, o conteúdo é escrito — o elemento não é omitido.
*Estados:* não há estados de erro ou carregamento. O estado "imagem ainda não capturada" **não pode ir ao ar**: sem imagem, o card não é publicado.

### 12.4 Imagens de tela dentro do card

*Quantidade:* duas por card.
*Disposição:* lado a lado em telas largas (grade de duas colunas, `gap` da escala), empilhadas em telas estreitas.
*Requisitos de marcação:*

- atributos `width` e `height` declarados, com as dimensões reais do arquivo, para evitar deslocamento do conteúdo durante o carregamento;
- `loading="lazy"` em toda imagem abaixo da primeira dobra;
- `alt` descritivo obrigatório, dizendo o que a tela mostra (por exemplo, "Painel de status dos quartos do HGS, com quartos marcados como limpo, sujo e em manutenção"). O `alt` **não** contém dado de hóspede nem nome da pousada;
- raio de borda `12px` e borda de 1px em `--card-border`, para coerência com o card.

*Ampliação ao toque:* uma captura de sistema reduzida à largura de um celular tende a ficar ilegível. Comportamento definido, **sem biblioteca externa**:

1. cada imagem é envolvida por um link (`<a>`) apontando para o próprio arquivo de imagem, com `target="_blank"` e `rel="noopener"`. Isso garante ampliação funcional **mesmo sem JavaScript**;
2. o `js/script.js` intercepta o clique nesses links e abre uma sobreposição (overlay) própria: fundo escuro translúcido, imagem centralizada ocupando até 100% da largura e 90% da altura da viewport, com rolagem horizontal permitida quando a imagem for mais larga;
3. a sobreposição fecha ao clicar em qualquer ponto, ao tocar no botão de fechar e ao pressionar `Esc`;
4. enquanto aberta, a rolagem do corpo da página é travada;
5. a sobreposição usa as variáveis de cor do tema e funciona nos dois temas;
6. nenhuma animação além de uma transição de opacidade curta, dentro dos valores da seção 6 do `docs/DESIGN.md`.

### 12.5 Grupo de tecnologias — componente novo

Substitui `.stack-item` com `.tech-dot`, que sai junto com a autoavaliação de nível.

*Uso em dois lugares, com o mesmo componente:*

- **dentro dos cards de projeto** (elemento 8), listando as tecnologias daquele projeto;
- **na seção de tecnologias**, em dois grupos por contexto de uso.

*Especificação visual:* cada tecnologia é um item em "pílula" — texto curto, padding da escala, raio `8px`, borda de 1px em `--card-border`, fundo `--card-bg`, texto em peso 300. Itens dispostos em linha com quebra automática (`flex-wrap`) e `gap` da escala. Sem ícone, sem bolinha, sem barra, sem percentual, sem estrela, **sem qualquer indicação de nível**.
*Título do grupo (apenas na seção de tecnologias):* rótulo em Space Mono, maiúsculas, cor `--acento`, com o texto exato dos dois grupos definidos em C2.
*Linha de formação:* aparece abaixo dos dois grupos, em texto corrido, peso 300.
*Estado hover:* borda passa a `--destaque`, deslocamento de `-2px`, dentro das transições já definidas. É acabamento, não indica interatividade — os itens **não são links**.

### 12.6 Bloco de processo de design — componente novo

*Objetivo:* mostrar que o app do HGS passou por protótipo e design system.
*Posição:* seção própria, imediatamente após os dois cards de projeto, com `id="processo"`.
*Conteúdo:* rótulo de seção em Space Mono, título `h2`, uma linha curta de texto e os recortes do Figma.
*Imagens:* mesmas regras técnicas de 12.4 (dimensões declaradas, `loading="lazy"`, `alt` descritivo, ampliação ao toque). Quantidade sugerida: duas a três.
*Prioridade:* **primeiro candidato a corte.** A remoção desta seção não pode afetar nenhuma outra parte da página — o bloco deve ser autocontido em marcação e estilo.

### 12.7 Seções de tecnologias, "Sobre mim" e contato

**Ordem na página (ver alteração consciente de escopo na seção 1):** `#sobre` vem **antes** de `#projetos` (logo após a apresentação curta); `#tecnologias` fica entre `#projetos`/`#processo` e `#contato`.

**Tecnologias (`#tecnologias`):** rótulo + `h2` + dois grupos (12.5) + linha de formação (só a de ADS — é contexto técnico). Sem imagens.

**Sobre mim (`#sobre`):** rótulo + `h2` + três parágrafos **curtos** em texto corrido, peso 300, com largura de leitura confortável. Como a seção **abre a página**, é enxuta — não atrasa a chegada aos cards. A formação em Marketing aparece ao lado da de ADS (6/D1). A frase do ERBASE fica no terceiro parágrafo. Sem card, sem imagem adicional.

**Contato (`#contato`):** bloco de fechamento em tela cheia (altura mínima equivalente à viewport, com o conteúdo centralizado verticalmente), com pergunta convidativa, o botão de WhatsApp em `.btn-primary` — **único botão em destaque visual da seção** — e, abaixo, e-mail, LinkedIn, GitHub e download do currículo como links secundários ou botões ghost, visivelmente subordinados.
*Currículo:* link direto para `arquivos/curriculo-joao-victor.pdf`, com o atributo `download`. Sem formulário e sem etapa intermediária.
*Links externos:* todos com `target="_blank"` e `rel="noopener noreferrer"`.

### 12.8 Responsividade — pontos de quebra

**Este é o ponto de maior risco técnico da revisão**, porque o visitante principal acessa pelo celular. Hoje **não existe nenhuma media query no CSS**.

Pontos de quebra definidos:

| Faixa | Alvo |
| --- | --- |
| Acima de `768px` | Comportamento atual da base, preservado |
| Até `768px` | Tablet e celular grande |
| Até `480px` | Celular |

Comportamento por componente:

| Componente | Até `768px` | Até `480px` |
| --- | --- | --- |
| `.hero-content` | Empilha em coluna, avatar acima do texto, conteúdo centralizado | Avatar reduzido para `110px` |
| Título `h1` (`2.8em`) | Reduz para `2.2em` | Reduz para `1.9em`, com quebra controlada do nome |
| `.sobre-grid` (duas colunas) | Passa a uma coluna | Uma coluna |
| Imagens do card (duas colunas) | Passa a uma coluna, empilhadas | Uma coluna |
| Paddings laterais de `40px` | Reduzem para `24px` | Reduzem para `16px` |
| Paddings verticais de seção (`48px`) | Reduzem para `32px` | `24px` |
| Menu (`gap: 32px`, 4 links) | `gap` reduz para `16px` e a fonte para `0.8em` | `gap` de `12px`; permitir quebra em duas linhas em vez de estourar a largura ou cortar item |
| Botão de tema | Mantido, `24px` das bordas | Mantido |
| Grupo de botões do hero | Já usa `flex-wrap`; mantido | Botões ocupam a largura total quando quebrarem |

*Referência de teste:* a menor largura conferida é **360px**. Em nenhuma faixa pode existir rolagem horizontal na página.

### 12.9 Persistência da preferência de tema

Hoje a escolha de tema se perde ao recarregar.

**Decisão desta versão: a persistência não é implementada.** Motivos: o site não guarda nada sobre quem visita, o tema escuro é o padrão e a alternância é acabamento herdado, no qual nenhum esforço adicional deve ser investido. Fica registrado como possibilidade futura na seção 27.

### 12.10 Revelação por rolagem

A base implementa revelação progressiva por `IntersectionObserver`, hoje acoplada a `.timeline-item`, que sai.

**Decisão: manter o comportamento, reapontando o seletor** para os cards de projeto, os itens de tecnologia e as imagens do bloco de processo, preservando `threshold: 0.1` e o atraso escalonado de `120ms`.

Condição obrigatória de melhoria progressiva: **o estado inicial `opacity: 0` só pode ser aplicado por JavaScript.** O CSS entregue mantém os elementos visíveis por padrão; o script adiciona a classe que os esconde e, em seguida, os revela. Assim, se o JavaScript falhar, o conteúdo continua visível — o oposto do comportamento atual, em que uma falha deixaria a página em branco.

Se, durante a implementação, esse ajuste se mostrar custoso, a alternativa aceitável é **remover a revelação por rolagem junto com o script correspondente**. Nenhum critério de aceitação depende dela.

### 12.11 Componentes a remover

| Componente | Motivo |
| --- | --- |
| `.timeline` e `.timeline-item` (marcação e CSS) | A linha do tempo de versões técnicas é descartada |
| `.stack-item` com `.tech-dot` (marcação e CSS) | A autoavaliação de nível é descartada |

O CSS desses componentes sai junto com a marcação, **desde que nada mais o utilize** — a verificação é obrigatória antes da remoção. Essa é a única remoção de CSS autorizada nesta versão.

---

## 13. Fluxos Funcionais

### Fluxo 1 — Visita do gestor de agência (fluxo principal)

*Perfil:* gestor de agência, no celular.
*Pré-condições:* link publicado e respondendo sob HTTPS.

1. O gestor recebe o link por WhatsApp e abre o site no celular.
2. A página exibe imediatamente o bloco de abertura: nome, posicionamento em uma linha, foto e selo de uso real — sem exigir rolagem.
3. Logo abaixo, a apresentação curta e a seção "Sobre mim" enxuta dão o contexto de quem é o autor — trajetória de marketing, atendimento e coordenação até construir software — sem atrasar a chegada aos sistemas.
4. O gestor rola e encontra o card do HGS, com o problema antes da solução e as imagens de tela.
5. Toca em uma imagem e ela é ampliada de forma legível; fecha a ampliação e continua a leitura.
6. Rola novamente e encontra o card do HFS, na mesma estrutura.
7. Chega ao bloco de contato em tela cheia, com o WhatsApp em destaque.
8. Toca no botão e inicia a conversa.

*Resultado esperado:* conversa iniciada com contexto já formado.
*Erros possíveis:* imagem pesada atrasando a exibição; imagem ilegível em tela pequena; rolagem horizontal por componente estourando a largura. Todos são prevenidos pelas seções 12.8 e 21.
*Permissões e registros:* não se aplicam. Nada é registrado.

### Fluxo 2 — Visita do recrutador de estágio

*Perfil:* recrutador, geralmente no computador.

1. Chega pelo link no LinkedIn ou por uma candidatura.
2. Usa o menu fixo para ir direto à seção que lhe interessa.
3. Confere as tecnologias por contexto de uso e a linha de formação.
4. Aciona o link do currículo e o PDF é baixado **sem formulário e sem etapa intermediária**.
5. Abre LinkedIn ou GitHub a partir dos links secundários, em nova aba.

*Erros possíveis:* PDF ausente ou com caminho errado; link externo quebrado. Ambos cobertos pela conferência obrigatória de links.

### Fluxo 3 — Solicitação de apresentação do sistema (HGS)

*Perfil:* avaliador técnico ou gestor mais interessado.
*Pré-condição:* botão presente apenas no card do HGS.

1. O visitante lê o card do HGS e quer verificar o sistema por dentro.
2. Aciona o botão de solicitação de apresentação.
3. O site abre o canal de contato já existente (WhatsApp com mensagem previamente preenchida, ou e-mail com assunto preenchido). **Nenhum dado é coletado pelo site.**
4. João recebe a solicitação e avalia.
5. João conduz a apresentação do sistema, ao vivo ou por vídeo gravado.

*Resultado esperado:* contato qualificado, sem qualquer acesso externo ao ambiente de produção.
*Regra:* nenhuma credencial é publicada e nenhum acesso autônomo é concedido nesta versão.
*Erro inadmissível:* botão sem destino ou com destino quebrado.

### Fluxo 4 — Atualização de conteúdo pelo autor

*Perfil:* autor.

1. João decide alterar um texto, trocar uma imagem ou substituir o currículo.
2. **Se for imagem ou PDF:** confere o arquivo contra as regras de conteúdo (seção 21) **antes** de adicioná-lo ao repositório.
3. Edita diretamente no código-fonte, no branch `rascunho`. Não existe painel de edição.
4. Confere localmente e, quando a alteração afetar layout ou imagens, confere no celular real.
5. Integra ao `main`; a publicação ocorre automaticamente.
6. Confere o endereço publicado.

*Erro possível e custoso:* enviar imagem com dado real. A correção posterior **não remove o arquivo do histórico do repositório público**. Por isso o passo 2 é obrigatório e anterior ao envio.

---

## 14. Validações e Regras de Negócio

Não há formulário, entrada de usuário nem persistência — portanto **não há validação de campo, formato, limite ou obrigatoriedade em tempo de execução**. As regras abaixo são regras de conteúdo e de publicação, verificáveis por conferência antes de cada publicação.

### 14.1 Proteção de dados e de terceiros

- **RN01.** Nenhuma imagem publicada pode conter dado pessoal real de hóspede — nome, documento ou telefone. Todas as capturas usam dados fictícios ou telas sem informação pessoal.
- **RN02.** As imagens do HFS exibem valores financeiros mascarados.
- **RN03.** A pousada não é nomeada em nenhum ponto do site — nem em texto, nem em `alt`, nem em nome de arquivo, nem em comentário de código.

### 14.2 Acesso à demonstração

- **RN04.** O acesso de demonstração nunca é aberto.
- **RN05.** Nenhum acesso externo ao ambiente de produção é concedido nesta versão.
- **RN06.** A apresentação vale apenas para o HGS. O HFS é apresentado somente por imagens.
- **RN07.** Como o perfil somente leitura não existe, o botão do card do HGS é de **solicitação de apresentação do sistema**, e este é o comportamento definitivo desta versão — não uma alternativa condicional.

### 14.3 Conteúdo e comunicação

- **RN08.** Cada projeto é contado como problema resolvido, não como ficha técnica. A tecnologia aparece sempre no último elemento do card.
- **RN09.** Nenhuma afirmação sem lastro: sem números inventados, sem nível de habilidade, sem cargo que não corresponda à realidade, sem tecnologia listada em grupo ao qual ela não pertence.
- **RN10.** Enquanto não houver dado apurado, o "o que mudou" é descrito por mudança de rotina, sem números.
- **RN11.** O site não menciona venda, preço ou licenciamento dos sistemas.
- **RN12.** Apenas os dois sistemas reais são apresentados como projetos.
- **RN16.** Nenhum ponto do site declara nível de domínio de tecnologia — nem por texto, nem por barra, nem por percentual, nem por estrela, nem por ícone graduado.
- **RN17.** A menção ao artigo do ERBASE 2026 registra que foi submetido e que o feedback dos avaliadores foi incorporado à evolução do projeto. Não afirma nem sugere aceitação, e não é apresentada como fracasso nem pedido de desculpas.
- **RN18.** Cada card de projeto segue a mesma estrutura de oito elementos, na mesma ordem, sem exceção entre HGS e HFS.

### 14.4 Conversão

- **RN13.** Existe uma única **ação de conversão em destaque** — o WhatsApp. Na seção de contato, o WhatsApp é o único botão em destaque visual e as demais formas de contato são visualmente secundárias. O botão âmbar preenchido (`.btn-primary`) é reservado a dois usos em toda a página: "Ver projetos" no bloco de abertura e o WhatsApp na seção de contato. O botão de apresentação do HGS usa `.btn-ghost`.
- **RN14.** O currículo em PDF fica disponível para download direto, sem exigir preenchimento de formulário.

### 14.5 Privacidade do visitante

- **RN15.** O site não coleta nem armazena dados de quem visita. Todo contato acontece por canais externos já existentes. Sem formulário, sem cookies, sem analytics, sem armazenamento local de dado de visitante.

### 14.6 Regras técnicas de implementação

- **RT01.** Nenhuma dependência externa, biblioteca ou framework pode ser introduzida.
- **RT02.** O CSS existente não é reescrito, refatorado, renomeado nem reorganizado. Alterações são incrementais.
- **RT03.** A alternância de tema deve continuar funcionando **ao fim de cada etapa**, nos dois sentidos.
- **RT04.** Todo componente novo consome variáveis CSS e funciona nos dois temas. A única exceção de cor fixa é a já documentada: texto sobre `--destaque` é sempre `#0a0712`.
- **RT05.** Todo espaçamento novo usa a escala `4 · 6 · 8 · 12 · 16 · 24 · 28 · 32 · 40 · 48`.
- **RT06.** Todo caminho de arquivo é relativo, nunca absoluto.
- **RT07.** Ao fim de cada etapa o site precisa estar **publicável e íntegro** — nunca em estado intermediário quebrado.
- **RT08.** Nenhuma credencial de acesso ao HGS, ao HFS ou a qualquer sistema pode aparecer em imagem, texto, comentário de código, nome de arquivo ou qualquer arquivo do repositório.

---

## 15. Autenticação e Sessão

**O sistema não tem autenticação, e essa decisão está consolidada.**

Justificativa: o site é integralmente público, sem login, sem cadastro, sem conta de usuário e sem área restrita. Não há dado a proteger por credencial, porque não há dado armazenado. Os "perfis" do projeto são tipos de visitante, não credenciais.

Em consequência, **não devem ser implementados**: tela de login, tela de recuperação de acesso, bloqueio por tentativas, controle de sessão, tempo de expiração, proteção de rotas ou comportamento para usuário sem permissão. Não há rota protegida porque não há rota — há uma página única e pública.

---

## 16. Controle de Acesso

**Não se aplica.**

Não há papéis, permissões, matriz de acesso, menu por perfil, tela bloqueada, ação protegida nem validação de permissão. Todo o conteúdo é público e idêntico para todos os visitantes. Não existe backend onde validar permissão.

A única "permissão" existente é operacional e vive fora do site: apenas o autor tem acesso de escrita ao repositório no GitHub, e é por esse caminho que o conteúdo é alterado.

---

## 17. Auditoria e Histórico

**Auditoria de registros não se aplica** — não há registros, não há banco de dados e não há operação de criação, edição ou exclusão a auditar. Não devem ser criados campos `created_at`, `created_by`, `updated_at` ou `updated_by`.

O histórico do projeto é o **histórico do Git**:

- cada alteração de conteúdo fica registrada em commit, com autor, data e diferença exata;
- o commit da base intacta é o ponto de retorno;
- o histórico é público e permanente — o que reforça a regra de que a conferência de arquivos é preventiva.

Recomendação operacional: mensagens de commit descritivas por etapa (por exemplo, "card do HGS: texto dos oito elementos" ou "imagens do HFS conferidas e adicionadas"), o que torna o histórico legível sem custo adicional.

---

## 18. Soft Delete e Exclusões

**Não se aplica.** Não há registros, não há exclusão lógica nem física, não há restauração e não há filtro de excluídos.

Registra-se apenas o que faz as vezes de exclusão neste projeto: a **remoção de conteúdo da página**, feita no código e versionada no Git. Uma remoção pode sempre ser desfeita voltando ao commit anterior — mas **remover um arquivo do site não o remove do histórico do repositório público**. Essa assimetria é o motivo pelo qual a conferência acontece antes do envio.

---

## 19. Logs

**Não se aplica a este projeto.**

Não há execução de código de servidor, não há banco de dados e não há evento de sistema a registrar. Em consequência:

- **não há log de erros**, nem em banco, nem em arquivo, nem estratégia de contingência a definir;
- **não há log de segurança** — não existe login inválido, acesso negado, bloqueio por tentativas ou alteração de permissão a registrar;
- **não há pasta `logs/`** a criar nem a proteger.

**Tratamento de erros no lado do visitante**, que substitui o que caberia a um log:

1. **Erro de JavaScript não pode derrubar o conteúdo.** Todo comportamento é melhoria progressiva: se o script falhar, o texto, as imagens, os links e a navegação continuam funcionando (ver 5.3 e 12.10).
2. **Imagem que não carrega** não deve deixar buraco sem explicação: o `alt` descritivo cumpre o papel de informar o que deveria estar ali.
3. **Nenhuma mensagem técnica é exibida ao visitante.** Não há `alert`, não há mensagem de exceção na tela e não há `console.log` deixado no código publicado.
4. O único diagnóstico disponível é o console do navegador durante o desenvolvimento — suficiente para um site desta natureza.

---

## 20. Configurações Globais

**Não existem configurações globais** e não há painel administrativo, gerenciador de conteúdo ou opção configurável em tempo de execução. Todo conteúdo é alterado diretamente no código-fonte e publicado pelo repositório.

**Configuração técnica do projeto:** não existe arquivo de configuração, porque não existe credencial, conexão de banco, SMTP, flag de log ou parâmetro técnico a armazenar. Em consequência:

- **não deve ser criado arquivo `.env`** — a regra permanece válida como princípio geral e não tem objeto aqui;
- **não deve ser criado `config/config.php`, `config/configuracoes.php` nem equivalente em outra linguagem**;
- **não deve ser criada pasta `config/`**.

Os únicos valores que se comportam como "configuração" são as **variáveis CSS** declaradas em `:root` e sobrescritas em `[data-tema="claro"]`, que centralizam a paleta. Elas são a fonte única de cor do projeto: todo componente novo consome variável, e valor de cor fixo não é aceito, com a única exceção já documentada.

---

## 21. Uploads, Anexos e Arquivos

**Não há upload pelo visitante.** O site não recebe arquivos, não possui formulário e não coleta dados. Nenhum mecanismo de envio deve ser implementado.

Existem, porém, **arquivos publicados** — e este é o ponto de maior risco do projeto.

### 21.1 Arquivos publicados e suas regras

| Arquivo | Onde é usado | Regras |
| --- | --- | --- |
| Imagens de tela do HGS | Card do HGS, elemento 7 | Duas. Dados fictícios obrigatórios. Nenhum nome, documento ou telefone real de hóspede |
| Imagens de tela do HFS | Card do HFS, elemento 7 | Duas. Valores financeiros mascarados |
| Imagens do Figma | Bloco de processo de design | Protótipo e design system do app do HGS. Sem dado real |
| Avatar | Bloco de abertura | Já existe e está aprovado |
| Currículo em PDF | Seção de contato | Download direto, sem formulário |

### 21.2 Tratamento técnico das imagens

| Item | Regra |
| --- | --- |
| Formato | Convertido para formato comprimido (WebP preferencialmente; JPEG como alternativa). PNG apenas se houver ganho real, o que raramente ocorre em captura de tela |
| Largura máxima | `1200px`. Capturas maiores são redimensionadas **antes** de entrar no repositório |
| **Teto por arquivo** | **150 KB.** Nenhuma imagem entra acima disso |
| **Teto de peso total da página** | **1,5 MB**, somando HTML, CSS, JS, todas as imagens e o favicon. O currículo em PDF não conta, porque só é baixado sob demanda |
| Dimensões declaradas | `width` e `height` obrigatórios na marcação |
| Carregamento adiado | `loading="lazy"` em toda imagem abaixo da primeira dobra. **O avatar do bloco de abertura não usa `lazy`** |
| Texto alternativo | `alt` descritivo obrigatório em todas as imagens |
| Nome de arquivo | Descritivo e neutro, em minúsculas e com hífen. **Não pode conter nome da pousada, nome de pessoa, número de quarto real ou qualquer identificação** |
| Local | `imagens/hgs/`, `imagens/hfs/`, `imagens/processo/` |

Se, após a compressão, uma imagem legível não couber em 150 KB, a solução correta é **recortar a tela** para a área que interessa, não aumentar o teto. Recortes focados e legíveis sem ampliação são preferíveis a telas inteiras reduzidas.

### 21.3 Regras de visualização, download e exclusão

- **Visualização:** as imagens são exibidas dentro dos cards e ampliáveis conforme 12.4.
- **Download:** não há botão de download de imagem. O currículo é o único arquivo com download previsto, por link direto com o atributo `download`.
- **Exclusão:** remover uma imagem do site é editar a marcação e apagar o arquivo — mas **o arquivo permanece no histórico do repositório**. Ver 21.4.

### 21.4 Riscos de segurança e proteção contra acesso indevido

1. **O repositório é público.** As regras de proteção de dado deixam de valer apenas para o que aparece na página e passam a valer para **qualquer arquivo em qualquer commit**. Uma imagem com dado real enviada e substituída depois **continua acessível no histórico**.
2. **A conferência acontece antes do envio, não depois.** É conferência **imagem por imagem**, com a imagem aberta em tamanho real, procurando: nome de hóspede, documento, telefone, e-mail, valor financeiro real, nome da pousada, nome de funcionário, credencial visível em tela, aba de navegador com endereço interno, notificação do sistema operacional e qualquer dado em campo de formulário preenchido.
3. **Segunda conferência** na etapa de verificação em celular real, com a imagem ampliada.
4. **Nenhuma credencial** pode aparecer em imagem, texto, comentário de código ou nome de arquivo.
5. **O currículo em PDF** deve ser conferido quanto a dados pessoais que o autor não queira publicar em endereço aberto: o arquivo fica acessível a qualquer pessoa com o link, não apenas a quem clicar no botão. Endereço residencial completo, documento e data de nascimento são os pontos a revisar.
6. **Não há validação de extensão ou de tipo real de arquivo a implementar**, porque não há recebimento de arquivo. O controle equivalente é humano e preventivo, descrito acima.
7. **Se uma imagem com dado real chegar a ser enviada**, a correção não é apagar o arquivo em um commit novo. É necessário reescrever o histórico do repositório ou recriar o repositório, e o link publicado precisa ser considerado comprometido até que isso seja feito. É por isso que a prevenção é a única estratégia viável.

---

## 22. Relatórios, Consultas e Exportações

**Não se aplicam a esta versão.**

Não há banco de dados, não há registros e não há área de consulta. Não existem listagens, filtros, buscas, painéis, indicadores ou relatórios a construir. Não há índices a avaliar nem consulta a otimizar.

**Não há exportação de dados gerada pelo site** — nem CSV, nem PDF, nem Excel. O único arquivo disponibilizado é o **currículo em PDF**, que é um arquivo estático publicado junto com o site e baixado por link direto, sem formulário e sem filtro. Não é uma exportação: é um anexo publicado.

**Medição de acessos (analytics) não faz parte desta versão** e não deve ser incluída, nem por script de terceiro, nem por cookie, nem por aviso de cookie.

---

## 23. APIs e Integrações Externas

**Não fazem parte desta versão.**

O site não expõe API, não consome API e não se comunica com o HGS, com o HFS nem com qualquer sistema externo. Os sistemas aparecem **exclusivamente como imagens**. Não há chamada de rede a implementar, não há autenticação de API, não há tratamento de falha, retry ou idempotência a definir.

A única comunicação com o mundo externo é por **links de saída**: WhatsApp, e-mail, LinkedIn e GitHub. Eles são links comuns, sem troca de dados:

| Link | Forma | Observação |
| --- | --- | --- |
| WhatsApp (ação principal, seção de contato) | `https://wa.me/5581995212456?text=Olá,%20João.%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.` | Mensagem curta de propósito — mensagem longa parece automação e tende a ser apagada antes do envio |
| WhatsApp (apresentação do HGS, card do HGS) | `https://wa.me/5581995212456?text=Olá,%20João.%20Vi%20seu%20portfólio%20e%20gostaria%20de%20agendar%20uma%20apresentação%20do%20Hotel%20Governance%20System.` | Mesma forma, mensagem específica e curta |
| E-mail | `mailto:jvictorna.dev@gmail.com` (assunto preenchido opcional) | Alternativa ao WhatsApp |
| LinkedIn | `https://linkedin.com/in/joaoadorno` | Link comum, nova aba, `rel="noopener noreferrer"` |
| GitHub | `https://github.com/devdapraia` | Link comum, nova aba, `rel="noopener noreferrer"`. Já existe na base |

O carregamento de fontes do Google Fonts é a única requisição externa da página. Nenhuma outra deve ser introduzida.

---

## 24. Segurança Funcional

### 24.1 O que muda em relação a um sistema com servidor

Não há rota a proteger, permissão a validar no backend, sessão a expirar, entrada de usuário a sanear nem mensagem de erro que possa vazar detalhe de infraestrutura. A superfície de ataque de um site estático é pequena. **O risco real deste projeto não é invasão: é publicação indevida de informação de terceiro.**

### 24.2 Regras de segurança desta versão

1. **HTTPS obrigatório** antes de qualquer divulgação do link.
2. **Nenhuma credencial publicada** em nenhum ponto — código, comentário, imagem, nome de arquivo, PDF ou histórico do repositório.
3. **Proteção de dado de terceiro** — objetivo declarado do projeto, que se materializa integralmente na conferência das imagens (seção 21.4).
4. **Repositório público e histórico permanente** — a conferência é preventiva; a correção posterior é custosa e pode exigir recriação do repositório.
5. **Links externos com `rel="noopener noreferrer"`** sempre que abrirem em nova aba.
6. **Verificação de todos os links, um a um**, antes da publicação — inclusive o botão de apresentação do sistema, que **não pode ficar quebrado em nenhuma hipótese**.
7. **Nenhum script de terceiro** na página. Sem tag de analytics, sem pixel, sem widget de chat, sem incorporação de vídeo externo.
8. **Nenhum dado de visitante** é coletado, armazenado ou transmitido. Sem formulário, sem cookie, sem armazenamento local de informação de visitante.
9. **Os repositórios do HGS e do HFS permanecem privados.** Nada neste projeto os torna públicos nem referencia caminho interno deles.
10. **Nenhum endereço interno, IP, caminho de servidor ou nome de banco** dos sistemas pode aparecer em imagem ou texto.

### 24.3 Desempenho como requisito funcional

O desempenho aqui é determinado pelo peso da página no celular e é condição para que a mensagem chegue.

1. **Imagens** — tetos e tratamento na seção 21.2.
2. **Carregamento adiado** para imagens abaixo da primeira dobra.
3. **Dimensões declaradas** em todas as imagens, para evitar deslocamento de conteúdo durante o carregamento.
4. **Fontes** — Poppins e Space Mono não podem atrasar a exibição do posicionamento. Estratégia definida:
   - manter o `preconnect` já existente para o Google Fonts;
   - usar `display=swap` na URL das fontes, para que o texto apareça imediatamente com a fonte de sistema e seja substituído quando a fonte carregar;
   - declarar uma pilha de alternativas nas famílias CSS (por exemplo, alternativas sem serifa do sistema para Poppins e monoespaçadas do sistema para Space Mono);
   - carregar **apenas os pesos efetivamente usados** (Poppins 300, 400, 600, 700; Space Mono 400, 700). Nenhum peso ou variante adicional.
5. **Sem animação pesada**, sem parallax, sem efeito de digitação, sem terminal falso. As transições permitidas são as já registradas no `docs/DESIGN.md`.
6. **Sem etapa de build e sem dependência externa**, o que mantém o peso de código no mínimo.

### 24.4 Revisão de segurança recomendada antes da publicação

Antes de divulgar o link, percorrer nesta ordem: todas as imagens em tamanho real → o PDF do currículo → busca por credencial e por nome da pousada em todo o repositório, incluindo comentários de código → verificação de todos os links → confirmação de HTTPS ativo.

---

## 25. Organização Sugerida da Implementação

A implementação é dividida em duas fases. A **Fase 1 é inegociável e anterior a qualquer alteração de conteúdo**: hoje existe uma única cópia da base, sem versionamento e sem cópia de segurança, e essa base é a premissa de todo o ganho de prazo.

### Fase 1 — Preservação e preparação

1. **Criar o repositório `devdapraia.github.io`** no GitHub, com esse nome exato.
2. **Enviar a base existente intacta** como primeiro commit, sem nenhuma modificação. Este commit é o ponto de retorno do projeto.
3. **Fazer o inventário do código existente**: quais seções já existem, como o HTML está estruturado, como o CSS está organizado, como funciona a alternância de tema, quais componentes são reaproveitáveis e o que precisará sair. Registrar o resultado no `README.md`.
4. **Configurar a publicação pelo GitHub Pages** e confirmar que a base existente responde no endereço, sob HTTPS.
5. **Criar o branch `rascunho`** e passar a trabalhar nele.
6. **Criar a estrutura de pastas** definida na seção 5.4 (`css/`, `js/`, `imagens/hgs/`, `imagens/hfs/`, `imagens/processo/`, `arquivos/`, `docs/`) e colocar `FSD.md` e `DESIGN.md` em `docs/`.
7. **Extrair CSS e JavaScript** para `css/estilo.css` e `js/script.js`, por cópia literal, em commit isolado. Conferir que a renderização permanece idêntica nos dois temas.
8. **Substituir a navegação `onclick` por âncoras reais**, adicionando os `id` das seções e a rolagem suave por CSS.

> **Ponto de verificação da Fase 1:** o site publicado precisa estar idêntico à base original, com a estrutura de arquivos organizada e a navegação funcionando por âncora. Só então a Fase 2 começa.

### Fase 2 — Revisão de conteúdo, uma seção por vez

Avançar **uma seção da página por vez, na ordem de leitura**, em passos pequenos e conferíveis. Ao fim de cada etapa o site deve estar **publicável e íntegro**.

> **Alteração consciente de escopo (2026-09-10):** a **posição** da seção "Sobre mim" no HTML mudou — ela agora vem **logo após a apresentação curta, antes dos cards de projeto** (ver seção 1). A **ordem de implementação** abaixo não foi renumerada: a revisão de conteúdo do "Sobre mim" continua sendo um passo tardio (item 20 / `docs/PLANO.md` › Fase 8), porque depende de texto a redigir e não bloqueia as demais seções. O que se antecipou foi só a realocação do bloco no DOM e o alinhamento do menu. Como "Sobre mim" passou a abrir a página, o item 20 ganha um critério: **manter a seção curta**.

9. **Bloco de abertura** — novo texto, posicionamento, selo e botões.
10. **Apresentação curta.**
11. **Remoção da linha do tempo** — marcação e CSS de `.timeline` e `.timeline-item`.
12. **Componente de card de projeto** — estilo do componente, conforme 12.3, ainda sem imagens.
13. **Card do HGS** — texto dos oito elementos e botão de apresentação do sistema.
14. **Card do HFS** — texto dos oito elementos, mesma estrutura, sem botão.
15. **Componente de grupo de tecnologias** e remoção de `.stack-item` e `.tech-dot`.
16. **Imagens de tela** — conferência, compressão, redimensionamento e inserção nos dois cards, com dimensões declaradas, `alt` e carregamento adiado.
17. **Ampliação de imagem ao toque** — sobreposição em JavaScript próprio, com o link direto como alternativa sem script.
18. **Bloco de processo de design** — seção autocontida, com os recortes do Figma. Primeiro item a cortar se o prazo apertar.
19. **Seção de tecnologias** — dois grupos e linha de formação.
20. **Seção "Sobre mim"** — três parágrafos curtos, com a frase do ERBASE. A seção abre a página (após a apresentação curta), então precisa ser enxuta; inclui a formação em Marketing ao lado da de ADS (ver 6/D1).
21. **Seção de contato** — WhatsApp em destaque, secundários subordinados, currículo em PDF publicado e testado.
22. **Responsividade** — media queries de `768px` e `480px`, conferidas a partir de `360px`.
23. **Revelação por rolagem** — reapontar o seletor com melhoria progressiva, ou remover.
24. **Ajustes de desempenho** — verificação dos tetos de peso, estratégia de fontes, remoção de `console.log` e de código morto do que foi retirado.
25. **Revisão de segurança** — roteiro da seção 24.4.
26. **Revisão de qualidade** — critérios da seção 26, item a item.
27. **Preparação da entrega** — integração ao `main`, conferência do endereço publicado, atualização do link no LinkedIn e no GitHub.

**Regras obrigatórias que valem em todas as etapas:**

1. Não reescrever o CSS existente. Alterações de estilo são **incrementais**, restritas ao necessário para acomodar o conteúdo novo. Refatoração, reorganização, renomeação de classes ou "melhoria" do CSS aprovado estão fora de escopo.
2. Paleta, tipografia, componentes, menu fixo, rolagem suave, hero com avatar e alternância de tema são **herdados e preservados**.
3. Nenhuma dependência externa, biblioteca ou framework pode ser introduzida.
4. A alternância de tema deve continuar funcionando após **cada** etapa.
5. Nenhuma imagem entra no repositório sem conferência prévia contra as regras de dado de terceiro.
6. Se surgir conflito entre o conteúdo novo e o tema claro, **o tema escuro é o padrão** e o claro é ajustado depois.

---

## 26. Critérios de Aceitação Técnica e Funcional

### 26.1 Base existente e identidade visual

- [ ] A paleta publicada é a da base: `#0a0712`, `#F29441`, `#D95D30`, `#F2F2F2`.
- [ ] A tipografia publicada é Poppins na interface e Space Mono nos elementos técnicos.
- [ ] Menu fixo, rolagem suave, cards com borda sutil, rótulos monoespaçados e hero com avatar foram preservados.
- [ ] A alternância entre tema claro e escuro continua funcionando após a troca de conteúdo, nos dois sentidos.
- [ ] Nenhum elemento da identidade visual foi redecidido.
- [ ] Nenhum componente novo usa valor de cor fixo, salvo a exceção documentada.
- [ ] Todo componente novo é legível nos dois temas.

### 26.2 Estrutura, arquitetura e código

- [ ] Existe o commit inicial com a base intacta, e é possível voltar a ele.
- [ ] O repositório se chama exatamente `devdapraia.github.io` e o site responde na raiz do endereço.
- [ ] A estrutura do projeto está organizada a partir do `[Diretório do Projeto - Repositório]`, com `css/`, `js/`, `imagens/`, `arquivos/` e `docs/`.
- [ ] Todos os caminhos internos são relativos; nenhum caminho absoluto com barra inicial.
- [ ] Não há dependência da arquitetura em nomes fixos como `public_html`, `public`, `htdocs` ou `www`.
- [ ] CSS e JavaScript estão separados do HTML, sem reescrita — ou a manutenção do arquivo único está justificada no `README.md`.
- [ ] Não há estilo embutido nem comportamento inline remanescente na marcação alterada.
- [ ] O menu navega por âncora real e funciona sem JavaScript.
- [ ] Nenhuma biblioteca, framework ou dependência externa foi introduzida além do Google Fonts.
- [ ] Não foi criado banco de dados, migration, arquivo de configuração, `.env`, autenticação, log, painel administrativo, API ou formulário.
- [ ] Não há `console.log` nem código morto dos componentes removidos.

### 26.3 Conteúdo — bloco de abertura

- [ ] O posicionamento em uma linha aparece sem que o visitante precise rolar, inclusive no celular.
- [ ] A foto está presente e legível em tela pequena.
- [ ] O selo indica que os sistemas estão em uso real, sem nomear a pousada.
- [ ] O bloco de abertura oferece um caminho claro para Projetos ("Ver projetos") e para Contato ("Falar comigo"); a ação de WhatsApp está na seção de contato e no menu, não no hero.
- [ ] O posicionamento não menciona marketing.

### 26.4 Conteúdo — cards de projeto

- [ ] HGS e HFS seguem exatamente a mesma estrutura de oito elementos, na mesma ordem.
- [ ] Cada card apresenta o problema antes de qualquer menção a tecnologia.
- [ ] A lista de tecnologias é o último elemento de cada card.
- [ ] O elemento "o que mudou" está escrito em linguagem de rotina, sem números não apurados.
- [ ] Cada card informa onde o sistema está hoje; o do HGS registra que o aplicativo está em construção.
- [ ] Cada card exibe pelo menos uma imagem de tela do sistema funcionando — a meta é duas.
- [ ] Nenhuma imagem contém nome, documento ou telefone real de hóspede.
- [ ] As imagens do HFS não exibem valores financeiros reais.
- [ ] **Não há linha do tempo de versões técnicas em nenhum ponto da página.**
- [ ] O botão de apresentação aparece **apenas** no card do HGS.

### 26.5 Conteúdo — tecnologias, sobre e processo

- [ ] A seção de tecnologias está dividida nos dois grupos definidos, com os itens exatos.
- [ ] Não há barra, percentual, estrela, bolinha, ícone graduado ou nota de habilidade em nenhum ponto do site.
- [ ] Nenhuma tecnologia do grupo "usei em projetos que estão no ar" está ausente dos cards de projeto.
- [ ] O curso de ADS e a previsão de conclusão aparecem em uma linha.
- [ ] O texto "Sobre mim" tem três parágrafos **curtos** e segue a sequência origem em marketing/atendimento/coordenação → problema observado no próprio trabalho → decisão de estudar ADS e construir.
- [ ] A seção "Sobre mim" **abre a página** (após a apresentação curta) e é enxuta — não atrasa a chegada aos cards de projeto.
- [ ] A formação em **Marketing** (Bacharelado, UNIBRA, 2020) aparece **ao lado da de ADS**, como parte do perfil — **não** como segunda vitrine de trabalhos de comunicação.
- [ ] O elemento de **objetivo** serve às duas frentes (desenvolvimento e marketing) sem parecer indefinição.
- [ ] O texto "Sobre mim" **não traz experiência profissional detalhada** (isso fica no currículo em PDF).
- [ ] O artigo do ERBASE 2026 é citado em, no máximo, uma frase, que menciona a submissão e a incorporação do feedback.
- [ ] A frase do artigo não afirma nem sugere aceitação e não pede desculpas.
- [ ] O texto não menciona mudança para Recife nem Porto Digital.
- [ ] O bloco de processo de design, se publicado, está após os dois cards e é autocontido.

### 26.6 Contato e conversão

- [ ] O WhatsApp é o único botão em destaque visual da seção de contato.
- [ ] O botão âmbar preenchido (`.btn-primary`) aparece só em dois pontos da página: "Ver projetos" (hero) e WhatsApp (contato). O botão de apresentação do HGS usa `.btn-ghost`.
- [ ] E-mail, LinkedIn, GitHub e download do currículo estão presentes e funcionando.
- [ ] O currículo em PDF é baixado sem exigir preenchimento de formulário.
- [ ] Todos os links de contato foram testados um a um antes da publicação.
- [ ] O botão de apresentação do sistema tem destino válido e não está quebrado.
- [ ] Nenhuma credencial de acesso está publicada na página.

### 26.7 Celular, desempenho e acessibilidade

- [ ] Todas as seções são legíveis e utilizáveis em tela de celular, inclusive as imagens de tela.
- [ ] Não há rolagem horizontal em nenhuma largura a partir de `360px`.
- [ ] As imagens ampliam ao toque e ficam legíveis; a ampliação fecha por toque e por `Esc`.
- [ ] Nenhuma imagem excede `150 KB` e o peso total da página não excede `1,5 MB`.
- [ ] Todas as imagens têm `width`, `height` e `alt` descritivo.
- [ ] Imagens abaixo da dobra usam carregamento adiado; o avatar não usa.
- [ ] O texto do bloco de abertura aparece mesmo antes de as fontes carregarem.
- [ ] Se o JavaScript for desativado, todo o conteúdo permanece visível e a navegação continua funcionando.

### 26.8 Segurança e publicação

- [ ] O site está publicado sob HTTPS.
- [ ] Nenhum arquivo do repositório, em nenhum commit, contém dado pessoal real de hóspede, valor financeiro real, credencial ou o nome da pousada.
- [ ] O currículo em PDF foi conferido quanto a dados pessoais que não devam ficar em endereço aberto.
- [ ] Não há script de terceiro, cookie, analytics ou captura de dado do visitante.
- [ ] Os repositórios do HGS e do HFS permanecem privados.
- [ ] O site foi publicado e o link enviado dentro do prazo de duas semanas.
- [ ] O link está no perfil do LinkedIn e no perfil do GitHub.
- [ ] Revisão de segurança e revisão de qualidade concluídas.

---

## 27. Pontos Pendentes e Decisões Futuras

Nenhum dos pontos abaixo bloqueia o início da codificação.

**PP01 — Currículo em PDF.** ~~Definir se será o mesmo arquivo já enviado ao gestor ou uma versão ajustada.~~ **Resolvido (10/09/2026):** arquivo entregue em `docs/curriculo-joao-victor.pdf`, conferido quanto a dados sensíveis. Copiar para `arquivos/curriculo-joao-victor.pdf` na etapa de contato.

**PP02 — Quais telas capturar.** A quantidade está definida em duas por card. Falta escolher **quais telas** de cada sistema e a data da captura. É produção de conteúdo, não decisão técnica, **mas está no caminho crítico** — sem imagem, o card não é publicado.

**PP03 — Texto exato do posicionamento.** A direção está aprovada; a redação final é entregável de conteúdo, com revisão própria. É a frase mais importante do site.

**PP04 — Estado estrutural da base existente.** Se a base suporta a troca de conteúdo sem retrabalho estrutural só pode ser respondido com o código à vista. **Resolvido no inventário da Fase 1**, item 3. Se a base estiver em pior estado do que se supõe, o cronograma precisa ser reavaliado antes de seguir para a Fase 2.

**PP05 — Depoimento da pousada.** Se for solicitado e chegar dentro do prazo, sai de "fora de escopo" e exige um lugar definido na página — provavelmente entre os cards e o bloco de processo.

**PP06 — Pesquisa de satisfação com a equipe.** Se houver resultado utilizável, pode virar uma frase de impacto e alterar o elemento "o que mudou" dos cards, sem alterar a estrutura.

**PP07 — Ambiente de demonstração do HGS.** Avaliar futuramente um ambiente separado da produção, com dados fictícios, que permitiria acesso externo sem risco à operação. Mudaria o comportamento do botão do card do HGS em uma versão futura.

**PP08 — Domínio próprio.** Possibilidade futura. O GitHub Pages aceita apontamento posterior sem retrabalho no site.

**PP09 — Persistência da preferência de tema.** Não implementada nesta versão (12.9). Se for desejada depois, exige decidir o mecanismo de armazenamento local e revisar a regra de não guardar nada sobre o visitante.

**PP10 — Estado ativo do menu durante a rolagem.** Opcional (12.1). Não é critério de aceitação.

**PP11 — Medição de acessos.** Fora desta versão. Se entrar no futuro, a decisão precisa considerar a regra atual de não coletar dado de visitante e a ausência de aviso de cookies.

---

## 28. Conclusão

**O FSD está pronto para orientar a implementação.**

As decisões que dependiam de resposta estão consolidadas neste documento: stack estática sem servidor e sem banco, publicação por GitHub Pages no endereço `devdapraia.github.io`, preservação da base como primeiro commit, separação de marcação, estilo e comportamento, especificação dos três componentes que não existiam na base (card de projeto, grupo de tecnologias e bloco de processo), pontos de quebra da responsividade, tetos de peso das imagens, comportamento de ampliação sem biblioteca externa e comportamento definitivo do botão do HGS como solicitação de apresentação do sistema.

**Registro de resoluções aplicadas neste documento**, para que nenhuma divergência passe como esquecimento:

1. **O `DESIGN.md` foi fornecido** e é a referência visual do projeto. A observação anterior de que ele estaria ausente está superada.
2. **MVC, PHP, MySQL, XAMPP, hospedagem tradicional, autenticação, RBAC, auditoria, soft delete, logs, arquivo de configuração de credenciais e migrations não se aplicam** a este projeto e não devem ser introduzidos por inércia. Cada um está declarado como não aplicável na seção correspondente, com a justificativa.
3. **A proteção de pastas internas é substituída pela regra de origem** — nada que não possa ser público entra no repositório —, porque o GitHub Pages serve o repositório inteiro publicamente e não executa regras de bloqueio de servidor.
4. **O bloco de processo de design entra na página**, em bloco próprio após os cards, o que preserva a paridade obrigatória entre os dois cards de projeto.
5. **O perfil somente leitura do HGS não existe e não será criado nesta versão**; o botão é de solicitação de apresentação conduzida, como comportamento definitivo.

**Documentos a entregar para a IA codificadora:**

- `docs/FSD.md`;
- `docs/DESIGN.md`.

Nenhum outro documento é necessário para a implementação.

**Última observação, que vale mais que qualquer detalhe técnico deste documento:** o gargalo das duas semanas não é a codificação. É escrever os textos dos dois cards e capturar as imagens. A implementação deve avançar em etapas pequenas e sempre publicáveis, para que a produção de conteúdo aconteça em paralelo e o site esteja no ar dentro do prazo, mesmo imperfeito.
