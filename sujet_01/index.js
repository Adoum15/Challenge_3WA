const fs = require("fs");

const readJsonFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: "utf8" }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (parseErr) {
          reject(parseErr);
        }
      }
    });
  });
};

readJsonFile("./sujet_01/data/populations.json").then((data) => {
  const populations = data.populations;
  if (populations) {
    const tableData = populations.map((person) => ({
      nom: person.name,
      job: person.jobs ? person.jobs.join(", ") : "Aucun",
      password: person.password ? person.password : "Aucun",
    }));
    //Voici les donné rangé dans un tableau
    console.table(tableData);

    //scripte avec filter pour calculer le nombre de Docteur :
    const doctorCount = populations.filter(
      (person) => person.jobs && person.jobs.includes("doctor")
    ).length;
    console.log(`\nQ1\nNombre total de docteurs est : ${doctorCount}`);

    //Nom des developpeur fullstack
    const devFullStackName = populations
      .filter((person) => person.jobs && person.jobs.includes("dev fullstack"))
      .map((person) => person.name);
    console.log(`\nQ2\nNoms des développeurs fullstack: ${devFullStackName}`);

    //Nom des personnes qui n'ont jamais travailler
    const JamaisTravailler = populations
      .filter((person) => !person.jobs || person.jobs.length === 0)
      .map((person) => person.name);
    console.log(`\nQ3\nNom des personnes qui n'ont jamais travailler: ${JamaisTravailler}`);

    // occurences pour chaque lettre distincte.
    const letterCounts = {};
    populations.forEach((person) => {
      if (person.password) {
        person.password.split('').forEach((letter) => {
          if (letterCounts[letter]) {
            letterCounts[letter]++;
          } else {
            letterCounts[letter] = 1;
          }
        });
      }
    });
    console.log("\nPetit_plus\nOccurrences des lettres dans les mots de passe par personne:");
    console.log(letterCounts);

    // Étudier les mots de passe de chaque personne
    const passwordLetterCounts = {};
    populations.forEach((person) => {
      if (person.password) {
        const letterCounts = {};
        person.password.split('').forEach((letter) => {
          if (letterCounts[letter]) {
            letterCounts[letter]++;
          } else {
            letterCounts[letter] = 1;
          }
        });
        passwordLetterCounts[person.name] = letterCounts;
      }
    });
    console.log("\nQ3\nOccurrences des lettres dans les mots de passe par personne:");
    console.log(passwordLetterCounts);
  } else {
    console.error(
      "La clé 'populations' n'existe pas dans les données chargées"
    );
  }
});
