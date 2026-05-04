# LightHer - Prototype web

LightHer est un prototype étudiant de sécurité nocturne pour démontrer une carte collaborative, le signalement citoyen, un routage plus sûr et une alerte SOS.

## Stack utilisée

- HTML, CSS et JavaScript vanilla
- Firebase Auth pour connexion / inscription
- Firebase Firestore pour les signalements et quelques données utilisateur
- Leaflet + OpenStreetMap pour la carte
- Leaflet Routing Machine pour les itinéraires
- Nominatim OpenStreetMap pour la recherche d'adresse

## Lancer le projet

Ouvrir directement les fichiers HTML dans un navigateur moderne, ou servir le dossier avec un serveur statique local.

Exemple simple :

```bash
npx serve .
```

Pages principales :

- `auth.html` : connexion / inscription
- `index.html` : carte collaborative
- `signalement.html` : création d'un signalement
- `itineraire.html` : itinéraire court vs itinéraire sûr
- `sos.html` : SOS et proches de confiance
- `profil.html` : profil, statut de vérification et déconnexion

## Fonctionnalités réelles

- Connexion et inscription avec Firebase Auth
- Signalements géolocalisés dans Firestore
- Score de sécurité SS calculé avec éclairage, affluence, incidents et sentiment
- Carte Leaflet avec couleurs vert/orange/rouge/gris
- Popups détaillées avec score, critères, type et fraîcheur
- Routage avec une route courte et une route sûre
- Recherche de destination avec plusieurs résultats Nominatim possibles
- SOS web avec SMS pré-rempli et position GPS si disponible
- Proches de confiance sauvegardés dans Firebase avec fallback `localStorage`
- Page profil avec email, statut prototype, proches et déconnexion

## Fonctionnalités simulées

- Vérification d'identité pièce d'identité + selfie : simulation prototype, aucun SDK Onfido/Yoti réel
- Suppression RGPD des pièces : expliquée dans l'interface, aucun fichier n'est stocké
- Ticket municipal pour lampadaire cassé / obstacle : statut simulé, aucune API mairie appelée
- Notification incident critique : bannière visuelle, pas de vraie notification push
- Recalcul automatique d'itinéraire : simulation déclenchée par bouton
- Partage continu de localisation : simulation web, pas de tracking arrière-plan réel

## Scénario de démonstration soutenance

1. Ouvrir `auth.html`, montrer l'inscription et la vérification d'identité simulée.
2. Aller sur `index.html`, montrer la carte, la légende et les popups.
3. Si la carte est vide, montrer que des données locales de démonstration apparaissent.
4. Ouvrir `signalement.html`, créer un signalement `Incident / danger`.
5. Retourner sur `index.html`, montrer l'alerte visuelle incident critique.
6. Créer un signalement `Lampadaire cassé` ou `Obstacle`, puis montrer le ticket municipal simulé.
7. Ouvrir `itineraire.html`, saisir une destination, comparer itinéraire sûr et court.
8. Cliquer sur `Simuler un incident critique à moins de 200 m` pour montrer le recalcul prototype.
9. Ouvrir `sos.html`, ajouter un proche, partager la position puis déclencher le SOS.
10. Ouvrir `profil.html` pour montrer le statut et la déconnexion.

## Checklist de tests manuels

### EF01 - Carte collaborative

- [ ] La carte se charge.
- [ ] La légende vert/orange/rouge/gris est visible.
- [ ] Au moins trois zones sont visibles grâce à Firestore ou au fallback local.
- [ ] Les popups affichent score, type, critères et fraîcheur.
- [ ] Un incident critique affiche une bannière visuelle.

### EF02 - Signalement en moins de 30 secondes

- [ ] La page `signalement.html` est protégée par connexion.
- [ ] Le formulaire affiche type, éclairage, affluence, incidents et sentiment.
- [ ] Le score SS se met à jour.
- [ ] Le signalement est envoyé dans Firestore.
- [ ] La carte affiche le nouveau signalement.

### EF05 / EF06 - Routage sécurisé

- [ ] Une destination peut être recherchée.
- [ ] L'itinéraire court et l'itinéraire sûr s'affichent.
- [ ] Les deux choix affichent durée, distance, SS moyen et zones rouges.
- [ ] L'itinéraire sûr évite les zones critiques quand elles sont proches du trajet.
- [ ] La simulation de recalcul modifie l'itinéraire sûr.

### EF08 / EF09 - SOS

- [ ] Un proche de confiance peut être ajouté.
- [ ] Le partage ponctuel ouvre un SMS pré-rempli.
- [ ] Le bouton SOS affiche un compte à rebours et prépare le message.
- [ ] Le message contient la position GPS si disponible.
- [ ] L'interface indique clairement que le SMS est pré-rempli et doit être envoyé manuellement.

## Limites connues du prototype web

- Pas d'application native Android/iOS.
- Pas de notification push réelle.
- Pas de SMS envoyé automatiquement depuis le navigateur.
- Pas de vraie vérification biométrique.
- Pas d'API municipale réelle.
- Pas de cache hors-ligne.
- Le routage sûr est une approximation démonstrative, pas un moteur de pondération complet.
- Les règles Firestore doivent être configurées côté Firebase pour une vraie mise en production.
