//Grafico de Pizza
new Chart(document.getElementById("graficoPizza"), {
            type: 'pie',
            data : {
                // labels : ['Diabeticos (752)', 'Hipertensos (459)', 'Sedentarios (82)', 'Alcoolistas (43)'],
                datasets : [{
                    backgroundColor : ['#FF0000', '#002EC4', '#00A9C4', '#AA63EC'],
                    data : [752, 459, 242, 82]
                }]
            },
            options : {
                title : {
                    display : true,
                    text : 'Senso da População'
                },
                responsive : true,
            }
        });

// Criando o Gráfico em forma de colunas
const ctx = document.getElementById("graficoIMC").getContext("2d");

// Criar o gradiente azul
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "#002EC4");
gradient.addColorStop(1, "#80B6F4");

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            "Abaixo do Peso",
            "Peso Normal",
            "Sobrepeso",
            "Obesidade",
            "Obesidade Grau I",
            "Obesidade Grau II",
            "Obesidade Grau III"
        ],
        datasets: [{
            label: "Quantidade",
            data: [13000, 11000, 17000, 6000, 13000, 15000, 12000],
            backgroundColor: gradient,
            borderRadius: 10, // cantos arredondados
            barPercentage: 0.6,
            categoryPercentage: 0.6,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        if (value >= 1000) {
                            return value / 1000 + ' MIL';
                        }
                        return value;
                    },
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                },
                grid: {
                    color: "black",
                    borderDash: [4, 4]
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 13,
                        weight: 'bold'
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

