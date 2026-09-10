# AGENTS.md — Site de Portfólio devdapraia

Arquivo de contexto para qualquer IA que trabalhe neste projeto, em qualquer chat futuro.
Todos os caminhos aqui são **relativos à raiz do projeto**. Não converter em links absolutos, não usar `file:///`, não registrar caminhos locais da máquina.

---

## Idioma

Responder **sempre em português do Brasil**. Comentários de código úteis também em português do Brasil.

## O que é o projeto

Site de **portfólio pessoal**, página única, **estático**. Objetivo: fazer um gestor não técnico entender, em poucos minutos e no celular, que o autor identifica problemas reais e constrói software que funciona — e sair querendo conversar.

**Natureza determinante:** não é um projeto do zero. Existe uma base em HTML/CSS/JS puro com identidade visual **aprovada** (`docs/index.html`). O trabalho é **revisão de conteúdo**, com alterações de estilo apenas **incrementais e aditivas**. Refatorar, renomear classes, reorganizar ou "melhorar" o CSS existente está **fora de escopo**.

## Stack, arquitetura e restrições (do FSD — não presumir nada além disto)

- **Marcação:** HTML5. **Estilo:** CSS puro com variáveis CSS em `:root` (e `[data-tema="claro"]`). **Comportamento:** JavaScript sem framework.
- **Sem linguagem de servidor.** Sem PHP, sem Node em produção, sem processamento no servidor.
- **Sem banco de dados.** Sem persistência, sem SQL, sem migrations.
- **Sem bibliotecas nem frameworks.** Bootstrap não é usado. Nenhuma dependência pode ser introduzida — nem carrossel, nem lightbox, nem animação, nem ícones. Todo comportamento novo é JavaScript próprio.
- **Única dependência externa:** Google Fonts (Poppins e Space Mono), já presente na base, carregada com `preconnect` e `display=swap`.
- **Sem etapa de build.** Sem empacotador, sem pré-processador, sem transpilador. O arquivo do repositório é o arquivo servido.
- **Sem gerenciador de dependências** (sem `npm`, sem `package.json`).
- **Arquitetura:** MVC **não se aplica** (não há dados nem regra de negócio). Em vez disso, separação em três camadas de arquivo:
  | Camada | Responsabilidade | Onde vive |
  | --- | --- | --- |
  | Marcação | Conteúdo e estrutura semântica | `index.html` |
  | Estilo | Toda a apresentação visual | `css/estilo.css` |
  | Comportamento | Tema, ampliação de imagem, revelação por rolagem | `js/script.js` |
- Nenhum `style="..."` e nenhum `<style>` no `index.html` após a extração. Nenhum `onclick="..."` inline — navegação por âncora real (`href="#id"`).
- JavaScript é **melhoria progressiva**: se falhar, todo o conteúdo continua visível e a página navegável.
- **Todos os caminhos de arquivo são relativos** (`css/estilo.css`, `imagens/hgs/tela.webp`), nunca absolutos com barra inicial. O site precisa funcionar igual na raiz ou dentro de uma subpasta.
- **Framework CSS / design system:** nenhum. A identidade visual é herdada da base e está registrada em `docs/DESIGN.md`, que é a **autoridade sobre aparência**. `docs/FSD.md` é a autoridade sobre **conteúdo, estrutura, comportamento e regras**.

## Ambientes

- **Desenvolvimento:** VS Code com a extensão **Live Server**. Abrir `index.html` pelo Live Server. Não há servidor de aplicação, banco nem configuração de ambiente. Sem XAMPP.
- **Conferência antes de publicar:** trabalho no branch **`rascunho`**. Antes de promover para o branch publicado, conferência **obrigatória em celular real** (não só emulação): imagens, menu, tempo de abertura, os dois temas e todos os links externos, um a um.
- **Produção:** **GitHub Pages**, publicação automática a partir do branch **`main`**. Repositório e endereço: **`devdapraia.github.io`** (o repositório precisa ter exatamente esse nome para o site responder na raiz). **HTTPS obrigatório** antes de qualquer divulgação. Não há endereço de prévia isolado — prévia e produção são o mesmo destino; a separação depende de disciplina de branch.
- **Testes:** não há framework de testes nem suíte automatizada. A verificação é manual: Live Server + celular real + os checklists da seção 26 do FSD.

## Estrutura de pastas

