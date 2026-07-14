---
title: Kubernetes à double cluster sur AWS
tagline: Cluster EKS de production + cluster de test auto-géré sur EC2 avec CI/CD complet, supervision et gestion des secrets chez DEVOPRO.
status: completed
featured: true
tags:
  [
    Kubernetes,
    AWS EKS,
    GitLab CI/CD,
    Ansible,
    Prometheus,
    Grafana,
    ELK Stack,
    Trivy,
    SonarQube,
  ]
stack:
  [
    Kubernetes,
    AWS EKS,
    EC2,
    GitLab CI/CD,
    Ansible,
    Prometheus,
    Grafana,
    Elasticsearch,
    Logstash,
    Kibana,
    NGINX Ingress,
    MetalLB,
    Let's Encrypt,
    SonarQube,
    Trivy,
    AWS Secrets Manager,
  ]
metrics:
  - { value: '60%', label: 'réduction du temps de déploiement' }
  - { value: '2', label: 'clusters gérés' }
  - { value: '3', label: 'environnements (dev/test/prod)' }

coverImage: /images/dualcover.png
screenshots:
  - {
      src: /images/AWS-architect.png,
      caption: "Architecture de l'infrastructure",
    }
  - {
      src: /images/grafdash.png,
      caption: 'Tableau de bord Grafana — métriques inter-clusters',
    }
  - { src: /images/kubectlcommand.png, caption: 'Exemple de commande kubectl' }
repoUrl:
demoUrl:
---

## Vue d'ensemble

Chez DEVOPRO (févr. - oct. 2025), j'ai conçu et exploité de bout en bout un environnement Kubernetes double : un **cluster EKS de production** sur AWS et un **cluster auto-géré sur EC2** utilisé pour le staging et les tests d'intégration. Les deux clusters hébergeaient CoachConnect, une application web full-stack avec frontend Angular et backend Spring Boot.

Le système couvre tout le cycle logiciel — de l'envoi d'une branche feature par un développeur jusqu'au déploiement progressif sans interruption en production, en passant par des contrôles de qualité automatisés.

## Architecture d'infrastructure

L'environnement de production tourne sur **AWS EKS** avec des nœuds de travail provisionnés via des groupes de nœuds managés. Le cluster de test fonctionne avec **Kubernetes géré par kubeadm sur des instances EC2**, initialisé automatiquement via les playbooks Ansible que j'ai écrits — ce qui permet une reprise rapide du cluster et une montée en charge horizontale des nœuds sans intervention manuelle.

Le trafic d'entrée est géré par **NGINX Ingress Controller** et **MetalLB** pour l'attribution des IP sur le cluster de test, tandis qu'un AWS Load Balancer dessert EKS. **Let's Encrypt** automatise le provisionnement des certificats TLS pour tous les services via cert-manager.

## Pipeline CI/CD

Le pipeline GitLab CI/CD applique un **workflow multi-branches** strict : les branches feature ciblent l'environnement dev, `main` cible les tests, et les versions taguées sont promues en production. Cela a réduit le temps de déploiement de 60 % par rapport au processus manuel précédent.

Chaque exécution du pipeline comprend :

- **Build** — compilation Maven / image Docker avec cache de couches
- **SAST** — analyse statique SonarQube avec contrôle strict du quality gate
- **Scan de conteneur** — Trivy inspecte l'image pour les CVE avant le push
- **Push** — l'image est poussée dans le registre Docker

## Observabilité

La supervision repose sur une **architecture Prometheus hybride** : une instance Prometheus tourne dans EKS et envoie ses métriques vers une instance Grafana centralisée sur le cluster de test, accessible via le DNS interne AWS. Cela fournit une vue unifiée sur les deux environnements.

L'agrégation des logs utilise l'**ELK Stack** (Elasticsearch, Logstash, Kibana) déployé sur le cluster de test, avec collecte des logs des deux environnements via des DaemonSets Filebeat.

## Gestion des secrets

Les identifiants sont gérés à trois niveaux :

- **Variables GitLab CI** — secrets liés au pipeline (identifiants du registre, kubeconfig)
- **AWS Secrets Manager** — secrets applicatifs injectés à l'exécution via le Secrets Store CSI Driver et IRSA
