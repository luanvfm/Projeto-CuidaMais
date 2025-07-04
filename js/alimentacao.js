document.addEventListener("DOMContentLoaded", function () {
    const inputCalorias = document.getElementById("inputCalorias");
    const btnAdicionar = document.getElementById("btnAdicionarCalorias");
    const meta = 1800;

    let totalConsumido = 0;

    function atualizarProgresso() {
        const porcentagem = Math.min((totalConsumido / meta) * 100, 100);
        document.getElementById("consumoAtual").textContent = totalConsumido;
        document.getElementById("barraProgresso").style.width = porcentagem + "%";
        document.getElementById("porcentagemProgresso").textContent = porcentagem.toFixed(1) + "%";
    }

    btnAdicionar.addEventListener("click", function () {
        const valor = parseInt(inputCalorias.value);
        if (!isNaN(valor) && valor > 0) {
            totalConsumido += valor;
            atualizarProgresso();
            inputCalorias.value = "";
        } else {
            alert("Digite uma quantidade válida de calorias.");
        }
    });
});
