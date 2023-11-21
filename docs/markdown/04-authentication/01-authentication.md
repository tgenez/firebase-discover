# Authentification

Authentification simple et sécurisée pour vos applications

* Authentification par email/mot de passe 
* Authentification par téléphone
* Authentification par identifiant tiers
<!-- .element: class="list-fragment" -->

Notes:
Firebase Authentication est un service d'authentification qui permet aux utilisateurs de se connecter à vos applications mobiles et web. Il offre une variété de méthodes d'authentification, notamment :

* Authentification par email/mot de passe : les utilisateurs s'identifient avec leur adresse e-mail et leur mot de passe.
* Authentification par téléphone : les utilisateurs s'identifient avec leur numéro de téléphone et reçoivent un code de vérification par SMS.
* Authentification par identifiant tiers : les utilisateurs s'identifient avec leur compte Google, Facebook, Twitter, GitHub, etc.


##==##

# Authentification: avantage

* Facile à mettre en place sur votre front js. 
* Firebase va gérer toute la couche de sécurité pour vous.
* Le stockage de mot de passe ne sera pas chez vous.
* Gestion dans firebase
<!-- .element: class="list-fragment" -->

##==##

# Authentification: console firebase offre de la gestion

La console firebase permet de gérer vos utilisateurs sans avoir à devellopper une interface

* On peut supprimer un compte, le suspendre.
* Ajouter des nouvelles méthode de sign-in 
* Changer les templates d'email fournit par google
* Avoir accès au statistique d'utilisateur de l'authentification
<!-- .element: class="list-fragment" -->

##==##

# Authentification: l'utiliser dans un projet

Pour utiliser l'authentification dans un projet, il faut créer une application web dans la console firebase
![w-1000 center](./assets/images/ajouter_application.png)

Prenez en note la partie ajouter le SDK firebase, vous en aurez besoin

##==##
<!-- .slide: class="with-code consolas" -->

# Authentification: javascript

En javascript, nous avons accès à une libraire

Ajouter dans les scripts

```html
<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-auth.js"></script>
```

```js
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Authentication
const auth = firebase.auth();
```

##==##

<!-- .slide: class="with-code consolas" -->

# Authentification: register

Méthode pour créer un nouveau utilisateur dans firebase auth

```js
auth.createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // register est bon
    const user = userCredential.user;
  })
  .catch((error) => {
    // erreur à gérer comme email déjà register ou autre
  });
```
<!-- .element: class="big-code" -->

Notes:

Parler attention même si pas de page register, quelqu'un pourrait faire en js créer un compte
Peuvent être delete par cloud function

##==##

<!-- .slide: class="with-code consolas" -->

# Authentification: login

Méthode pour se connecter avec un utilisateur

```js
auth.signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // connecté
    const user = userCredential.user;
  })
  .catch((error) => {
    // connection échouée, peut gérer les cas comme mauvais email/mdp
  });
```
<!-- .element: class="big-code" -->

##==##
<!-- .slide: class="with-code consolas" -->
# Authentification: logout

Méthode pour déconnecter un utilisateur

```js
auth.signOut()
  .then(() => {
    console.log('User logged out successfully!');
  })
  .catch(error => {
    console.error(error.message);
  });
```
<!-- .element: class="big-code" -->

##==##
<!-- .slide: class="with-code consolas" -->

# Authentification: observateur sur l'état de l'utilisateur

Méthode pour suivre les changements d'état sur l'authentification

```js
auth.onAuthStateChanged(auth, (user) => {
  if (user) {
    // Utilisateur est connecté
    const uid = user.uid;
  } else {
    // Utilisateur n'est pas connecté
  }
});
```
<!-- .element: class="big-code" -->

##==##


<!-- .slide: class="exercice" -->

# Exercice 3: ajouter une authentification au site

## Lab 3

<br>

1. On va ajouter le system d'authentification à notre page d'exemple

<br>

### dossier: labs/03-auth

Notes:

- Faire l'exercice
