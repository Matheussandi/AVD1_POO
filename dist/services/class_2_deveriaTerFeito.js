"use strict";
var ConvetTempo = /** @class */ (function () {
    function ConvetTempo() {
    }
    ConvetTempo.minutoParaSegundo = function (n) {
        return n * 60 + ' segundos';
    };
    ConvetTempo.horaParaMinuto = function (n) {
        return n * 60 + ' minutos';
    };
    ConvetTempo.diaParaHoras = function (n) {
        return n * 24 + ' horas';
    };
    ConvetTempo.semanaParaDias = function (n) {
        return n * 7 + ' dias';
    };
    ConvetTempo.mesParaDias = function (n) {
        return n * 30 + ' dias';
    };
    ConvetTempo.anoParaDias = function (n) {
        return n * 365.25 + ' dias';
    };
    return ConvetTempo;
}());
console.log(ConvetTempo.minutoParaSegundo(1));
console.log(ConvetTempo.horaParaMinuto(1));
console.log(ConvetTempo.diaParaHoras(1));
console.log(ConvetTempo.semanaParaDias(1));
console.log(ConvetTempo.mesParaDias(1));
console.log(ConvetTempo.anoParaDias(1));
