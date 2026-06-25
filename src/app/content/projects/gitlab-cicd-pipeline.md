---
title: GitLab CI/CD Pipeline
tagline: Multi-stage pipeline with SAST, container scanning, and zero-downtime Kubernetes deployments.
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
  - { value: '60%', label: 'faster deployments' }
  - { value: '3', label: 'pipeline stages' }
  - { value: '0', label: 'critical CVEs shipped' }
coverImage: /images/cicd.png
screenshots:
  - { src: /images/pipelinegeneral.png, caption: 'Pipeline stages overview' }
  - { src: /images/Sonarq.png, caption: 'SonarQube quality gate results' }
  - { src: /images/trivyexamp.png, caption: 'Trivy vulnerability report' }
repoUrl:
demoUrl:
---

## Overview

This pipeline was designed and implemented during my internship at DEVOPRO as the delivery backbone for the CoachConnect platform. It runs on a self-hosted GitLab Runner and enforces quality, security, and deployment gates on every push — no manual steps between a developer commit and a running pod in Kubernetes.

## Pipeline Stages

**Build** — The pipeline starts with a Maven build inside a Docker-in-Docker executor. Layer caching is configured to keep build times under 3 minutes. The resulting artifact is packaged into a Docker image using a multi-stage `Dockerfile` to minimize the final image size.

**SAST with SonarQube** — Every build runs through SonarQube static analysis. The quality gate blocks promotion if code coverage drops below threshold, or if new critical/blocker issues are introduced. Results are posted back to the merge request.

**Container scan with Trivy** — Trivy scans the built image for known CVEs before it is pushed to the registry. The stage is configured to fail on `CRITICAL` severity findings, preventing vulnerable images from reaching any environment.

**Push to Docker Registry** — Approved images are tagged with the Git SHA and pushed to a Docker registry. This gives full traceability between a deployed image and the exact commit that produced it.

**Deploy** — The deployment stage runs `Kubectl apply -f` against the target cluster. Kubernetes performs an update — new pods must pass readiness probes before old ones are terminated, ensuring zero downtime.

## Branch Strategy

The pipeline uses GitLab's `rules` keyword to enforce environment targeting:

- Feature branches → deploy to `dev` namespace
- `main` branch → deploy to `test` namespace
- Git tags (`v*`) → deploy to `prod` namespace, with a manual approval gate

This prevents any unreviewed code from reaching production while keeping the dev and test environments continuously updated.
