document.addEventListener('DOMContentLoaded', function (){
    cost aumentaFonteBotao = document.getElementByld('aumentar-fonte');
    cost diminuiFonteBotao = document.getElementByld('diminuir-fonte');

let tamanhoAtualFonte = 1;

aumentalFonteBotao.addEventListener('click', function(){
tamanhoAtualFonte+= 0.1;
document.body.style.fontSize = '${tamanhoAtualFonte}rem'

})

diminuiFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte+= 0.1;
    document.body.style.fontSize = '${tamanhoAtualFonte}rem'