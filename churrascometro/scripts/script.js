// Função que atualiza o texto das tags <p> na página com os resultados calculados
function mudarTexto(carne_, cerveja_, bebida_) {
    // Obtém as três primeiras tags <p> na página
    var p1 = document.getElementsByTagName('p')[0];
    var p2 = document.getElementsByTagName('p')[1];
    var p3 = document.getElementsByTagName('p')[2];
    // Atualiza o conteúdo de texto das tags <p> com os valores calculados
    p1.innerText = "".concat(carne_.toFixed(2), " Kg de carne"); // Exibe o valor de carne em quilos, formatado para duas casas decimais
    p2.innerText = "".concat(cerveja_, " Latas de cerveja"); // Exibe o número de latas de cerveja
    p3.innerText = "".concat(bebida_, " Garrafas de 2L de Bebida"); // Exibe o número de garrafas de 2L de bebida
}
// Função que calcula as quantidades necessárias de carne, cerveja e bebida com base no número de adultos, crianças e horas de duração do evento
function regras(x, y, z) {
    // Define as quantidades padrão para carne, cerveja e bebida, dependendo da duração do evento
    var carne = z >= 6 ? 650 : 400; // 650g por pessoa se o evento durar 6 horas ou mais, caso contrário, 400g
    var cerveja = z >= 6 ? 2000 : 1200; // 2000ml por pessoa se o evento durar 6 horas ou mais, caso contrário, 1200ml
    var bebida = z >= 6 ? 1500 : 1000; // 1500ml por pessoa se o evento durar 6 horas ou mais, caso contrário, 1000ml
    // Calcula a quantidade total de carne, considerando que crianças consomem metade da quantidade de um adulto
    carne = (carne * x) + (carne * y / 2); // Resultado em gramas
    carne /= 1000; // Converte gramas para quilos
    // Calcula o número total de latas de cerveja, arredondando para cima
    cerveja = Math.ceil(cerveja * x / 350); // Supondo que cada lata tenha 350ml
    // Calcula a quantidade total de bebida, considerando que crianças consomem metade da quantidade de um adulto
    bebida = (bebida * x) + (bebida * y / 2); // Resultado em mililitros
    bebida = Math.ceil(bebida / 2000); // Converte mililitros para garrafas de 2L
    // Chama a função para atualizar o texto na página com os valores calculados
    mudarTexto(carne, cerveja, bebida);
}
// Função principal que é chamada ao clicar no botão "Calcular"
function calculadora() {
    // Obtém os valores dos inputs de número de adultos, crianças e duração do evento
    var adultos = document.getElementsByTagName('input')[0];
    var criancas = document.getElementsByTagName('input')[1];
    var h = document.getElementsByTagName('input')[2];
    // Converte os valores dos inputs de string para número
    var adultosValue = parseFloat(adultos.value);
    var criancasValue = parseFloat(criancas.value);
    var hValue = parseFloat(h.value);
    // Chama a função que aplica as regras e realiza os cálculos com base nos valores obtidos
    regras(adultosValue, criancasValue, hValue);
}