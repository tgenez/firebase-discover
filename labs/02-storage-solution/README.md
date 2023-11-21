# Lab 2: solution

Il faut ajouter votre image par la console firebase.

Une fois finit de charger, vous voyez dans la console votre image, vous pouvez cliquer dessus pour voir le lien d'accès

```
https://firebasestorage.googleapis.com/v0/b/YOUR_PROJECT_ID.appspot.com/o/cat.png?alt=media
```

Il faut changer la règle d’accès pour autoriser la lecture accès en public

```
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```
