# Hébergement: Que pouvez-vous héberger ?

* Vos applications Web d'une seule page
* Vos ressources statiques et dynamiques

[documentation hébergement](https://firebase.google.com/docs/hosting?authuser=0&hl=en)

<!-- .element: class="credits" -->

Notes:
Bénéficiez de l'optimisation unique de Firebase Hosting pour servir des applications Web d'une seule page et des sites Web statiques.
Firebase Hosting fournit un hébergement rapide et sécurisé pour votre application Web, votre contenu statique et dynamique et vos microservices.

##==##

# Hébergement: domaines

Par défaut, Firebase va héberger sur les domaines:
```
NAME_PROJECT.web.app
NAME_PROJECT.firebaseapp.com
```

Firebase va fournir un certifcat SSL pour chacun des domaines.

Notes:
Avec Firebase Hosting, vous recevez automatiquement un sous-domaine Firebase, mais vous pouvez choisir de diffuser votre contenu sur un domaine personnalisé (comme example.com ou myrealtimeapp.example.com ). Firebase Hosting fournit un certificat SSL pour chacun de vos domaines et diffuse votre contenu sur un CDN mondial.

##==##

# Hébergement: domaines personnalisés

Par la console, un domaine personnel peut être ajouté dans "hosting"

Deux enregistrements à mettre dans votre fournisseur DNS:
* type A
* type TXT

Notes: 

Montrer dans la console

##==##

# Hébergement: comment faire ?

Initialisation du projet firebase avec service hosting dans un dossier

```sh
firebase init hosting
```

<br>

On peut lancer une commande pour le deployement
```sh
firebase deploy --only hosting
```

Notes:
* Sélectionnez un projet Firebase pour vous connecter à votre répertoire de projet local.
* Spécifiez un répertoire à utiliser comme répertoire racine public.
* Choisissez une configuration pour votre site

##==##
<!-- .slide: class="exercice" -->

# Exercice 1: hébergé une page

## Lab 1

<br>

1. Lancer le déployement de votre première page index.html static

<br>

### dossier: labs/01-blog

Notes:

- Faire l'exercice
