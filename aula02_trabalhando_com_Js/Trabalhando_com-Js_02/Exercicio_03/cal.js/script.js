document.addEventListener('DOMContentLoaded', function () {

    const visor = document.querySelector('.visor');
    const botoes = document.querySelectorAll('.botao');

    let expressao = '';

    botoes.forEach(botao => {
        botao.addEventListener('click', function () {
            const valorBotao = this.textContent;

            if (valorBotao === 'C') {
            
                expressao = '';
            } else if (valorBotao === '=') {
                try {
                    expressao = eval(expressao);
                } catch (error) {
                    expressao = 'Erro';
                }
            } else {
             
                expressao += valorBotao;
            }

            visor.textContent = expressao;
        });
    });
});
