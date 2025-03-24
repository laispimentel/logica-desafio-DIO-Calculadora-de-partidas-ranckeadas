

let jogadores = [
    { position: "top", vitorias: 110, derrotas: 9 },
    { position: "mid", vitorias: 20, derrotas: 15 },
    { position: "jungle", vitorias: 30, derrotas: 10 },
    { position: "ADC", vitorias: 95, derrotas: 15 },
    { position: "suport", vitorias: 5, derrotas: 2 }
];

function niveldoJogador(vitorias, derrotas) {
    let saldoRanckeadas = vitorias - derrotas;
    let nivel;

    if (saldoRanckeadas <= 10) {
        nivel = "Ferro";
    } else if (saldoRanckeadas >= 11 && saldoRanckeadas <= 20) {
        nivel = "Bronze";
    } else if (saldoRanckeadas >= 21 && saldoRanckeadas <= 50) {
        nivel = "Prata";
    } else if (saldoRanckeadas >= 51 && saldoRanckeadas <= 80) {
        nivel = "Ouro";
    } else if (saldoRanckeadas >= 81 && saldoRanckeadas <= 90) {
        nivel = "Diamante";
    } else if (saldoRanckeadas >= 91 && saldoRanckeadas <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O herói tem um saldo de ${saldoRanckeadas} e está no nível ${nivel}`;
}

for (let i = 0; i < jogadores.length; i++) {
    let jogador = jogadores[i];
    let resultado = niveldoJogador(jogador.vitorias, jogador.derrotas);
    console.log(`${jogador.position}: ${resultado}`);
}