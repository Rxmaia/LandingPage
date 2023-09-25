// Script JavaScript simples para mostrar uma mensagem após o cadastro
document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.querySelector(".cadastro form");

    cadastroForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nomeInput = document.getElementById("nome");
        const emailInput = document.getElementById("email");

        // Simplesmente exibe uma mensagem com os dados cadastrados
        alert(`Cadastro realizado com sucesso!\nNome: ${nomeInput.value}\nEmail: ${emailInput.value}`);

        // Limpa os campos de entrada após o cadastro
        nomeInput.value = "";
        emailInput.value = "";
    });
});
