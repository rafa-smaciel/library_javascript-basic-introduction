function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}

function redirecionar(){
    //window.open("https://globallabs.academy/");
    window.location.href = "https://google.com";
}

function trocar(elemento){
    //document.getElementById("mouse move").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"
//    alert("trocar texto");
}

function voltar (elemento){
    //document.getElementById("mouse move").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar = true;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

/*
function soma (n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5 ,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

//var lista = (nome: “rosa”, “cravo”, “tulipa”, “margarida”);
//console.log(lista[2]);

/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
*/


/*
var count;
for(count=0; count <= 5; count++){    
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
    //count = count + 1;
};
*/

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

//var frutas = [{nome:"maça", cor:"vermelha"}, //{nome: "uva", cor:"roxa"}];
//console.log(frutas)
//alert(fruta[1].nome);

//var fruta = {nome:"maça", cor:"vermelha"};
//console.log(fruta.nome)
//alert(fruta.cor);

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.reverse());
//console.log(lista.toString()[1]);
//console.log(lista.join(" | "));

//var nome = "Rafael Maciel";
//var idade = 31;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(idade * idade2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
//console.log(frase.toLocaleLowerCase());