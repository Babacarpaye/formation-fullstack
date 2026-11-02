const notes = [12, 15, 9, 18, 7, 14];
console.log(notes[0]);
console.log(notes.length);
console.log(notes[notes.length - 1]);
function moyenne(notes) {
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
        somme += notes[i];
    }
    return somme / notes.length;
}
console.log("La moyenne est : " + moyenne(notes));
notes.push(16);
console.log(notes);
const notes2 = notes.filter(n=> n >= 10);
console.log(notes2);


const etudiant = {
    nom: "Awa",
    age: 22,
    filiere: "Mathématiques"
};
console.log(`${etudiant.nom} a ${etudiant.age} ans et étudie ${etudiant.filiere}.`);
etudiant.ville = "Saint-Louis";
console.log(etudiant);

const produits = [
    { nom: "Rasoir", prix: 1500 },
    { nom: "Stylo", prix: 500 },
    { nom: "Souris", prix: 3000 },
    { nom: "Clavier", prix: 2500 }
];
const pasChers = produits.filter(p => p.prix < 2000);
console.log(pasChers);
const noms = produits.map(p => p.nom);
console.log(noms);


