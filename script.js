
// FORMULÁRIO DE CONTATO

const formulario = document.getElementById("formContato");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const assunto = document.getElementById("assunto").value;
        const mensagem = document.getElementById("mensagem").value;

        const resposta = document.getElementById("resposta");

        if (
            nome.trim() === "" ||
            email.trim() === "" ||
            assunto.trim() === "" ||
            mensagem.trim() === ""
        ) {
            resposta.textContent = "Preencha todos os campos!";
            return;
        }

        resposta.textContent = "Obrigado, " + nome + "! Sua mensagem foi recebida.";

        formulario.reset();

    });

}
