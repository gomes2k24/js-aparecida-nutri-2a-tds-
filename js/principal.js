var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

console.log(pacientes)

for (var i = 0; i < pacientes.length ; i++) {
    var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura")
var tdImc = paciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.00) {
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (pesoEhValido && alturaEhValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
}
}

titulo.addEventListener("click", mostraMensagem)
function mostraMensagem() {
    console.log("Olá eu fui clicado!");
}

var botaoadicionar = document.querySelector("#adicionar-paciente");
botaoadicionar.addEventListener("click",function(event) {
    event.preventDefault();
    //console.log("Oi,cliquei no botão");

var form = document.querySelector("#form-adiciona");

var nome = form.nome.value;
var peso = form.peso.value;
var altura = form.altura.value;
var gordura = form.gordura.value;

var pacientetr = document.createElement("TR");

var nometd = document.createElement("td");
var pesotd = document.createElement("td");
var alturatd = document.createElement("td");
var gorduratd = document.createElement("td");
var imctd = document.createElement("td");

nometd.textContent = nome;
pesotd.textContent = peso;
alturatd.textContent = altura;
gordura.textContent = gordura; 

pacientetr.appendChild(nometd);
pacientetr.appendChild(pesotd);
pacientetr.appendChild(alturatd);
pacientetr.appendChild(gorduratd);

var tabela = document.querySelector("#tabela-pacientes");

tabela.appendChild(pacientetr);

});