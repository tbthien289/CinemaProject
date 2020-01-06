# Cinema Project - E-com

Auteur: TRAN Bao Thien - uapv1900181 - M2 ILSEN CLA

## OBJECTIF
Ce projet se situe dans le contexte de la gestion des films et gestion de réservation de 
billets de cinéma. À côte de front-end, ce projet devra comporter une web « responsive » pour 
la  réservation de billets de cinéma et une application web native pour supporter mobile (ReactJS). En 
outre, on a besoin une REST API à côte de back-end (Django rest framework + MongoDB). 
 
L’objectif de ce projet est le développement de l’application avec le code respecte au 
mieux les bonnes pratiques. En outre, une certaine organisation pour garantir tous les cas 
d’utilisation via outil Trello. Github est utilisé pour gérer les versions du code. Enfin, les tests 
unitaires sont également utilisés pour tester automatiquement le  programme (front-end et 
back-end).

## PROJET D`EXECUTION

## Back-end
`python manage.py runserver` pour lancer

## Front-end
### Installation les bibliothèques
`npm i`

### Serveur de développement

Exécuter `cd Frontend` après `npm start` pour un serveur de développement

### Build

Exécuter `npm run build` pour construire le projet et workbox (service worker). Les artefacts de construction seront stockés dans le répertoire `dist/Frontend`.

### Start front-end

Exécuter `npm start` pour lancer

### Bibliothèque d'utilisation
- `react-bootstrap` pour css composant
- `redux-thunk` pour redux
- `rest_framework_mongoengine`, `mongoengine` pour connexion MongoDB
