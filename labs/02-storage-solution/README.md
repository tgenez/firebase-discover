# Lab 2

Il faut ajouter votre image par la console firebase.

Une fois finit de charger, vous la voyez dans la console, vous voyez votre image dans la console, vous pouvez cliquer dessus pour voir le lien d'accès

```
https://firebasestorage.googleapis.com/v0/b/nobs-f32f2.appspot.com/o/profile%2F1s_by_wlop-dc1sdan.jpg?alt=media
```

Il faut changer la règle d'access pour autoriser la lecture access en public

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
