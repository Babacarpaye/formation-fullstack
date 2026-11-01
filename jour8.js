const prenom = "Babacar";
const anneeNaissance = 2000;
const anneeActuelle = 2026;
const age = anneeActuelle - anneeNaissance;
console.log(`Bonjour ${prenom}, vous avez ${age} ans.`);

let nombre = 17;
if (nombre % 2 === 0) {
    console.log(`${nombre} est un nombre pair.`);
} else {
    console.log(`${nombre} est un nombre impair.`);
}

console.log(typeof prenom);
console.log(typeof age);
console.log(typeof nombre);
console.log(typeof (nombre > 10));


const prixUnitaire = 1500;
const quantite = 4;
const prixTotal = prixUnitaire * quantite;
console.log(`Le prix total est de ${prixTotal} FCFA.`);