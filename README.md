# MEANCommerce-Starter

Une base de projet e-commerce complète utilisant la stack **MEAN** : MongoDB, Express.js, Angular, et Node.js. Ce starter-kit permet de lancer rapidement une application web e-commerce moderne, sécurisée et évolutive.

## Fonctionnalités principales

- Authentification et gestion des utilisateurs (avec rôles)
- Gestion du catalogue produits (CRUD)
- Panier d’achat et gestion des commandes
- Interface d’administration
- APIs RESTful sécurisées (JWT)
- Architecture modulaire et scalable

## Structure du projet

```
MEANCommerce-Starter/
│
├── backend/         # Serveur Node.js/Express (API, modèles, contrôleurs)
│
├── frontend/        # Application Angular (UI, services, composants)
│
├── package.json     # Dépendances backend
├── README.md        # Documentation du projet
└── ...
```

## Prérequis

- Node.js >= 18.x
- MongoDB >= 6.x
- Angular CLI (installé globalement) : `npm install -g @angular/cli`

## Démarrage rapide

1. **Cloner le dépôt**
    ```sh
    git clone https://github.com/ChedlyRebai/MEANCommerce-Starter.git
    cd MEANCommerce-Starter
    ```

2. **Installation du backend**
    ```sh
    cd backend
    npm install
    ```

3. **Configuration du backend**
    - Copier `.env.example` vers `.env` et renseigner les variables d’environnement (DB, JWT, etc.)

4. **Lancer le backend**
    ```sh
    npm run dev
    ```
    Le serveur API écoute par défaut sur `http://localhost:3000`.

5. **Installation et démarrage du frontend**
    ```sh
    cd ../frontend
    npm install
    ng serve
    ```
    L’application Angular sera accessible sur `http://localhost:4200`.

## Personnalisation

- **Ajoutez vos modèles, routes, et logique métier dans le dossier `backend/`.**
- **Modifiez le frontend Angular (`frontend/`) pour adapter l’UI à vos besoins.**

## Bonnes pratiques

- Utiliser des variables d’environnement pour les clés sensibles.
- Respecter la séparation des responsabilités entre frontend et backend.
- Mettre à jour régulièrement les dépendances.

## Contribution

Les contributions sont les bienvenues !  
Merci de créer une issue ou une pull request pour proposer des améliorations.

## Licence

Ce projet est publié sous la licence MIT.

---

**Auteur** : [Chedly Rebai](https://github.com/ChedlyRebai)
