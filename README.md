## Démarrer le projet

### Etape 0 - Prérequis

Pour le bon fonctionnement et le lancement du projet, il est important d'avoir
les prérequis suivants :
- SGBD PostgreSQL
- NodeJS (npm 8.19.2+ et node v18.10.0+)

---

### Etape 1 - Monter la base de données

Afin d'utiliser et stocker les données du site, il va falloir monter une base de donnée.
Pour cela, créer une base de donnée qui se nomme `zoo_db` dans un SGBD PostgreSQL.
/!\IMPORTANT/!\ Pensez bien à changer les informations de connexion dans le fichier serveur.js pour bien vous connecter à la base de données.

---

### Etape 2 - Initialiser les tables

Pour créer les tables nécessaires, exécutez le script SQL `initialize_tables.sql` dans
l'environnement de la base `zoo_db`.

---

### Etape 3 - Initialiser les données minimales

Enfin, pour avoir un jeu de données suffisants, exécutez dans ce même environnement de
base le script SQL `initialize_datas.sql`.



## Auteurs

* [Clément BOUQUET](https://github.com/fasory)
* [Samuel GOUBEAU](https://github.com/Strikza)
* [Maxime LEBRETON](https://github.com/Aelysya)