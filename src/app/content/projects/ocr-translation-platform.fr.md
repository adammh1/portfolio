---
title: Application mobile OCR et traduction
tagline: Application Flutter multiplateforme pour extraire du texte depuis des images, le traduire en temps réel et conserver l'historique via un backend Express + MongoDB.
status: completed
featured: false

tags:
  - Flutter
  - Express.js
  - MongoDB
  - OCR
  - NLP
  - REST API

stack:
  - Flutter
  - Dart
  - Express.js
  - Node.js
  - MongoDB
  - OCR
  - Helsinki NLP
  - REST API

metrics:
  - value: '2'
    label: 'sources d’image (caméra / galerie)'

  - value: '100%'
    label: 'historique de traduction persisté'

  - value: '3'
    label: 'sprints de développement livrés'

coverImage: /images/mobcover.png

screenshots:
  - src: /images/auth.png
    caption: "Flux d'authentification utilisateur"

  - src: /images/profmag.png
    caption: 'Gestion du profil et des préférences'

  - src: /images/TRAD.png
    caption: "Interface d'extraction OCR et de traduction 1"
  - src: /images/trad2.png
    caption: "Interface d'extraction OCR et de traduction 2"
repoUrl:
demoUrl:
---

## Vue d'ensemble

L'application mobile OCR Translation est une application multiplateforme construite avec **Flutter** pour simplifier la communication multilingue directement à partir d'images.

Les utilisateurs peuvent prendre une photo ou importer une image existante, extraire le texte via OCR, le traduire dans une autre langue et conserver un historique persistant des traductions précédentes.

Contrairement à une application mobile isolée, ce projet suit une architecture client-serveur où le client Flutter communique avec un **backend Express.js** connecté à **MongoDB** pour l'authentification, la gestion du profil et le stockage des traductions.

L'objectif était de créer un flux rapide pour les utilisateurs qui manipulent souvent des documents multilingues sans avoir à faire de transcription manuelle.

## Application mobile

Le frontend a été implémenté avec **Flutter** et optimisé pour une expérience mobile-first.

Les utilisateurs peuvent :

- S'inscrire et s'authentifier de manière sécurisée
- Importer des images depuis le stockage
- Sélectionner les langues source et cible
- Consulter et gérer l'historique des traductions
- Personnaliser les informations du profil

L'interface a été conçue pour réduire au minimum le nombre d'interactions et rendre la traduction accessible en seulement quelques écrans.

## Architecture backend

Le backend a été développé avec **Express.js** et expose des endpoints REST consommés par l'application Flutter.

Les responsabilités principales du backend incluent :

- Authentification des utilisateurs
- Traitement des requêtes de traduction
- Gestion de l'historique
- Persistance du profil
- Orchestration de l'API

Le backend agit comme passerelle entre le traitement OCR, les services de traduction et les interactions mobiles.

## Couche base de données

**MongoDB** stocke les données de l'application via un modèle documentaire.

Les collections stockées incluent :

- Utilisateurs
- Historique des traductions
- Texte OCR extrait
- Métadonnées des langues
- Préférences utilisateur

L'utilisation de MongoDB a permis de stocker de manière flexible les sessions de traduction tout en gardant les données utilisateur faciles à faire évoluer.

## Flux OCR et traduction

L'application suit une pipeline de traitement simple :

1. L'utilisateur importe ou capture une image
2. L'OCR extrait le texte visible
3. Flutter envoie la requête à Express
4. La traduction est générée via Helsinki NLP
5. Les résultats sont renvoyés à l'interface mobile
6. L'historique de traduction est sauvegardé dans MongoDB

Cette architecture sépare l'interface, la logique métier et la persistance tout en conservant une expérience mobile réactive.

## Résultats clés

- Architecture complète **Flutter + Express + MongoDB**
- Extraction de texte guidée par OCR
- Flux de traduction multilingue ajouté
- Historique de traduction persistant livré
- Expérience mobile pensée pour la vitesse et la simplicité d'utilisation

Ce projet combine développement mobile, backend, OCR et NLP dans une plateforme de traduction complète de bout en bout.
