class ConversaoDeUnidadesDeTempo {
    constructor(
        public _segundos: number,
        public _minutos: number,
        public _horas: number,
        public _dias: number,
        public _semanas: number,
        public _meses: number,
        public _anos: number
    ) {}

    get segundos() {
        return this._segundos;
    }

    get minutos() {
        return this._minutos;
    }

    get horas() {
        return this._horas;
    }

    get dias() {
        return this._dias;
    }

    get semanas() {
        return this._semanas;
    }

    get meses() {
        return this._meses;
    }

    get anos() {
        return this._anos;
    }

    set segundos(segundos: number) {
        if (segundos <= 0) {
            throw new Error("Segundo inválido !")
        }

        this._segundos = segundos;
    }

    set minutos(minutos: number) {
        if (minutos <= 0) {
            throw new Error("Minuto inválido !")
        }

        this._minutos = minutos;
    }

    set horas(horas: number) {
        if (horas <= 0) {
            throw new Error("Hora inválida !")
        }

        this._horas = horas;
    }

    set dias(dias: number) {
        if (dias <= 0) {
            throw new Error("Dia inválido !")
        }

        this._dias = dias;
    }

    set semanas(semanas: number) {
        if (semanas <= 0) {
            throw new Error("Semana inválida !")
        }

        this._semanas = semanas;
    }

    set meses(meses: number) {
        if (meses <= 0) {
            throw new Error("Mês inválido !")
        }

        this._meses = meses;
    }

    set anos(anos: number) {
        if (anos <= 0) {
            throw new Error("Ano inválido !")
        }

        this._anos = anos;
    }

    public minutoParaSegundo() {
        return this.minutos * 60
    }

    public horaParaMinuto () {
        return this.horas * 60
    }

    public diaParaHoras () {
        return this.dias * 24
    }

    public semanaParaDias () {
        return this.semanas * 7
    }

    public mesParaDias () {
        return this.meses * 30
    }

    public anoParaDias () {
        return this.anos * 365.25
    }
}

const teste = new ConversaoDeUnidadesDeTempo(1,1,1,1,1,1,1)

try {
   teste.minutos = 2
   teste.horas = 2
   teste.dias = 10
   teste.semanas = 1
   teste.meses = 10
   teste.anos = 1

   console.log(`${teste.minutos} minuto = ${teste.minutoParaSegundo()} segundos`)
   console.log(`${teste.horas} hora = ${teste.horaParaMinuto()} minutos`)
   console.log(`${teste.dias} dia = ${teste.diaParaHoras()} horas`)
   console.log(`${teste.semanas} semana = ${teste.semanaParaDias()} dias`)
   console.log(`${teste.meses} mês = ${teste.mesParaDias()} dias`)
   console.log(`${teste.anos} ano = ${teste.anoParaDias()} dias`)
} catch (err:any) {
    console.log(err.message)
}