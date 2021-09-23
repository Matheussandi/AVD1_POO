"use strict";
var ConversaoDeUnidadesDeTempo = /** @class */ (function () {
    function ConversaoDeUnidadesDeTempo(_segundos, _minutos, _horas, _dias, _semanas, _meses, _anos) {
        this._segundos = _segundos;
        this._minutos = _minutos;
        this._horas = _horas;
        this._dias = _dias;
        this._semanas = _semanas;
        this._meses = _meses;
        this._anos = _anos;
    }
    Object.defineProperty(ConversaoDeUnidadesDeTempo.prototype, "segundos", {
        get: function () {
            return this._segundos;
        },
        set: function (segundos) {
            if (segundos <= 0) {
                throw new Error("Segundo inválido !");
            }
            this._segundos = segundos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConversaoDeUnidadesDeTempo.prototype, "minutos", {
        get: function () {
            return this._minutos;
        },
        set: function (minutos) {
            if (minutos <= 0) {
                throw new Error("Minuto inválido !");
            }
            this._minutos = minutos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConversaoDeUnidadesDeTempo.prototype, "horas", {
        get: function () {
            return this._horas;
        },
        set: function (horas) {
            if (horas <= 0) {
                throw new Error("Hora inválida !");
            }
            this._horas = horas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConversaoDeUnidadesDeTempo.prototype, "dias", {
        get: function () {
            return this._dias;
        },
        set: function (dias) {
            if (dias <= 0) {
                throw new Error("Dia inválido !");
            }
            this._dias = dias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConversaoDeUnidadesDeTempo.prototype, "semanas", {
        get: function () {
            return this._semanas;
        },
        set: function (semanas) {
            if (semanas <= 0) {
                throw new Error("Semana inválida !");
            }
            this._semanas = semanas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConversaoDeUnidadesDeTempo.prototype, "meses", {
        get: function () {
            return this._meses;
        },
        set: function (meses) {
            if (meses <= 0) {
                throw new Error("Mês inválido !");
            }
            this._meses = meses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConversaoDeUnidadesDeTempo.prototype, "anos", {
        get: function () {
            return this._anos;
        },
        set: function (anos) {
            if (anos <= 0) {
                throw new Error("Ano inválido !");
            }
            this._anos = anos;
        },
        enumerable: false,
        configurable: true
    });
    ConversaoDeUnidadesDeTempo.prototype.minutoParaSegundo = function () {
        return this.minutos * 60;
    };
    ConversaoDeUnidadesDeTempo.prototype.horaParaMinuto = function () {
        return this.horas * 60;
    };
    ConversaoDeUnidadesDeTempo.prototype.diaParaHoras = function () {
        return this.dias * 24;
    };
    ConversaoDeUnidadesDeTempo.prototype.semanaParaDias = function () {
        return this.semanas * 7;
    };
    ConversaoDeUnidadesDeTempo.prototype.mesParaDias = function () {
        return this.meses * 30;
    };
    ConversaoDeUnidadesDeTempo.prototype.anoParaDias = function () {
        return this.anos * 365.25;
    };
    return ConversaoDeUnidadesDeTempo;
}());
var teste = new ConversaoDeUnidadesDeTempo(1, 1, 1, 1, 1, 1, 1);
try {
    teste.minutos = 2;
    teste.horas = 2;
    teste.dias = 10;
    teste.semanas = 1;
    teste.meses = 10;
    teste.anos = 1;
    console.log(teste.minutos + " minuto = " + teste.minutoParaSegundo() + " segundos");
    console.log(teste.horas + " hora = " + teste.horaParaMinuto() + " minutos");
    console.log(teste.dias + " dia = " + teste.diaParaHoras() + " horas");
    console.log(teste.semanas + " semana = " + teste.semanaParaDias() + " dias");
    console.log(teste.meses + " m\u00EAs = " + teste.mesParaDias() + " dias");
    console.log(teste.anos + " ano = " + teste.anoParaDias() + " dias");
}
catch (err) {
    console.log(err.message);
}
