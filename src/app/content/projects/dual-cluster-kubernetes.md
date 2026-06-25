---
title: Dual-Cluster Kubernetes on AWS
tagline: Production EKS cluster + self-managed EC2 test cluster with full CI/CD, monitoring, and secrets management at DEVOPRO.
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
  - { value: '60%', label: 'deployment time reduction' }
  - { value: '2', label: 'clusters managed' }
  - { value: '3', label: 'environments (dev/test/prod)' }

coverImage: /images/dualcover.png
screenshots:
  - { src: /images/AWS-architect.png, caption: 'Infrastructure architecture' }
  - {
      src: /images/grafdash.png,
      caption: 'Grafana dashboard — cross-cluster metrics',
    }
  - { src: /images/kubectlcommand.png, caption: 'kubectl command example' }
repoUrl:
demoUrl:
---

## Overview

At DEVOPRO (Feb–Oct 2025), I architected and operated a dual Kubernetes environment from the ground up: a **production EKS cluster** on AWS and a **self-managed cluster on EC2** used for staging and integration testing. Both clusters served the CoachConnect coaching platform, a full-stack web application with Angular frontend and Spring Boot backend.

The system handles the complete software lifecycle — from a developer pushing code to a feature branch, through automated quality gates, to a zero-downtime rolling deployment in production.

## Infrastructure Architecture

The production environment runs on **AWS EKS** with worker nodes provisioned via managed node groups. The test cluster runs **kubeadm-managed Kubernetes on EC2 instances**, bootstrapped automatically via Ansible playbooks I wrote — enabling rapid cluster recovery and horizontal scaling of worker nodes without manual steps.

Ingress traffic is handled by **NGINX Ingress Controller** backed by **MetalLB** for IP address management on the test cluster, and by an AWS Load Balancer on EKS. **Let's Encrypt** automates TLS certificate provisioning for all services via cert-manager.

## CI/CD Pipeline

The GitLab CI/CD pipeline implements a strict **multi-branch workflow**: feature branches target the dev environment, `main` targets test, and tagged releases promote to production. This reduced deployment time by 60% compared to the previous manual process.

Each pipeline run executes:

- **Build** — Maven/Docker image build with layer caching
- **SAST** — SonarQube static analysis with quality gate enforcement
- **Container scan** — Trivy scans the image for CVEs before it is pushed
- **Push** — Image pushed to the Docker registry

## Observability

Monitoring uses a **hybrid Prometheus architecture**: a Prometheus instance runs inside EKS and remote-writes metrics to a central Grafana instance on the test cluster, reachable via AWS internal DNS. This gives a single pane of glass across both environments.

Log aggregation uses the **ELK Stack** (Elasticsearch, Logstash, Kibana) deployed on the test cluster, collecting logs from both environments via Filebeat DaemonSets.

## Secrets Management

Credentials are handled at three layers:

- **GitLab CI Variables** — pipeline-scoped secrets (registry credentials, kubeconfig)
- **AWS Secrets Manager** — application secrets injected at runtime via the Secrets Store CSI Driver and IRSA
