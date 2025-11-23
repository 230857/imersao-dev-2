document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector('.card-container'); // Corrigido: 'card-container'
    let todosOsDados = [];

    // Função para carregar e renderizar os dados iniciais
    async function carregarDados() {
        try {
            // O nome do arquivo no contexto é 'date.json', mas o código original usava 'dados.json'
            // Estou usando 'date.json' conforme o arquivo fornecido.
            const resposta = await fetch('date.json');
            todosOsDados = await resposta.json();
            renderizarCards(todosOsDados);
        } catch (error) {
            console.error("Erro ao carregar os dados:", error);
            cardContainer.innerHTML = "<p>Não foi possível carregar os dados. Tente novamente mais tarde.</p>";
        }
    }

    // Função para renderizar os cards na tela
    function renderizarCards(dados) {
        cardContainer.innerHTML = ''; // Limpa o container antes de renderizar
        for (const dado of dados) {
            const article = document.createElement('article');
            article.classList.add('dados', 'religiao');
            // Ajustado para usar as chaves corretas do seu JSON ('origem', 'periodo')
            article.innerHTML = `
                <h2>${dado.nome}</h2>
                <p><strong>Origem:</strong> ${dado.origem || 'Não informado'}</p>
                <p><strong>Período:</strong> ${dado.periodo || 'Não informado'}</p>
                <div class="detalhes" style="display: none;">
                    <p><strong>Descrição:</strong> ${dado.descricao}</p>
                    <p><strong>Influência:</strong> ${dado.influencia}</p>
                    <p><strong>Importância:</strong> ${dado.importancia}</p>
                    ${dado.link ? `<a href="${dado.link}" target="_blank">Saiba mais</a>` : ''}
                </div>
            `;
            // Adiciona o evento de clique para expandir/ocultar
            article.addEventListener('click', () => {
                const detalhes = article.querySelector('.detalhes');
                detalhes.style.display = detalhes.style.display === 'block' ? 'none' : 'block';
            });
            cardContainer.appendChild(article);
        }
    }

    // Função de busca/filtragem
    function filtrarCards() {
        const termo = document.getElementById('campoBusca').value.toLowerCase();
        const dadosFiltrados = todosOsDados.filter(item => {
            // Busca no nome, descrição e origem
            return item.nome.toLowerCase().includes(termo) ||
                   item.descricao.toLowerCase().includes(termo) ||
                   item.origem.toLowerCase().includes(termo);
        });
        renderizarCards(dadosFiltrados);
    }

    // Adiciona o listener para a busca ao digitar e com a tecla Enter
    document.getElementById('campoBusca').addEventListener('keyup', (event) => {
        filtrarCards(); // Filtra enquanto digita
    });

    // Carrega os dados quando a página estiver pronta
    carregarDados();
});