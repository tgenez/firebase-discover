# Lab 1

Le but est d'héberge le blog qui est un simple index.html

il faut se connecter à firebase

```
firebase login
```

Lancez votre projet
Exécutez la commande suivante à partir du répertoire racine de votre application :
```
firebase init
```

Il faut choissir pour cette atelier hosting avec l'options hosting: configure files for firebase hosting.

Il faut ensuite choisir "use an existing project"et  choisir le projet que vous venez de créer avec la console 

Vous pouvez laisser les choix par défaut comme folder public

Répondre y à la question configure as a single-page app.

On peut répondre N à la question "Set up automatic builds and deploy with GitHub"

Après vous pouvez faire:

```
firebase deploy --only hosting
```

Vous pouvez ensuite si tout est passé, suivre le lien donné dans la console pour voir votre page index.html en ligne
