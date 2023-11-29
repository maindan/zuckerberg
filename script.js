document.addEventListener('DOMContentLoaded', function () {
    const product = document.getElementsByClassName('product');
    const modal = document.querySelector('.modal');
    const closeBtn = document.querySelector('.close');
    const companyName = document.getElementById('company-name');
    const companyInfo = document.getElementById('company-info');
    const checkbox = document.querySelector('input[type="checkbox"]');

    for (let i = 0; i < product.length; i++) {
        product[i].addEventListener('click', openModal);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    function openModal(event) {
        const clickedProduct = event.currentTarget;
        const companyNameValue = clickedProduct.getAttribute('data-company');
        companyName.textContent = companyNameValue;

        if (companyNameValue === 'Facebook') {
            companyInfo.textContent = 'O Facebook, criado no dia 4 de fevereiro de 2004 por Mark Zuckerberg, Dustin Moskovitz e Chris Hughes, alunos da Universidade de Harvard, é uma rede social que desde o início tem o objetivo de configurar um espaço no qual as pessoas possam encontrar umas às outras, dividindo opiniões e fotografias.';
        } else if (companyNameValue === 'Instagram') {
            companyInfo.textContent = 'O Instagram é uma rede social principalmente visual, onde um usuário pode postar fotos e vídeos de curta duração, aplicar efeitos a eles e também interagir com publicações de outras pessoas, através de comentários e curtidas.';
        } else if (companyNameValue === 'WhatsApp') {
            companyInfo.textContent = 'O WhatsApp é um aplicativo de comunicação instantânea disponível para celulares Android e iPhones. O app foi criado em 2009, nos Estados Unidos, por Brian Acton e Jan Koum, com objetivo de oferecer uma alternativa às mensagens via SMS.';
        } else if (companyNameValue === 'Messenger') {
            companyInfo.textContent = 'Facebook Messenger é um serviço de mensagens instantâneo de propriedade do Facebook. Mais do que apenas um modo de comunicação coerente, o Facebook Messenger oferece também às empresas maneiras de aprofundar seus relacionamentos com os clientes. O Facebook lançou o Messenger em meados de 2011, após adquirir um aplicativo de mensagens chamado Beluga.';
        }

        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    for (let i = 0; i < product.length; i++) {
        product[i].addEventListener('click', showInfo);
    }

    if (checkbox) {
        checkbox.addEventListener('change', toggleTheme);
    }
''
    function toggleTheme() {
        const body = document.body;
        const isDarkMode = body.classList.contains('dark-mode');

        if (isDarkMode) {
            body.classList.remove('dark-mode');
        } else {
            body.classList.add('dark-mode');
        }
    }
});