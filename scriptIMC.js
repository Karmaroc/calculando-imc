const resultado = document.querySelector('.resultado'); // Selecionei a classe "resultado" do DOM, para que ocorra manipulação do resultado.
const form = document.querySelector('.form'); // Selecionei a classe "form" do DOM para manipular o formulário.

form. addEventListener('submit', function(evento) { // Chamei 'addEventListiner' para listar funções de eventos que podem ocorrer.
    evento.preventDefault(); // Cancela o evento, no caso o envio do formulário.

    const peso = form.querySelector('.peso'); // Selecionei a classe 'peso' dentro do formulário.
    const altura = form.querySelector('.altura'); // Selecionei a classe 'altura' dentro do formulário.

    const peso_valor = peso.value; // Retorna o valor da variável.
    console.log("Peso:", peso_valor); // Mostra o valor da peso no console.
    
    const altura_valor = altura.value; // Retorna o valor da variável.
    console.log("Altura:", altura_valor); // Mostra o valor da altura no console.

    let imc = peso_valor / (altura_valor ** 2); // Retorna o calculo do indice de massa corporal.
    imc = imc.toFixed(2); // Retorna o valor com duas casa decimais.
    console.log("IMC:", imc); // Mostra o valor do IMC no console.
    
    const classificacao = nivel(imc); // Chama a função 'nivel()'.

    const mensagem = `Seu IMC é ${imc} (${classificacao})`; // Retorna uma mensagem com imc e classificação do imc.
    console.log(mensagem); // Escreve na tela do console a mensagem.
    resultado.innerHTML = mensagem.fontcolor('green').bold(); // Escreve no documento html com estilos de cor e negrito.

    const msgRed1 = "Peso inválido"; // Mensagem de erro
    const msgRed2 = "Altura inválida"; // Mensagem de erro

    if (!peso_valor) {
        resultado.innerHTML = msgRed1.fontcolor('red').bold(); // Escreve no documento html com estilos de cor e negrito.
    }

    if (!altura_valor) {
        resultado.innerHTML = msgRed2.fontcolor('red').bold(); // Escreve no documento html com estilos de cor e negrito.
    }

})

function nivel(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2',
'Obesidade grau 3']; // Matriz com a classificação de IMC.

// Lógica de classificação de acordo com o IMC:

    if (imc < 18.5) {
        return nivel[0];
    }
    if (imc >= 18.5 && imc <= 24.9) {
        return nivel[1];
    }
    if (imc >= 25 && imc <= 29.9) {
        return nivel[2];
    }
    if (imc >= 30 && imc <= 34.9) {
        return nivel[3];
    }
    if (imc >= 35 && imc<= 39.9) {
        return nivel[4];
    }
    if (imc >= 40 ) {
        return nivel[5];
    }
}

