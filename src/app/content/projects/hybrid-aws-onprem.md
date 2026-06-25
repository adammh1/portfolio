---
title: Hybrid AWS / On-Premises Infrastructure
tagline: Designed a hybrid cloud solution  at Mobelite — Ansible automation, GitHub Actions CI, and Prometheus/Grafana observability.
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
  - { value: '70%', label: 'reduction in manual ops' }
  - { value: '3+', label: 'Ansible playbooks written' }
  - { value: '2', label: 'environments unified' }
coverImage: /images/cloudar.png
screenshots:
  - { src: /images/globA.png, caption: 'Hybrid network architecture diagram' }
  - {
      src: /images/gar.png,
      caption: 'Prometheus + Grafana monitoring dashboard',
    }
  - { src: /images/ans.png, caption: 'Ansible playbook run output' }
  - { src: /images/CIR.png, caption: 'Pipeline execution overview' }
repoUrl:
demoUrl:
---

## Overview

During my internship at Mobelite (Feb–Jun 2023), I designed and deployed a hybrid cloud architecture that bridged an on-premises server environment with AWS. The goal was to unify operations across both environments — shared monitoring, consistent configuration management, and automated CI/CD — without migrating everything to the cloud at once.

## Ansible Automation

I wrote **Ansible playbooks** covering routine tasks: package installation, Kubernetes node provisioning, service configuration, and user management. Before automation, these tasks required manual SSH sessions across multiple hosts. After, they run in parallel from a single control node.

The playbooks reduced manual operational effort by **70%** and made the environment fully reproducible — spinning up a new node is a single `ansible-playbook` run.

## Kubernetes on Premises

Local Kubernetes clusters handle containerized workload deployments on the on-premises side. Deployments are triggered via GitHub Actions workflows that run on push to `main`, building Docker images and rolling them out to the EKS cluster.

## Observability

**Prometheus** scrapes metrics from both AWS and on-premises nodes. **Grafana** provides a unified dashboard with alerts configured for CPU, memory, and disk thresholds. This gave the team real-time visibility across both environments from a single interface for the first time.
