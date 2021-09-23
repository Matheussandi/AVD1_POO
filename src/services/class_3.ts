class Funcionarios {
    constructor(
        private _nome: string,
        private _salarioHora: number,
        private _diasTrabalhados: number,
        private _totalDeFaltas: number,
    ) {}

    get nome() {
        return this._nome;
    }

    get salarioHora() {
        return this._salarioHora;
    }

    get diasTrabalhados() {
        return this._diasTrabalhados;
    }

    get totalDeFaltas() {
        return this._totalDeFaltas;
    }

    set nome(nome: string) {
        if (nome === '') {
            throw new Error("Nome inválido !")
        }

        this._nome = nome;
    }

    set salarioHora(salarioHora: number) {
        if (salarioHora <= 0) {
            throw new Error("Salário inválido !")
        }

        this._salarioHora = salarioHora;
    }

    set diasTrabalhados(diasTrabalhados: number) {
        if (diasTrabalhados <= 0) {
            throw new Error("Dias trabalhados inválido !")
        }

        this._diasTrabalhados = diasTrabalhados;
    }

    set totalDeFaltas(totalDeFaltas: number) {
        if (totalDeFaltas < 0) {
            throw new Error("Total de faltas inválido !")
        }

        this._totalDeFaltas = totalDeFaltas;
    }

    public salarioBruto() {
        return this.salarioHora * this.diasTrabalhados
    }

    public PLR() {
        if (this.totalDeFaltas === 0) {
            return this.salarioBruto()
        } else if (this.totalDeFaltas === 1) {
            return this.salarioBruto() * 0.94
        } else if (this.totalDeFaltas === 2) {
            return this.salarioBruto() * 0.92
        } else if (this.totalDeFaltas === 3) {
            return this.salarioBruto() * 0.9
        } else if (this.totalDeFaltas === 4) {
            return this.salarioBruto() * 0.88
        } else {
            return 0
        }
    }

    public desconto() {
        return this.salarioBruto() * 0.05
    }

    public salarioLiquido() {
        return this.salarioBruto() - this.desconto() + this.PLR()
    }
}

const funcio = new Funcionarios('Joao', 10, 7, 0)

try {
    funcio.nome='Maria'
    funcio.salarioHora=100
    funcio.diasTrabalhados=24
    funcio.totalDeFaltas=3

    console.log(`O funcionário de nome ${funcio.nome} tem o salário bruto de ${funcio.salarioBruto()}, teve ${funcio.totalDeFaltas} faltas e sua PLR foi de ${funcio.PLR()}`)

    console.log('')

    console.log(`O funcionário de nome ${funcio.nome} tem o salario bruto de ${funcio.salarioBruto()}, o desconto de ${funcio.desconto()}, a PLR de ${funcio.PLR()} e o salário líquido de ${funcio.salarioLiquido()}`)
} catch (err:any) {
    console.log(err.message)
}