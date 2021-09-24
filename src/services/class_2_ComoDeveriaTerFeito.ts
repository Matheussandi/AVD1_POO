class ConvetTempo {
    static minutoParaSegundo(n: number) {
        return n * 60 + ' segundos'
    }

    static horaParaMinuto(n: number) {
        return n * 60 + ' minutos'
    }

    static diaParaHoras(n: number) {
        return n * 24 + ' horas'
    }

    static semanaParaDias(n: number) {
        return n * 7 + ' dias'
    }

    static mesParaDias(n: number) {
        return n * 30 + ' dias'
    }

    static anoParaDias(n: number) {
        return n * 365.25 + ' dias'
    }
}

console.log(ConvetTempo.minutoParaSegundo(1))
console.log(ConvetTempo.horaParaMinuto(1))
console.log(ConvetTempo.diaParaHoras(1))
console.log(ConvetTempo.semanaParaDias(1))
console.log(ConvetTempo.mesParaDias(1))
console.log(ConvetTempo.anoParaDias(1))
