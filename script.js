
// Aguarda o HTML estar pronto antes de executar as funções.
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona os botões e os elementos que mostrarão as mensagens.
    const botaoAgendar = document.getElementById("botaoAgendar");
    const mensagemAgendamento = document.getElementById("mensagemAgendamento");

    const botaoContato = document.getElementById("botaoContato");
    const mensagemContato = document.getElementById("mensagemContato");

    // Seleciona o espaço onde será exibido o ano atual.
    const anoAtual = document.getElementById("anoAtual");

    // Mostra o ano atual automaticamente no rodapé.
    anoAtual.textContent = new Date().getFullYear();

    // Executa esta função quando o botão de agendamento for clicado.
    botaoAgendar.addEventListener("click", function () {

        // Exibe uma mensagem para orientar a pessoa visitante.
        mensagemAgendamento.textContent =
            "Que bom que você quer se cuidar! Entre em contato com o salão para combinar seu horário.";

    });

    // Executa esta função quando o botão de contato for clicado.
    botaoContato.addEventListener("click", function () {

        // Exibe uma mensagem de confirmação na própria página.
        mensagemContato.textContent =
            "Consulte nossos serviços e entre em contato para saber mais!";

        // Leva a pessoa visitante até a seção de serviços.
        document.getElementById("servicos").scrollIntoView({
            behavior: "smooth"
        });

    });

});
