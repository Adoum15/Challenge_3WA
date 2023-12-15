const populations = [
  { id: 0, name: "Alan", jobs : ['dev junior', 'dev fullstack'], password : "tyeedsa00" },
  { id: 1, name: "Albert", jobs : [ 'doctor'], password : "tyeidii00" },
  { id: 2, name: "Jhon" , jobs : ['mathematician', 'doctor'], password : "xyuuuoi00"},
  { id: 3, name: "Brice", jobs : ['dev fullstack'] , password : "xytoiab00"},
  { id: 4, name: "Alexendra", jobs : ['dentist'],  password : "aaaoiab33" },
  { id: 5, name: "Brad" },
  { id: 6, name: "Carl" , jobs : ['lead dev', 'dev fullstack']},
  { id: 7, name: "Dallas" , jobs : [ 'dev fullstack']},
  { id: 8, name: "Dennis", jobs : ['integrator', 'dev fullstack'] },
  { id: 9, name: "Edgar", jobs : ['mathematician'] },
  { id: 10, name: "Erika", jobs : ['computer scientist', 'mathematician'] },
  { id: 11, name: "Isaac", jobs : ['doctor'], password : "Axgkj22Kl" },
  { id: 12, name: "Ian", password : "Axgkj00Kl" },
];
const fs = require('fs');

// Création d'un objet avec une clé 'population' qui contient le tableau
const dataToWrite = {
    populations: populations
};


const jsonContent = JSON.stringify(dataToWrite, null, 2); // Utilisation de null, 2 pour une mise en forme lisible


fs.writeFile('populations.json', jsonContent, 'utf8', (err) => {
    if (err) {
        console.error("Une erreur s'est produite lors de l'écriture du fichier JSON :", err);
    } else {
        console.log("Fichier JSON sauvegardé avec succès.");
    }
});
