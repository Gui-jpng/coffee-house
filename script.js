
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

        const idioma = document.documentElement.lang;

        if (
            nome.trim() === "" ||
            email.trim() === "" ||
            assunto.trim() === "" ||
            mensagem.trim() === ""
        ) {
            resposta.textContent = idioma === "en"
                ? "Please fill in all fields!"
                : "Preencha todos os campos!";

            return;
        }

        resposta.textContent = idioma === "en"
            ? "Thank you, " + nome + "! Your message has been received."
            : "Obrigado, " + nome + "! Sua mensagem foi recebida.";

        formulario.reset();

    });

}
