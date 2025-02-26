document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastroForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;
        const cep = document.getElementById("cep").value.trim();

        // Expressões Regulares
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const senhaRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        const cepRegex = /^[0-9]{8}$/;

        if (nome.length < 3) {
            alert("O nome deve ter pelo menos 3 caracteres.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("E-mail inválido.");
            return;
        }

        if (!senhaRegex.test(senha)) {
            alert("A senha deve ter pelo menos 6 caracteres, incluindo uma letra maiúscula e um número.");
            return;
        }

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem.");
            return;
        }

        if (!cepRegex.test(cep)) {
            alert("CEP inválido. Digite apenas números.");
            return;
        }

        buscarCEP(cep);
    });

    function buscarCEP(cep) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    alert("CEP não encontrado.");
                } else {
                    alert(`Endereço encontrado: ${data.logradouro}, ${data.bairro}, ${data.localidade}-${data.uf}`);
                }
            })
            .catch(() => alert("Erro ao buscar CEP."));
    }
});

