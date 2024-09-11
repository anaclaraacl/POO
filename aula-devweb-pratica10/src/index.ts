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
    private _nome:string = "";
    private _vitórias:number = 0.0;
    private _empates:number = 0.0; 
    private _derrotas:number = 0.0;
    private _pontos:number = 0.0;

    public constructor(nome: string, vitorias: number, empates: number, derrotas: number) {
        this.nome = nome;
        this.vitorias = vitorias;
        this.empates = empates;
        this.derrotas = derrotas;
        this.atualizaPontos();
    }
    public set nome(nome: string){
        if (nome === "") return;
        this._nome = nome;
    }
    public get nome(): string{
        return this._nome;
    }

    public set vitorias(vitorias: number){
        if (vitorias < 0) return;
        this._vitórias = vitorias;
        this.atualizaPontos();
    }
    public get vitorias(): number{
        return this._vitórias;
    }

    public set empates(empates: number){
        if (empates < 0) return;
        this._empates = empates;
        this.atualizaPontos();
    }
    public get empates(): number{
        return this._empates;
    }

    public set derrotas(derrotas: number){
        if (derrotas < 0) return;
        this._derrotas = derrotas;
    }
    public get derrotas(): number{
        return this._derrotas;
    }

    public get pontos(): number{
        return this._pontos;
    }
    private atualizaPontos(): void {
        this._pontos = (3 * this._vitórias) + this._empates
    }
}

const tabela:Time[] = [];
tabela.push(new Time("Flamego", 10, 11, 13)); // 0
tabela.push(new Time("Cruzeiro", 15, 9, 3)); // 1
tabela.push(new Time("Fluminense", 20, 2, 1)); // 2

tabela.sort((a, b) => b.pontos - a.pontos)

console.log(tabela);

