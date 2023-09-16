class usuarioDados {
    constructor(nome, idade, ano, notaP, notaM, notaW, corFavorita) {
        this.nome = nome;
        this.idade = idade;
		this.ano = ano;
        this.notaP = notaP;
        this.notaM = notaM;
        this.notaW = notaW;
        this.corFavorita = corFavorita;
    }

    calcularMedia() {
        return (this.notaP + this.notaM + this.notaW) / 3;
    }

    calcularIdade(ano) {
        return ano - (new Date().getFullYear() - this.idade);
    }
}

const nome = prompt("Digite seu nome:");
const idade = parseInt(prompt("Digite sua idade:"));
const notaP = parseFloat(prompt("Digite sua nota em Português:"));
const notaM = parseFloat(prompt("Digite sua nota em Matemática:"));
const notaW = parseFloat(prompt("Digite sua nota em Desenvolvimento WEB:"));
const ano = parseInt(prompt("Digite um ano do futuro:"));
const corFavorita = prompt("Digite sua cor favorita em inglês:");

const usuario = new usuarioDados(nome, idade, ano, notaP, notaM, notaW, corFavorita);

document.getElementById("nome").textContent = usuario.nome;
document.getElementById("idade").textContent = usuario.idade;
document.getElementById("ano").textContent = usuario.ano;
document.getElementById("notaP").textContent = usuario.notaP;
document.getElementById("notaM").textContent = usuario.notaM;
document.getElementById("notaW").textContent = usuario.notaW;
document.getElementById("media").textContent = usuario.calcularMedia().toFixed(2);
document.getElementById("anoFuturo").textContent = usuario.calcularIdade(ano) + " anos";


var todasH1 = document.querySelectorAll("h1");
var todasTH = document.querySelectorAll("th");

todasH1.forEach( function(h1Element) {
    h1Element.style.color = corFavorita;
});

todasTH.forEach( function(htElement) {
    htElement.style.backgroundColor = corFavorita;
});