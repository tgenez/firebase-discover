# Authentification: SSO

Fournisseurs: 
* google
* facebook
* apple
* github 
* twitter/X
* microsoft
* autres

[console de firebase](https://console.firebase.google.com/)
<!-- .element: class="credits" -->

Notes:

Firebase propose d'utiliser des fournisseurs comme google, facebook, apple, github, etc pour s'authentifié.

Il suffit dans la console authentification d'activer sur le projet le fournisseur pour qu'il soit utilisable ensuite dans votre code front.


##==##

<!-- .slide: class="with-code consolas" -->

# Authentification: intégration  javascript

Activer le fournisseur dans la console

Ajout du provider comme google avec une méthode d'authentification
```js
const provider = new firebase.auth.GoogleAuthProvider();
await auth.signInWithPopup(provider).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="exercice" -->

# Exercice 4: utiliser une auth sso google

## Lab 4

<br>

1. On va ajouter le system d'authentification à notre page d'exemple avec le sso de google

<br>

### dossier: labs/04-auth-sso

Notes:

- Faire l'exercice
