var text = document.querySelector("#box-text");
var result = document.getElementById("result");
var button = document.querySelector("#btn");


text.addEventListener("input", function() {
    var textValue = text.value.trim();
    var textLength = textValue.length;

    if (textLength > 100) {
        text.value = textValue.slice(0, 100); // Limita o texto a 10 caracteres
        textLength = 100; // Atualiza o comprimento para 10
    }

    result.textContent = textLength;
    document.getElementById("result2").innerHTML = textValue;
});




//criando um evento de remover caracter
button.addEventListener("click", () => {
    text.value = ""



})









//nao mexe nisso aqui nao hein! to de olho!!!1