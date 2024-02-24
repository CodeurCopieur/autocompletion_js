const ecoles = [
  { nom: "hec A", adresse: "Adresse A", codePostal: "CodePostal A" },
  { nom: "standford B", adresse: "Adresse B", codePostal: "CodePostal B" },
  { nom: "École C", adresse: "Adresse C", codePostal: "CodePostal C" },
  { nom: "paris 8", adresse: "Adresse D", codePostal: "CodePostal D" },
  { nom: "École E", adresse: "Adresse E", codePostal: "CodePostal E" }
];
searchInput.addEventListener('input', () => {
  const inputText = searchInput.value;
  suggestionsList.innerHTML = ''; // Réinitialise la liste des suggestions à chaque saisie

  // Continue seulement si au moins 3 caractères non accentués sont saisis
  if (inputText.length < 3) {
      suggestionsList.classList.remove('visible'); // Masque la liste des suggestions si moins de 3 caractères
      return; // Sort de la fonction pour ne pas procéder à la recherche
  }

// Normalise la saisie de l'utilisateur pour retirer les accents
  const normalizedInputText = inputText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");


  const filteredEcoles = ecoles.filter(ecole => 
      ecole.nom.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").startsWith(normalizedInputText) || ecole.nom.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalizedInputText)
  );

  if (filteredEcoles.length > 0) {
      suggestionsList.classList.add('visible');
  } else {
      suggestionsList.classList.remove('visible');
  }

  filteredEcoles.forEach(ecole => {
      const li = document.createElement('li');
      li.textContent = ecole.nom;
      li.onclick = () => {
          const detailsHTML = `
              <h2>${ecole.nom}</h2>
              <p>Adresse: ${ecole.adresse}</p>
              <p>Code Postal: ${ecole.codePostal}</p>
          `;
          document.getElementById('ecoleDetails').innerHTML = detailsHTML;
          document.getElementById('ecoleDetails').classList.add('details-visible');
          suggestionsList.innerHTML = ''; // Vide la liste des suggestions
          suggestionsList.classList.remove('visible'); // Masque la liste après une sélection
      };
      suggestionsList.appendChild(li);
  });
});
