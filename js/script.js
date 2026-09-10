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
