//celsiusEnFahrenheit(c) : renvoie la température en Fahrenheit, avec la formule c * 9 / 5 + 32. Résultats attendus : 0 donne 32, et 100 donne 212
function celsiusEnFahrenheit(c) {
    return c * 9 / 5 + 32;
}
console.log(celsiusEnFahrenheit(0));
console.log(celsiusEnFahrenheit(100));


//estPair(n) : renvoie true si n est pair, false sinon. Utilisez % et ===.
function estPair(n) {
    return n % 2 === 0;
}
console.log(estPair(4));
console.log(estPair(7));

//mentionNote(note) : renvoie la mention correspondante à une note donnée.
function mentionNote(note) {
    if (note >= 16) {
        return "Très bien";
    } else if (note >= 14) {
        return "Bien";
    } else if (note >= 12) {
        return "Assez bien";
    } else if (note >= 10) {
        return "Passable";
    } else {
        return "Ajourné";
    }
}
console.log(mentionNote(15));
console.log(mentionNote(9));

function calculerTotal(prixUnitaire, quantite) {
    return prixUnitaire * quantite;
}
console.log(calculerTotal(1500, 4));

function tableDe(n){
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
tableDe(7);

function maximum(a, b) {
    return a > b ? a : b;
}
console.log(maximum(5, 10));
console.log(maximum(20, 15));