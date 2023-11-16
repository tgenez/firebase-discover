# Lab 2

Le but est d'héberger un fichier dans le stockage

* il faut se connecter à firebase console dans votre projet que vous avez créé. Puis aller dans stockage et suivre les instructions après appuyer sur commencer

* Un fois le bucket créer, On peut importer un fichier cat.png qui se trouve dans le dossier avec la console firebase.

* Le but est d'arriver à autoriser l'image en url public en manipulant les règles sur votre bucket

* Puis mettre à jour l'index.hml qui se trouve dans public puis redéploié le  firebase et constater qu'on voit l'image

Pour relancer l'hébergement:
```
firebase init hosting
```

```
firebase deploy --only hosting
```
