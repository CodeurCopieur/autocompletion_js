# Auto Completion js

Développement d'une interface utilisateur web permettant de suggérer des écoles basées sur la saisie dynamique des utilisateurs, avec prise en compte de la sensibilité aux accents et affichage des détails des écoles sélectionnées.


## 1. Environnement de Développement
### 1.1 Technologies Utilisées

    Frontend : HTML5, CSS3, JavaScript ES6
    
    Outils de Développement :
        Editeur de code : Visual Studio Code
        Système de contrôle de version : Git, GitHub
        Navigateurs pour le test 

## 2. Structure du Projet
### 2.1 Arborescence des Fichiers


````
|-- index.html
|-- styles/
|   `-- main.css
`-- js/
    `-- main.js
````
### 2.2 Description des Fichiers

    index.html : Contient la structure de la page web, y compris l'input de recherche et les conteneurs pour les suggestions et les détails des écoles.

    main.css : Définit les styles de l'interface utilisateur, comme la mise en page et l'apparence des suggestions.

    app.js : Contient toute la logique JavaScript pour gérer la saisie de l'utilisateur, le filtrage des écoles, et l'affichage des suggestions et détails.

## 3. Implémentation
### 3.1 Initialisation de l'Interface Utilisateur

    HTML : Création d'un champ de saisie pour la recherche, d'une liste pour les suggestions, et d'une section pour les détails des écoles.

    CSS : Style de la liste des suggestions pour qu'elle soit dynamiquement visible/invisible et mise en forme des détails des écoles.

### 3.2 Logique JavaScript

    Écouteur d'événements sur le champ de saisie pour capturer la saisie de l'utilisateur en temps réel.

    Fonction de filtrage qui normalise la saisie et les noms des écoles pour la comparaison, puis filtre les écoles basées sur la correspondance.

    Affichage des suggestions en créant dynamiquement des éléments HTML basés sur les écoles filtrées.

    Gestion des sélections pour afficher les détails de l'école sélectionnée.

## 4. Fonctions Principales
### 4.1 Filtrage et Normalisation

    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") est utilisé pour rendre la comparaison insensible aux accents.

### 4.2 Affichage Dynamique des Suggestions

    Détail sur la manipulation du DOM pour insérer/retirer des éléments de la liste des suggestions en fonction de la saisie de l'utilisateur.