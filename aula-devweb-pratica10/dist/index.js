"use strict";
// Brasileirão 2024
// Você foi contratado pela CBF para criar um sistema que gerencie a tabela do campeonato brasileiro de futebol. 
// Os seguintes itens deverão ser implementados:
// Uma classe Time com os seguintes atributos (lembrar do construtor e das properties):
// nome;
// vitórias;
// empates;
// derrotas;
// pontos (apenas uma property get pontos).
// Criar um array com os times já com os dados preenchidos.
// Criar um método para ordenar o array com base na pontuação.
// Criar um método para imprimir a tabela do campeonato.
class Time {
    constructor(nome, vitorias, empates, derrotas) {
        this._nome = "";
        this._vitórias = 0.0;
        this._empates = 0.0;
        this._derrotas = 0.0;
        this.nome = nome;
        this.vitorias = vitorias;
        this.empates = empates;
        this.derrotas = derrotas;
    }
    set nome(nome) {
        if (nome === "")
            return;
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set vitorias(vitorias) {
        if (vitorias < 0)
            return;
        this._vitórias = vitorias;
    }
    get vitorias() {
        return this._vitórias;
    }
    set empates(empates) {
        if (empates < 0)
            return;
        this._empates = empates;
    }
    get empates() {
        return this._empates;
    }
    set derrotas(derrotas) {
        if (derrotas < 0)
            return;
        this._derrotas = derrotas;
    }
    get derrotas() {
        return this._derrotas;
    }
    get pontos() {
        return this._vitórias * 3 + this._empates;
    }
}
let times = [];
times.push(new Time("Flamego", 10, 11, 13)); // 0
times.push(new Time("Cruzeiro", 15, 9, 3)); // 1
times.push(new Time("Fluminense", 20, 2, 1)); // 2
times.sort((a, b) => b.pontos - a.pontos);
console.log(times);
