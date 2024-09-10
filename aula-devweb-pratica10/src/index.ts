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
    private _vitorias:number = 0.0;
    private _empates:number = 0.0; 
    private _derrotas:number = 0.0;

    public constructor(nome: string, vitorias: number, empates: number, derrotas: number) {
        this.nome = nome;
        this.vitorias = vitorias;
        this.empates = empates;
        this.derrotas = derrotas;
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
        this._vitorias = vitorias;
    }
    public get vitorias(): number{
        return this._vitorias;
    }

    public set empates(empates: number){
        if (empates < 0) return;
        this._empates = empates;
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
        return this._vitorias * 3 + this._empates
    }
}

let times:Time[] = [];
times.push(new Time("Flamego", 10, 11, 13)); // 0
times.push(new Time("Cruzeiro", 15, 9, 3)); // 1
times.push(new Time("Fluminense", 20, 2, 1)); // 2

console.log(times[0].pontos)
times.sort()

