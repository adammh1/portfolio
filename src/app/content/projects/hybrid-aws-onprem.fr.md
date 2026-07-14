---
title: Infrastructure hybride AWS / On-Premises
tagline: Solution cloud hybride conçue chez Mobelite — automatisation Ansible, CI GitHub Actions et observabilité Prometheus/Grafana.
status: completed
featured: false
tags: [Ansible, AWS, Kubernetes, GitHub Actions, Prometheus, Grafana]
stack:
  [
    AWS EC2,
    Kubernetes,
    Ansible,
    GitHub Actions,
    Prometheus,
    Grafana,
    Docker,
    Bash,
  ]
metrics:
  - { value: '70%', label: 'réduction des opérations manuelles' }
  - { value: '3+', label: 'playbooks Ansible écrits' }
  - { value: '2', label: 'environnements unifiés' }
coverImage: /images/cloudar.png
screenshots:
  - {
      src: /images/globA.png,
      caption: "Schéma de l'architecture réseau hybride",
    }
  - {
      src: /images/gar.png,
      caption: 'Tableau de bord de supervision Prometheus + Grafana',
    }
  - {
      src: /images/ans.png,
      caption: "Sortie d'exécution d'un playbook Ansible",
    }
  - {
      src: /images/CIR.png,
      caption: "Vue d'ensemble de l'exécution du pipeline",
    }
repoUrl:
demoUrl:
---

## Vue d'ensemble

Pendant mon stage chez Mobelite (févr. - juin 2023), j'ai conçu et déployé une architecture cloud hybride reliant un environnement serveur on-premises à AWS. L'objectif était d'unifier les opérations entre les deux environnements — supervision partagée, gestion de configuration cohérente et CI/CD automatisé — sans tout migrer vers le cloud d'un seul coup.

## Automatisation Ansible

J'ai écrit des **playbooks Ansible** couvrant les tâches récurrentes : installation de paquets, provisioning des nœuds Kubernetes, configuration des services et gestion des utilisateurs. Avant l'automatisation, ces tâches nécessitaient des sessions SSH manuelles sur plusieurs hôtes. Après, elles s'exécutent en parallèle depuis un nœud de contrôle unique.

Les playbooks ont réduit l'effort opérationnel manuel de **70 %** et ont rendu l'environnement entièrement reproductible — l'ajout d'un nouveau nœud se résume à une seule commande `ansible-playbook`.

## Kubernetes on-premises

Les clusters Kubernetes locaux gèrent les déploiements de workloads conteneurisés côté on-premises. Les déploiements sont déclenchés via des workflows GitHub Actions lancés à chaque push sur `main`, qui construisent les images Docker et les déploient progressivement vers le cluster EKS.

## Observabilité

**Prometheus** collecte les métriques des nœuds AWS et on-premises. **Grafana** fournit un tableau de bord unifié avec des alertes configurées sur les seuils CPU, mémoire et disque. L'équipe a ainsi obtenu pour la première fois une visibilité en temps réel sur les deux environnements depuis une seule interface.
