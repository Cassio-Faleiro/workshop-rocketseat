/*Começando com JavaScrip
JS trabalha com objetos, elementos, funcionalidades e propriedades
Acessando o HTML, como é tudo objeto, devera ser chamado com "document", 
pois, ele é um objeto
Docuemnt. quando aparecer property significa que é uma propriedade e se tiver, 
method significa que será uma funcionalidade

Chamando o botão para a função de action*/
document
    .querySelector("button.fat")
    /*chama uma action no botão, tembém podendo add mais de um valor separado por virgula. Como criar uma função*/
    .addEventListener("click", function(){
    document
        .querySelector("#footer")
        /*classList é uma propriedade tendo um funcionalidade de toggle que significa "color e tirar" */
        .classList
        .toggle("hide")
    }) 