// Initialisation des variables
let inputValue = 5; // Pour stocker la valeur entrée par l'utilisateur
let totalECount = 0; // Pour stocker la somme du nombre de 'e'

// Fonction pour gérer les événements d'entrée dans le champ de saisie
function handleInput(event) {
  inputValue = event.target.value; // Mise à jour de la valeur à chaque saisie de l'utilisateur
}

// Ajout d'un écouteur d'événement sur le champ de saisie
const elInput = document.querySelector("#inputElement"); // Remplacez '#inputElement' par l'identifiant réel de votre élément d'entrée
elInput.addEventListener("input", handleInput);

// Fonction pour gérer les clics sur le bouton
function handleClick(photoCount = parseInt(inputValue, 10)) {
  // Convertit la valeur d'entrée en nombre
  if (!isNaN(photoCount)) {
    fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${photoCount}`)
      .then((response) => response.json())
      .then((photos) => {
        const message = document.querySelector("#messageElement"); // Sélectionnez l'élément où afficher les messages
        message.innerHTML = ""; // Nettoyage des messages précédents
        photos.forEach((photo) => {
          // Créer un élément de paragraphe pour le titre
          const photoTitle = document.createElement("p");
          const IdTitle = document.createElement("p");
          const textMessage = document.createElement("p");
          IdTitle.textContent = `Id: ${photo.id}`;
          photoTitle.textContent = `Titre: ${photo.title}`;
          textMessage.textContent = `Image Mignature :`;
          // Créer un élément d'image pour la photo
          const photoImage = document.createElement("img");
          photoImage.src = photo.url; // Utilisez l'URL de la photo ici
          photoImage.alt = photo.title; // Texte alternatif pour la photo
          photoImage.style.width = "100px"; // Exemple de style, ajustez selon les besoins

          // Ajouter le titre et l'image au message

          message.appendChild(IdTitle);
          message.appendChild(photoTitle);
          message.appendChild(textMessage);
          message.appendChild(photoImage);
        });
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des posts:", error);
        message.textContent = "Erreur lors de la récupération des données.";
      });
  } else {
    const message = document.querySelector("#messageElement");
    message.textContent = "Veuillez saisir un nombre valide.";
  }
}
//afficher 5 photo au chargement de la page
document.addEventListener("DOMContentLoaded", () => handleClick());

// Ajout d'un écouteur d'événement sur le bouton de soumission
const elSubmit = document.querySelector("#submitButton");
elSubmit.addEventListener("click", () => handleClick());

//Afficher plusieur photo pour l'exo1 avec le temps de chargement
const showAllButton = document.querySelector("#showAllButton");
showAllButton.addEventListener("click", () => handleClick(5000)); // Passer Infinity pour charger tous les éléments
