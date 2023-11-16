# Lab 1 solution

Le but est d'héberger l'index.html fournit par firebase lors de l'init.

Il faut se connecter à firebase console dans votre projet que vous avez créé.

Dans le dossier, faites en commande pour vous connecter avec votre compte
```
firebase login
```

Exécutez la commande suivante à partir du répertoire racine de votre application :
```
firebase init hosting
```

Il faut choisir pour cette atelier hosting.

Il faut ensuite choisir votre projet.

Vous pouvez laisser les choix par défaut comme folder public.

```
firebase deploy --only hosting
```

Vous pouvez ensuite suivre le lien et voir l'index.html d'exemple de firebase qui est hébergé.

Vous pouvez ensuite changer le fichier index.html et relancer le deploy pour voir qu'il se met bien à jour.

Vous pouvez aussi regarder dans la console firebase hosting les informations.
