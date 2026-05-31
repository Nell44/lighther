# LightHer — Prototype web mobile-first

[![Accéder au prototype](https://img.shields.io/badge/Prototype-GitHub%20Pages-1A6B3A)](https://nell44.github.io/lighther/)

**Équipe 5D — EFREI Paris — Projet Transverses TI350/TI450 — Semestre 4**

---

## Positionnement du prototype

Le cahier des charges présente la vision cible de LightHer comme application mobile de sécurité nocturne pour femmes.

Le livrable TI450 est un **prototype web mobile-first**, accessible depuis navigateur, qui démontre les fonctionnalités principales : authentification, carte collaborative, signalement, score de sécurité, routage démonstratif, SOS et profil utilisateur.

Certaines fonctionnalités critiques sont simulées : vérification d'identité, notifications push, transmission municipale, recalcul automatique d'itinéraire, partage continu de localisation et envoi automatique de SMS.

---

## Stack utilisée

- **HTML, CSS et JavaScript vanilla** — aucun framework, aucune installation requise
- **Firebase Auth** — connexion / inscription (email + mot de passe)
- **Firebase Firestore** — signalements et données utilisateur
- **Leaflet + OpenStreetMap** — carte interactive (CDN gratuit, 0 inscription)
- **Leaflet Routing Machine + OSRM** — itinéraires (CDN gratuit, open source)
- **Nominatim (OpenStreetMap)** — recherche d'adresse
- **GitHub Pages** — hébergement gratuit

---

## Lancer le projet

Ouvrir directement les fichiers HTML dans un navigateur moderne, ou servir le dossier avec un serveur statique local (nécessaire pour les imports de modules ES).

Avec VS Code : clic droit sur `index.html` → **Open with Live Server**

Ou en ligne de commande :

```bash
npx serve .
```

Pages principales :

| Fichier | Description |
|---|---|
| `auth.html` | Connexion / inscription |
| `index.html` | Carte collaborative |
| `signalement.html` | Création d'un signalement |
| `itineraire.html` | Itinéraire court vs itinéraire sûr |
| `sos.html` | SOS et proches de confiance |
| `profil.html` | Profil, statut de vérification et déconnexion |

---

## Fonctionnalités réelles

- Connexion et inscription avec Firebase Auth
- Signalements géolocalisés sauvegardés dans Firestore
- Score de sécurité SS calculé à partir de l'éclairage, l'affluence, les incidents et le sentiment
- Carte Leaflet avec zones colorées vert / orange / rouge / gris
- Popups détaillées avec score, type, critères et fraîcheur
- Routage avec une route courte et une route plus sûre (comparaison)
- Recherche de destination avec résultats Nominatim
- SOS web avec SMS prérempli et position GPS si disponible
- Proches de confiance sauvegardés dans Firebase (fallback `localStorage`)
- Page profil avec email, statut prototype, proches et déconnexion

---

## Fonctionnalités simulées

| Fonctionnalité | État dans le prototype |
|---|---|
| Vérification d'identité (pièce + selfie) | Simulation flux UX — aucun SDK Onfido/Yoti réel |
| Suppression RGPD des pièces | Expliquée dans l'interface — aucun fichier stocké |
| Ticket municipal (lampadaire / obstacle) | Statut simulé — aucune API mairie appelée |
| Notification incident critique | Bannière visuelle — pas de notification push réelle |
| Recalcul automatique d'itinéraire | Simulation déclenchée manuellement par bouton |
| Partage continu de localisation | Non réalisé — SMS ponctuel prérempli uniquement |

---

## Scénario de démonstration soutenance

1. Ouvrir `auth.html` — montrer l'inscription et la vérification d'identité simulée
2. Aller sur `index.html` — montrer la carte, la légende et les popups
3. Si la carte est vide, montrer que des données locales de démonstration apparaissent
4. Ouvrir `signalement.html` — créer un signalement `Incident / danger`
5. Retourner sur `index.html` — montrer l'alerte visuelle incident critique
6. Créer un signalement `Lampadaire cassé` — montrer le ticket municipal simulé
7. Ouvrir `itineraire.html` — saisir une destination, comparer itinéraire sûr et court
8. Cliquer sur **Simuler un incident critique à moins de 200 m** — montrer le recalcul prototype
9. Ouvrir `sos.html` — ajouter un proche, partager la position, déclencher le SOS
10. Ouvrir `profil.html` — montrer le statut et la déconnexion

---

## Checklist de tests manuels

### EF01 — Carte collaborative
- [ ] La carte se charge en moins de 3 secondes
- [ ] La légende vert/orange/rouge/gris est visible
- [ ] Au moins 3 zones sont visibles (Firestore ou fallback local)
- [ ] Les popups affichent score, type, critères et fraîcheur
- [ ] Un incident critique affiche une bannière visuelle

### EF02 — Signalement en moins de 30 secondes
- [ ] La page `signalement.html` est protégée (redirection si non connectée)
- [ ] Le formulaire affiche type, éclairage, affluence, incidents et sentiment
- [ ] Le score SS se recalcule en temps réel
- [ ] Le signalement est envoyé dans Firestore
- [ ] La carte affiche le nouveau signalement

### EF05 / EF06 — Routage sécurisé
- [ ] Une destination peut être recherchée
- [ ] L'itinéraire court et l'itinéraire sûr s'affichent
- [ ] Les deux choix affichent durée, distance, SS moyen et zones rouges
- [ ] L'itinéraire sûr évite les zones critiques si possible
- [ ] La simulation de recalcul modifie l'itinéraire sûr

### EF08 / EF09 — SOS
- [ ] Un proche de confiance peut être ajouté
- [ ] Le partage ponctuel ouvre un SMS prérempli avec GPS
- [ ] Le bouton SOS affiche un compte à rebours et prépare le message
- [ ] Le message contient la position GPS si disponible
- [ ] L'interface indique clairement que le SMS est prérempli et doit être envoyé manuellement

---

## Limites connues du prototype web

- Pas d'application native Android/iOS publiée sur store
- Pas de notification push réelle
- Pas de SMS envoyé automatiquement depuis le navigateur
- Pas de vraie vérification biométrique
- Pas d'API municipale réelle (Open311)
- Pas de cache hors-ligne
- Le routage sûr est une approximation démonstrative, pas un moteur de pondération complet
- Les règles Firestore doivent être configurées côté Firebase pour une mise en production

---

## Équipe

| Membre | Module principal |
|---|---|
| Nelly KAMDEM | Chef de projet, Firebase, score.js, intégration |
| Sélène AKDOGAN | Design, style.css, maquette Figma |
| Ndeye Binta TOURÉ | Module F1 — Authentification |
| Victor VAURES | Module F2 — Carte Leaflet |
| Océanne TSANE NKAMTCHOUM | Module F3 — Itinéraire |
| Andrea GRAUS | Module F4 — SOS |
| Ndeye Coumba KANE | Module F5 — Signalement |
