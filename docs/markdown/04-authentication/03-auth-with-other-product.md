# Authentification avec stockage

Les règles de stockages s'intègrent avec l'authenficiation par Firebase

![w-1000 center](./assets/images/schema_stockage_auth.png)

Notes:
Les règles de sécurité Firebase pour Cloud Storage s'intègrent à Firebase Authentication pour fournir une puissante authentification basée sur l'utilisateur sur Cloud Storage. Cela permet un contrôle d'accès granulaire basé sur les revendications d'un jeton d'authentification Firebase.
Lorsqu'un utilisateur authentifié effectue une requête sur Cloud Storage, la variable request.auth est renseignée avec l' uid de l'utilisateur ( request.auth.uid ) ainsi que les revendications du JWT d'authentification Firebase ( request.auth.token ).
De plus, lors de l'utilisation de l'authentification personnalisée, des revendications supplémentaires apparaissent dans le champ request.auth.token .
Lorsqu'un utilisateur non authentifié effectue une requête, la variable request.auth est null .

##==##

# Authentification avec stockage

Plusieurs manières d'utiliser l'authentification:

* **Public** : ignorer request.auth
* **Privé authentifié** : vérifier que request.auth n'est pas null
* **Utilisateur privé** : vérifier que request.auth.uid est égal à un uid de chemin

Notes:

Expliquer les principes

##==##
<!-- .slide: class="with-code consolas" -->

# Authentification avec stockage: exemple de règles

Règle pour accéder au fichier seulement si l'utilisateur est authentifié

```js
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true
      allow write: if request.auth != null 
    }
  }
}
```

##==##
<!-- .slide: class="with-code consolas" -->

# Authentification avec stockage: exemple de règles

Règle pour accéder au fichier correspondant à l'utilisateur UUID spécifique

```js
service firebase.storage {
  match /b/{bucket}/o {
   match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

##==##
<!-- .slide: class="exercice" -->

# Exercice 5: rajouter l'auth avec le stockage

## Lab 5

<br>

1. Rajouter la configuration de l’authentification
2. Autoriser qu'un utilisateur authentifié de pouvoir changer la photo du chat


<br>

### dossier: labs/05-auth-stockage

Notes:

- Faire l'exercice