```
index.html                      página única — arquivo de entrada
favicon.ico                     quadrado, âmbar da marca (#F29441)
README.md                       o que é, como rodar local, como publicar, inventário da base
.gitignore
AGENTS.md                       este arquivo
css/
  estilo.css                    CSS extraído da base, sem reescrita
js/
  script.js                     tema, ampliação de imagem, revelação por rolagem
imagens/
  avatar.png | avatar.webp      foto de João (tratada a partir de docs/foto_principal.jpeg)
  hgs/                           duas capturas do HGS
  hfs/                           duas capturas do HFS
  processo/                      recortes do protótipo e do design system em Figma
arquivos/
  curriculo-joao-victor.pdf     download direto, sem formulário
docs/
  FSD.md  DESIGN.md  INSUMOS.md  PLANO.md  STATUS.md  ERROS.md
  index.html                    base intacta, para referência
  foto_principal.jpeg  curriculo-joao-victor.pdf  screen.png
```

A pasta `docs/` é publicada junto com o site e fica acessível por URL — aceitável porque não contém credencial nem dado de terceiro. Se algum dia contiver, sai do repositório.

## Comandos principais

Não há instalação, build, migração nem testes automatizados.

| Ação | Como |
| --- | --- |
| Rodar local | Abrir `index.html` no VS Code com Live Server (ou qualquer servidor estático de arquivos) |
| Validar | Conferência manual nos dois temas; conferência em celular real a partir de 360px; checklists da seção 26 do `docs/FSD.md` |
| Publicar | Integrar `rascunho` → `main`; o GitHub Pages publica automaticamente; conferir o endereço publicado sob HTTPS |
| Voltar ao ponto de retorno | `git checkout` do commit inicial com a base intacta |

## Regras de segurança (adequadas a um site estático publicado no GitHub Pages)

O risco real deste projeto **não é invasão** — a superfície de um site estático é pequena. É **publicação indevida de informação de terceiro** em repositório público com histórico permanente.

- **Estratégia de proteção é de origem, não de bloqueio:** nada que não possa ser público entra no repositório, em **nenhum commit**. O GitHub Pages serve o repositório inteiro e não executa `.htaccess` — não há pasta a bloquear.
- **Dado de terceiro:** nenhuma imagem publicada pode conter nome, documento ou telefone real de hóspede; as imagens do HFS têm valores financeiros mascarados. **A pousada não é nomeada** em nenhum ponto — nem em texto, nem em `alt`, nem em nome de arquivo, nem em comentário de código.
- **Conferência de imagem é preventiva e anterior ao commit:** imagem por imagem, em tamanho real, procurando dado pessoal, valor real, credencial em tela, aba com endereço interno, notificação do SO. Segunda conferência no teste em celular real. Corrigir depois **não remove o arquivo do histórico**.
- **Credenciais:** nenhuma credencial de acesso ao HGS, ao HFS ou a qualquer sistema pode aparecer em código, comentário, imagem, nome de arquivo, PDF ou histórico. Nenhum endereço interno, IP, caminho de servidor ou nome de banco em imagem ou texto. Os repositórios do HGS e do HFS permanecem privados.
- **Configuração e segredos:** não criar `.env`, `config/config.php`, pasta `config/` nem equivalente — não há segredo a armazenar.
- **XSS:** todo o conteúdo é fixo, escrito no código. Não usar `innerHTML` com dado vindo de fora, não usar `eval`. Se algum dia entrar conteúdo dinâmico, escapar na saída.
- **CSRF, senhas, sessão, controle de acesso, RBAC, isolamento por usuário:** não se aplicam — não há formulário, backend, login nem dado de usuário.
- **Validação de entrada:** não há entrada de usuário. A única interação com o teclado é fechar a ampliação de imagem com `Esc`.
- **Sanitização de saída:** `alt` de imagem descritivo e neutro, sem dado de hóspede nem nome da pousada.
- **Uploads:** o visitante não envia nada. Nenhum mecanismo de upload deve existir.
- **APIs externas / scripts de terceiro:** nenhum. Sem analytics, sem pixel, sem widget de chat, sem incorporação de vídeo externo, sem cookie, sem aviso de cookie. A única requisição externa é o Google Fonts.
- **Links externos:** sempre `target="_blank"` com `rel="noopener noreferrer"`. Verificar **todos os links, um a um**, antes de publicar — o botão de apresentação do HGS **não pode ficar quebrado em nenhuma hipótese**.
- **Mensagens de erro:** sem `alert`, sem stack trace na tela, sem `console.log` no código publicado. Imagem que não carrega é coberta pelo `alt` descritivo.
- **Transporte:** HTTPS obrigatório antes de divulgar o link.
- **Privacidade do visitante:** o site não coleta, não armazena e não transmite nenhum dado de quem visita. Sem `localStorage` de informação de visitante (a preferência de tema **não** é persistida nesta versão).

## Interface

