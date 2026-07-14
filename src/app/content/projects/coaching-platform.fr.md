---
title: Plateforme CoachConnect
tagline: Application web complète de coaching et de réservation — frontend Angular, backend Spring Boot, déployée de bout en bout avec Docker et GitLab CI/CD.
status: live
featured: false
tags: [Angular, Spring Boot, PostgreSQL, Docker, GitLab CI/CD, JWT]
stack:
  [
    Angular,
    TypeScript,
    Spring Boot,
    JHipster,
    PostgreSQL,
    Docker,
    Docker Compose,
    GitLab CI/CD,
    JWT,
    AWS Secrets Manager,
  ]
metrics:
  - {
      value: '4',
      label: 'rôles utilisateurs (coach / client/admin/gestionnaire de club)',
    }
  - { value: '40%', label: 'réduction du temps de réservation' }
  - {
      value: '50%',
      label: "réduction de l'effort de gestion des clients pour les coachs",
    }
coverImage: /images/webcover.png
screenshots:
  - {
      src: /images/coach dash.png,
      caption: 'Tableau de bord coach — listes de services',
    }
  - { src: /images/clubmang.png, caption: 'Interface de gestion du club' }
  - {
      src: /images/Adminmang.png,
      caption: "Vue d'ensemble du panneau d'administration",
    }
repoUrl:
demoUrl:
---

## Vue d'ensemble

CoachConnect est l'application que j'ai conçue et dont j'ai exploité l'infrastructure pendant mon stage chez DEVOPRO. C'est une plateforme web de réservation qui met en relation des coachs et des clients : les coachs publient leurs offres, les clients consultent les services et réservent des séances.

Mon rôle couvrait toute la chaîne : frontend, backend, schéma de base de données et toute la couche DevOps, y compris la conteneurisation, le pipeline CI/CD et le déploiement en production sur Kubernetes.

## Frontend

Le frontend est construit avec **Angular** et TypeScript. Il propose deux expériences distinctes derrière une authentification commune : un tableau de bord coach pour gérer les services et suivre les réservations, et une interface client pour parcourir les coachs et réserver des séances. L'interface est entièrement responsive.

L'authentification utilise des **jetons JWT** stockés dans `localStorage`, avec des guards Angular qui imposent un contrôle d'accès basé sur les rôles (`COACH` vs `CLIENT`) sur les vues protégées.

## Backend

Le backend est une application **Spring Boot** initialement scaffoldée avec **JHipster**, qui a fourni la structure du projet, la génération des entités et la configuration de sécurité. L'API REST suit les conventions classiques des ressources et est documentée avec OpenAPI.

**PostgreSQL** gère la persistance avec un schéma relationnel optimisé pour les requêtes de réservation — indexé sur l'identifiant du coach, le créneau horaire et l'état de disponibilité afin de garder les lectures rapides.

## Couche DevOps

L'application s'exécute dans des conteneurs Docker orchestrés par Kubernetes (voir le projet [Dual-Cluster Kubernetes](/projects/dual-cluster-kubernetes) pour les détails complets de l'infrastructure). Le pipeline CI/CD gère la construction, l'analyse et le déploiement à chaque push via le pipeline GitLab multi-étapes.

Les secrets (identifiants de base de données, clé de signature JWT) sont injectés à l'exécution via **AWS Secrets Manager** avec le Secrets Store CSI Driver, ce qui les exclut de l'image et du contrôle de version.
