


function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.facebook.com"); /* abri em outra aba */
    //window.location.href = "https://www.facebook.com"; /* redireciona na mesma aba */
}


function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o  mouse";
    elemento.innerHTML ="Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
    elemento.innerHTML ="Passe o mouse aqui";

}
function load(){
    alert("Pagina carregado");
}

function funcaoChange(elemento){
    console.log(elemento.value)

}
/*
function soma(n1, n2){
    return n1 + n2;
}
*/
/*
var validar = 0
function validaidade(idade){
    //var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("qual sua idade");
validaidade(idade);
console.log(validar);
*/

//alert(soma(5, 10));

/*
var d = new Date();
//alert(d);
alert(d.getDay());
alert(d.getMinutes());
alert(d.getMonth+1());
*/


/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/
/*
var count = 0;
while(count <= 5){
    console.log(count);
    //count = count + 1;
    alert(count);
    count++;
}
*/


/*
var idade = prompt("qual sua idade");
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

//var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);




//var fruta = {nome:"maçã", cor:"vermelha"}
//console.log(fruta.nome);
//alert(fruta.cor);
//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var idade = 29
//var nome = "Diego Sales";
//alert(nome +" tem " + idade +" anos!");
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão melhor time do mundo!";
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));