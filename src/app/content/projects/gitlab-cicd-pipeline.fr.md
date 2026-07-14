---
title: Pipeline GitLab CI/CD
tagline: Pipeline multi-étapes avec SAST, scan de conteneurs et déploiements Kubernetes sans interruption.
status: live
featured: false
tags: [GitLab CI/CD, Docker, SonarQube, Trivy, Kubernetes, Nexus]
stack:
  [
    GitLab CI/CD,
    Docker,
    SonarQube,
    Trivy,
    Kubernetes,
    Helm,
    Nexus Repository,
    Bash,
  ]
metrics:
  - { value: '60%', label: 'déploiements plus rapides' }
  - { value: '3', label: 'étapes du pipeline' }
  - { value: '0', label: 'CVE critiques livrées' }
coverImage: /images/cicd.png
screenshots:
  - {
      src: /images/pipelinegeneral.png,
      caption: "Vue d'ensemble des étapes du pipeline",
    }
  - { src: /images/Sonarq.png, caption: 'Résultats du quality gate SonarQube' }
  - { src: /images/trivyexamp.png, caption: 'Rapport de vulnérabilités Trivy' }
repoUrl:
demoUrl:
---

## Vue d'ensemble

Ce pipeline a été conçu et implémenté pendant mon stage chez DEVOPRO comme colonne vertébrale de livraison de la plateforme CoachConnect. Il s'exécute sur un GitLab Runner auto-hébergé et applique des contrôles de qualité, de sécurité et de déploiement à chaque push — sans aucune étape manuelle entre le commit d'un développeur et un pod en production dans Kubernetes.

## Étapes du pipeline

**Build** — Le pipeline démarre avec une compilation Maven dans un exécuteur Docker-in-Docker. Le cache de couches est configuré pour garder les temps de build sous 3 minutes. L'artifact obtenu est emballé dans une image Docker à l'aide d'un `Dockerfile` multi-étapes afin de réduire la taille finale.

**SAST avec SonarQube** — Chaque build passe par une analyse statique SonarQube. Le quality gate bloque la promotion si la couverture passe sous le seuil défini ou si de nouveaux problèmes critiques/bloquants apparaissent. Les résultats sont renvoyés dans la merge request.

**Scan de conteneur avec Trivy** — Trivy analyse l'image construite pour détecter les CVE connues avant son push vers le registre. L'étape est configurée pour échouer sur les findings de sévérité `CRITICAL`, empêchant les images vulnérables d'atteindre n'importe quel environnement.

**Push vers le registre Docker** — Les images validées sont taguées avec le Git SHA puis poussées vers un registre Docker. Cela garantit une traçabilité complète entre une image déployée et le commit exact qui l'a produite.

**Déploiement** — L'étape de déploiement exécute `kubectl apply -f` sur le cluster cible. Kubernetes effectue une mise à jour progressive : les nouveaux pods doivent réussir les readiness probes avant que les anciens ne soient arrêtés, ce qui assure une absence d'interruption.

## Stratégie de branches

Le pipeline utilise le mot-clé `rules` de GitLab pour imposer la cible d'environnement :

- Les branches feature → déploiement dans le namespace `dev`
- La branche `main` → déploiement dans le namespace `test`
- Les tags Git (`v*`) → déploiement dans le namespace `prod`, avec une validation manuelle

Cela empêche tout code non relu d'atteindre la production tout en gardant les environnements dev et test constamment à jour.
