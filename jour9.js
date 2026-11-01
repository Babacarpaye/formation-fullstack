//Mention : à partir d’une variable note, affichent Très bien (16 ou plus), Bien (14 à 15), Assez bien (12 à 13), Passable (10 à 11) ou Ajourné (moins de 10). Testez avec plusieurs valeurs de note.
const note = 15;
if (note >= 16) {
    console.log("Très bien");
} else if (note >= 14) {
    console.log("Bien");
} else if (note >= 12) {
    console.log("Assez bien");
} else if (note >= 10) {
    console.log("Passable");
} else {
    console.log("Ajourné");
}

// Table de multiplication : avec une boucle for, affichent la table d’un nombre de votre choix de 1 à 10, sous la forme 7 x 3 = 21.
const nombre = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${nombre} x ${i} = ${nombre * i}`);
}

//Compte à rebours : avec une boucle while, affichent 10, 9, 8... 1, puis Décollage !.
let compteur = 10;
while (compteur > 0) {
    console.log(compteur);
    compteur--;
}
console.log("Décollage !");

//Pairs et impairs : avec une boucle for, affichent les nombres de 1 à 20, en indiquant pour chacun s’il est pair ou impair.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} est un nombre pair.`);
    } else {
        console.log(`${i} est un nombre impair.`);
    }
}

// Somme : calculent la somme des nombres de 1 à 100 avec une boucle, et affichent le résultat. (Le résultat attendu est 5050.)
let somme = 0;
for (let i = 1; i <= 100; i++) {
    somme += i;
}
console.log(`La somme des nombres de 1 à 100 est ${somme}.`);