Seguir `docs/DESIGN.md` em telas, componentes, cores, tipografia, espaçamentos, raios e transições:

- **Cor vem de variável CSS.** Nenhum componente novo usa valor de cor fixo. Única exceção documentada: texto sobre `--destaque` é sempre `#0a0712`.
- **Espaçamento vem da escala:** `4 · 6 · 8 · 12 · 16 · 24 · 28 · 32 · 40 · 48`.
- **Space Mono** só para elementos técnicos (tag do hero, rótulo de seção, códigos). Texto corrido em **Poppins**, peso 300.
- **Movimento é sutil:** deslocamentos de 1–2px, transições de 0.15s–0.3s. Sem parallax, sem animação de entrada de página, sem efeito de digitação.
- **Contraste vem do âmbar**, não de blocos de cor sólida.
- **Todo componente funciona nos dois temas.** Se só fica legível no escuro, está errado. Em conflito, o **tema escuro é o padrão** e o claro se ajusta depois.
- **Paleta:** `--base #0a0712` · `--destaque #F29441` · `--acento #D95D30` · `--neutro #F2F2F2` (tema escuro, padrão). Tema claro sobrescreve por `[data-tema="claro"]`.
- O botão âmbar preenchido (`.btn-primary`) aparece em **no máximo dois pontos** da página: "Ver projetos" (hero) e WhatsApp (contato). Todo o resto usa `.btn-ghost`.

## Protocolo dos arquivos vivos

```
Antes de iniciar qualquer trabalho:
1. Ler `docs/FSD.md`.
2. Ler `docs/DESIGN.md`.
3. Ler `docs/INSUMOS.md`.
4. Ler `docs/PLANO.md`.
5. Ler `docs/STATUS.md`.
6. Ler `docs/ERROS.md`.

Use sempre caminhos relativos à raiz do projeto.
Não transformar estes caminhos em links absolutos.
Não usar links `file:///`.
Não registrar caminhos locais da máquina atual dentro do `AGENTS.md`.

Ao terminar qualquer trabalho:
1. Atualizar `docs/STATUS.md`.
2. Registrar erros e soluções em `docs/ERROS.md`, se houver.
3. Informar ao usuário o que foi feito.
4. Informar como testar ou validar a entrega.
```

## Regras de conteúdo

- **Sem repetição de formulação na página.** Nenhuma frase, título ou informação
  deve aparecer duas vezes com a mesma formulação em pontos diferentes da página.
  Cada ideia tem **um lugar só**: a origem na recepção vive no bloco de
  apresentação abaixo do hero; "dois sistemas em uso real" é **exclusivo do selo
  do hero** (o título da seção Projetos é "Os sistemas"); a linha de posicionamento
  ("da recepção ao código…") vive no hero e não é repetida como título de seção.
  Ao escrever conteúdo novo, conferir se a frase — ou a mesma informação com outras
  palavras — já não está dita em outro ponto.
- O card "quem sou" da seção Sobre **não repete** a origem na recepção (essa
  história é do bloco de apresentação). Na fase da seção Sobre, ele é reescrito
  com outro recorte: trajetória, o que se estuda hoje, para onde se vai.

## Publicação (procedimento para a IA)

O **portão de publicação é do autor**. A IA só publica depois de uma confirmação
explícita do autor no chat — a frase "conferi, pode publicar" (ou equivalente
inequívoco), dada após a conferência visual no Live Server / celular.

Recebida essa confirmação, a IA **executa a sequência completa sozinha**, sem
listar comandos para o autor rodar:

```
git push origin rascunho
git checkout main
git merge --no-ff rascunho
git push origin main
git checkout rascunho
```

Depois disso, a IA informa o resultado (branch de volta em `rascunho`, `main`
publicado) e lembra que o GitHub Pages publica automaticamente a partir do `main`.

Sem a confirmação do autor, a IA **não** faz `push`, `merge` nem `checkout main`
— fica tudo no `rascunho` local até o autor liberar.

## Boas práticas

- Código claro, funções pequenas, nomes descritivos. Comentários úteis em português do Brasil quando ajudarem.
- Sem duplicação desnecessária. Sem funcionalidades fora do escopo do `docs/FSD.md`.
- Uma fase do `docs/PLANO.md` por vez, na ordem de leitura da página. Ao fim de cada fase o site precisa estar **publicável e íntegro** — nunca em estado intermediário quebrado.
- Não reescrever o CSS aprovado. Alterações de estilo restritas ao necessário para acomodar o conteúdo novo.
- A alternância de tema precisa continuar funcionando após **cada** etapa.
- Mensagens de commit descritivas por etapa (ex.: "card do HGS: texto dos oito elementos").
