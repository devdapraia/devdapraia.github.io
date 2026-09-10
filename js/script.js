        const toggle = document.querySelector('.theme-toggle');

        function alternarTema() {
            const temAtual = document.body.getAttribute('data-tema');
            if (temAtual === 'claro') {
                document.body.removeAttribute('data-tema');
                toggle.textContent = '☀️';
            } else {
                document.body.setAttribute('data-tema', 'claro');
                toggle.textContent = '🌙';
            }
        }

        const items = document.querySelectorAll('.timeline-item');
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, i * 120);
                }
            });
        }, { threshold: 0.1 });

        items.forEach(el => observer.observe(el));

        // Alternancia de tema por listener: o HTML nao usa mais onclick inline.
        toggle.addEventListener('click', alternarTema);

        // ===== FASE 5 — ampliacao de imagem ao toque =====
        // Melhoria progressiva: cada imagem ja esta dentro de um <a> para o
        // proprio arquivo, entao sem JavaScript o toque abre a imagem em nova
        // aba. Aqui o clique e interceptado e a imagem abre numa sobreposicao
        // propria, sem biblioteca externa (FSD 12.4). Fecha por clique no fundo,
        // no botao de fechar e com a tecla Esc; trava a rolagem do corpo.
        (function () {
            const gatilhos = document.querySelectorAll('.projeto-imagem');
            if (!gatilhos.length) return;

            let overlay = null;

            function aoTeclar(e) {
                if (e.key === 'Escape') fechar();
            }

            function fechar() {
                if (!overlay) return;
                const alvo = overlay;
                overlay = null;
                alvo.classList.remove('aberto');
                document.body.classList.remove('overlay-aberto');
                document.removeEventListener('keydown', aoTeclar);
                // Remove o no depois da transicao de opacidade (0.2s no CSS).
                setTimeout(function () { alvo.remove(); }, 200);
            }

            function abrir(href, texto) {
                overlay = document.createElement('div');
                overlay.className = 'img-overlay';

                const botao = document.createElement('button');
                botao.type = 'button';
                botao.className = 'img-overlay-fechar';
                botao.setAttribute('aria-label', 'Fechar imagem ampliada');
                botao.textContent = '×';

                const img = document.createElement('img');
                img.src = href;
                img.alt = texto || '';

                overlay.appendChild(botao);
                overlay.appendChild(img);
                overlay.addEventListener('click', function (e) {
                    if (e.target === overlay || e.target === botao) fechar();
                });

                document.body.appendChild(overlay);
                document.body.classList.add('overlay-aberto');
                document.addEventListener('keydown', aoTeclar);

                // Deixa o navegador registrar opacity:0 antes de animar para 1.
                requestAnimationFrame(function () {
                    if (overlay) overlay.classList.add('aberto');
                });
            }

            gatilhos.forEach(function (link) {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const img = link.querySelector('img');
                    abrir(link.getAttribute('href'), img ? img.getAttribute('alt') : '');
                });
            });
        })();
