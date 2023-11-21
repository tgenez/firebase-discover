# Stockage: Fonctionnalités

* Stockage de fichiers comme des images, des vidéos, etc.
* Partage de fichiers avec d'autres utilisateurs ou groupes.
* Contrôle d'accès basé sur des règles pour protéger vos fichiers.
* Reporting et analyse des données de stockage.
* Gestion par la console
<!-- .element: class="list-fragment" -->

[documentation stocakge](https://firebase.google.com/docs/storage?hl=en)
<!-- .element: class="credits" -->

Notes:

Firebase stockage est un service de stockage d'objets basé sur le cloud qui vous permet de stocker des fichiers de toutes tailles et de tous types dans votre application.
Cela offre une interface simple et intuitive pour charger, télécharger, gérer et partager des fichiers.

##==##

# Storage: Créer un bucket Cloud Storage

1. Dans la console Firebase, sélectionnez Stockage.
2. Cliquez sur Commencer .
3. Sélectionnez un emplacement pour votre bucket Cloud Storage par défaut.

Notes:
montrer comment faire sur le projet crée

##==##

# Stockage: règle de securité

* Elles permettent de contrôler qui peut accéder à vos fichiers.
* Elles sont écrites en langage JavaScript 
* Elles sont appliquées à chaque requête d'accès à un fichier.
<!-- .element: class="list-fragment" -->

Notes:

règle d'autorisation:
L'identité de l'utilisateur : les règles peuvent autoriser ou refuser l'accès en fonction de l'identité de l'utilisateur, qui est déterminée par Firebase Authentication.
Le rôle de l'utilisateur : les règles peuvent autoriser ou refuser l'accès en fonction du rôle de l'utilisateur, qui peut être défini par vous-même.
L'adresse IP de l'utilisateur : les règles peuvent autoriser ou refuser l'accès en fonction de l'adresse IP de l'utilisateur.

règle d'opération: La lecture , L'écriture , La suppression ou Le partage du fichier

##==##

# Stockage: règle de securité

Les règles d'accès au stockage sont composées de deux parties :

* **Les règles d'autorisation** définissent qui peut accéder à un fichier
* **Les règles d'opération** définissent ce que les utilisateurs sont autorisés à faire avec un fichier.
<!-- .element: class="list-fragment" -->

##==##

<!-- .slide: class="with-code consolas" -->

# Storage: règle de securité exemple

Règle simple qui autorise la lecture sur tous les fichiers mais interdit l'écriture

```js
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code consolas" -->

# Storage: règle de securité exemple 2

Règle spécifique pour un seul fichier public et le reste interdit

```js
service firebase.storage {
  match /b/{bucket}/o {
   match /cat.png {
      allow read: if true;
      allow write: if false;
    }
    match /{allPaths=**} {
      allow read: if false;
      allow write: if false;
    }
  }
}
```

##==##

<!-- .slide: class="exercice" -->

# Exercice 2: ajouter une image

## Lab 2

<br>

1. Uploaded une image dans le stockage cat.png avec la console
2. Mettre le lien à jour dans le html
3. Déployer le site avec le changement

<br>

### dossier: labs/02-storage

Notes:

- Faire l'exercice
