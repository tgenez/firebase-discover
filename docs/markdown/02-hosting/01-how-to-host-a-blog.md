# Hébergement: Que pouvez-vous héberger ?

* Vos applications Web d'une seule page ou multiple pages
* Vos ressources statiques et dynamiques
<!-- .element: class="list-fragment" -->

[documentation hébergement](https://firebase.google.com/docs/hosting?authuser=0&hl=en)

<!-- .element: class="credits" -->

Notes:
Bénéficiez de l'optimisation unique de Firebase Hosting pour servir des applications Web d'une seule page et des sites Web statiques.
Firebase Hosting fournit un hébergement rapide et sécurisé pour votre application Web, votre contenu statique et dynamique et vos microservices.

##==##

<!-- .slide: class="with-code consolas" -->
# Hébergement: domaines

Par défaut, Firebase va héberger sur les domaines:

```shell
NAME_PROJECT.web.app
NAME_PROJECT.firebaseapp.com
```
<!-- .element: class="big-code" -->

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

<!-- .slide: class="with-code consolas" -->

# Hébergement: comment faire ?

1. S'authentifier avec son compte google

```shell
firebase login
```
<!-- .element: class="big-code" -->

<br>

2. Initialisation du projet firebase avec service hosting dans un dossier

```shell
firebase init hosting
```
<!-- .element: class="big-code" -->

<br>

3. On peut lancer une commande pour le deployement
```shell
firebase deploy --only hosting
```
<!-- .element: class="big-code" -->


Notes:
* Sélectionnez un projet Firebase pour vous connecter à votre répertoire de projet local.
* Spécifiez un répertoire à utiliser comme répertoire racine public.
* Choisissez une configuration pour votre site

##==##
<!-- .slide: class="exercice" -->

# Exercice 1: héberger une page

## Lab 1

<br>

1. Lancer le déployement de votre première page index.html static

<br>

### dossier: labs/01-hosting

Notes:

- Faire l'exercice
