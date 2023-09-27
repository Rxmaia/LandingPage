// Espera até que o DOM (Document Object Model) esteja completamente carregado
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o formulário com a classe "cadastro"
    const cadastroForm = document.querySelector(".cadastro form");

    // Adiciona um ouvinte de evento para o evento de envio do formulário
    cadastroForm.addEventListener("submit", function (e) {
        // Impede o envio padrão do formulário, que atualizaria a página
        e.preventDefault();

        // Seleciona os campos de entrada de nome e email com base em seus IDs
        const nomeInput = document.getElementById("nome");
        const emailInput = document.getElementById("email");

        // Exibe uma mensagem de alerta com os dados cadastrados
        alert(`Cadastro realizado com sucesso!\nNome: ${nomeInput.value}\nEmail: ${emailInput.value}`);

        // Limpa os campos de entrada após o cadastro
        nomeInput.value = "";
        emailInput.value = "";
    });
});
