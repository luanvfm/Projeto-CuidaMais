document.addEventListener('DOMContentLoaded', function() {
    // Dados das notícias (poderia ser carregado de uma API no futuro)
    const newsData = {
        1: {
            title: "Como Calcular Seu IMC Corretamente",
            image: "assets/noticia1.png",
            content: `
                <img src="assets/noticia1.png" alt="Cálculo de IMC" class="modal-image">
                <p>O Índice de Massa Corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal. Desenvolvido pelo polímata Lambert Quételet no fim do século XIX, trata-se de um método fácil e rápido para a avaliação do nível de gordura de cada pessoa.</p>
                <p>Para calcular seu IMC, basta dividir seu peso (em quilogramas) pela altura (em metros) ao quadrado. A fórmula é: IMC = peso / (altura × altura).</p>
                <p>Os valores de referência são:</p>
                <ul>
                    <li>Abaixo de 18,5: Abaixo do peso</li>
                    <li>Entre 18,5 e 24,9: Peso normal</li>
                    <li>Entre 25 e 29,9: Sobrepeso</li>
                    <li>Acima de 30: Obesidade</li>
                </ul>
                <p>Lembre-se que o IMC é apenas um indicador e não leva em consideração a composição corporal. Consulte sempre um profissional de saúde para uma avaliação completa.</p>
            `
        },
        2: {
            title: "Benefícios do Exercício Físico Regular",
            image: "assets/noticia2.png",
            content: `
                <img src="assets/noticia2.png" alt="Exercício Físico" class="modal-image">
                <p>A prática regular de exercícios físicos traz inúmeros benefícios para a saúde física e mental. Segundo a Organização Mundial da Saúde (OMS), adultos devem praticar pelo menos 150 minutos de atividade física moderada por semana.</p>
                <p>Principais benefícios:</p>
                <ul>
                    <li>Reduz o risco de doenças cardiovasculares</li>
                    <li>Controla o peso corporal</li>
                    <li>Melhora a qualidade do sono</li>
                    <li>Reduz os sintomas de ansiedade e depressão</li>
                    <li>Fortalece músculos e ossos</li>
                    <li>Melhora a função cognitiva</li>
                </ul>
                <p>Para quem está começando, é importante começar devagar e aumentar gradualmente a intensidade. Caminhadas diárias de 30 minutos já podem fazer uma grande diferença. Consulte um profissional de educação física para orientações personalizadas.</p>
            `
        },
        3: {
            title: "Os Incríveis Benefícios do Abacate para a Saúde",
            image: "assets/noticia3.png",
            content: `
                <img src="assets/noticia3.png" alt="Benefícios do abacate" class="modal-image">
                <p>O abacate é um fruto rico em gorduras saudáveis, vitaminas e minerais essenciais para o bom funcionamento do organismo. Diferente da maioria das frutas, o abacate é rico em gorduras monoinsaturadas, consideradas benéficas para a saúde cardiovascular.</p>
                <p>Principais nutrientes:</p>
                <ul>
                    <li>Gorduras saudáveis (ácido oleico)</li>
                    <li>Fibras</li>
                    <li>Vitamina K</li>
                    <li>Ácido fólico</li>
                    <li>Potássio (mais que a banana)</li>
                    <li>Vitaminas C, E e B6</li>
                </ul>
                <p>Benefícios comprovados:</p>
                <ul>
                    <li>Reduz o colesterol LDL (ruim) e aumenta o HDL (bom)</li>
                    <li>Ajuda na absorção de nutrientes lipossolúveis</li>
                    <li>Protege a saúde ocular devido aos carotenoides luteína e zeaxantina</li>
                    <li>Pode ajudar na prevenção do câncer</li>
                    <li>Auxilia no controle do apetite</li>
                </ul>
                <p>Inclua o abacate em sua dieta de forma moderada, pois apesar de saudável, é calórico. Uma porção de 100g (cerca de 1/2 abacate médio) por dia é suficiente.</p>
            `
        }
    };

    // Elementos do modal
    const modalOverlay = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    // Função para abrir o modal
    function openModal(newsId) {
        const news = newsData[newsId];
        if (news) {
            modalContent.innerHTML = `
                <h2>${news.title}</h2>
                ${news.content}
            `;
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Impede scroll da página principal
        }
    }

    // Função para fechar o modal
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restaura scroll da página principal
    }

    // Event listeners para os cards do carrossel
    document.querySelectorAll('.carrossel-card').forEach(card => {
        card.addEventListener('click', function() {
            const newsId = this.getAttribute('data-news');
            openModal(newsId);
        });
    });

    // Event listeners para fechar o modal
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
});