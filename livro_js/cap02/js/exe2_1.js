// criar uma referência ao form e ao h3(onde será exibida a resposta)

const frm = document.querySelector("form");

const resp = document.querySelector("h3");
// cria um "ouvinte" de evento, acionado quando o botão submit for clicado 
frm.addEventListener("submit", executar);

function executar(evento) {
    const nome = frm.inNome.value; //obtém o nome digitado no form
    resp.innerHTML = `Olá <i>${nome}</i>`; // exibe a resposta do programa
    evento.preventDefault(); // vai evitar que o form envie os dados pro destino.php
}
    