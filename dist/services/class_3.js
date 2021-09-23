"use strict";
var Funcionarios = /** @class */ (function () {
    function Funcionarios(_nome, _salarioHora, _diasTrabalhados, _totalDeFaltas) {
        this._nome = _nome;
        this._salarioHora = _salarioHora;
        this._diasTrabalhados = _diasTrabalhados;
        this._totalDeFaltas = _totalDeFaltas;
    }
    Object.defineProperty(Funcionarios.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (nome === '') {
                throw new Error("Nome inválido !");
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "salarioHora", {
        get: function () {
            return this._salarioHora;
        },
        set: function (salarioHora) {
            if (salarioHora <= 0) {
                throw new Error("Salário inválido !");
            }
            this._salarioHora = salarioHora;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "diasTrabalhados", {
        get: function () {
            return this._diasTrabalhados;
        },
        set: function (diasTrabalhados) {
            if (diasTrabalhados <= 0) {
                throw new Error("Dias trabalhados inválido !");
            }
            this._diasTrabalhados = diasTrabalhados;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "totalDeFaltas", {
        get: function () {
            return this._totalDeFaltas;
        },
        set: function (totalDeFaltas) {
            if (totalDeFaltas < 0) {
                throw new Error("Total de faltas inválido !");
            }
            this._totalDeFaltas = totalDeFaltas;
        },
        enumerable: false,
        configurable: true
    });
    Funcionarios.prototype.salarioBruto = function () {
        return this.salarioHora * this.diasTrabalhados;
    };
    Funcionarios.prototype.PLR = function () {
        if (this.totalDeFaltas === 0) {
            return this.salarioBruto();
        }
        else if (this.totalDeFaltas === 1) {
            return this.salarioBruto() * 0.94;
        }
        else if (this.totalDeFaltas === 2) {
            return this.salarioBruto() * 0.92;
        }
        else if (this.totalDeFaltas === 3) {
            return this.salarioBruto() * 0.9;
        }
        else if (this.totalDeFaltas === 4) {
            return this.salarioBruto() * 0.88;
        }
        else {
            return 0;
        }
    };
    Funcionarios.prototype.desconto = function () {
        return this.salarioBruto() * 0.05;
    };
    Funcionarios.prototype.salarioLiquido = function () {
        return this.salarioBruto() - this.desconto() + this.PLR();
    };
    return Funcionarios;
}());
var funcio = new Funcionarios('Joao', 10, 7, 0);
try {
    funcio.nome = 'Maria';
    funcio.salarioHora = 100;
    funcio.diasTrabalhados = 24;
    funcio.totalDeFaltas = 3;
    console.log("O funcion\u00E1rio de nome " + funcio.nome + " tem o sal\u00E1rio bruto de " + funcio.salarioBruto() + ", teve " + funcio.totalDeFaltas + " faltas e sua PLR foi de " + funcio.PLR());
    console.log('');
    console.log("O funcion\u00E1rio de nome " + funcio.nome + " tem o salario bruto de " + funcio.salarioBruto() + ", o desconto de " + funcio.desconto() + ", a PLR de " + funcio.PLR() + " e o sal\u00E1rio l\u00EDquido de " + funcio.salarioLiquido());
}
catch (err) {
    console.log(err.message);
}
