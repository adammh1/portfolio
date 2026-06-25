---
title: CoachConnect Platform
tagline: Full-stack coaching and booking web app — Angular frontend, Spring Boot backend, deployed end-to-end with Docker and GitLab CI/CD.
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
  - { value: '4', label: 'user roles (coach / client/admin/club manager)' }
  - { value: '40%', label: 'Booking time reduction' }
  - { value: '50%', label: "Coach's client management effort reduction" }
coverImage: /images/webcover.png
screenshots:
  - {
      src: /images/coach dash.png,
      caption: 'Coach dashboard — service listings',
    }
  - { src: /images/clubmang.png, caption: 'Club management interface' }
  - { src: /images/Adminmang.png, caption: 'Admin panel overview' }
repoUrl:
demoUrl:
---

## Overview

CoachConnect is the application I built and operated the infrastructure for during my internship at DEVOPRO. It is a booking web platform that connects coaches with clients — coaches post their service offerings, clients browse and book sessions.

My role covered the full stack: frontend, backend, database schema, and the entire DevOps layer including containerization, CI/CD pipeline, and production deployment on Kubernetes.

## Frontend

The frontend is built with **Angular** and TypeScript. It implements two distinct user experiences behind a shared login: a coach dashboard for managing service listings and viewing bookings, and a client interface for browsing coaches and booking sessions. The UI is fully responsive.

Authentication uses **JWT tokens** stored in `localStorage`, with Angular route guards enforcing role-based access control (`COACH` vs `CLIENT` roles) on protected views.

## Backend

The backend is a **Spring Boot** application scaffolded with **JHipster**, which provided the initial project structure, entity generation, and security configuration. The REST API follows standard resource conventions and is documented with OpenAPI.

**PostgreSQL** handles persistence with a relational schema optimized for booking queries — indexed on coach ID, time slot, and availability status to keep listing and booking reads fast.

## DevOps Layer

The application runs in Docker containers orchestrated by Kubernetes (see the [Dual-Cluster Kubernetes](/projects/dual-cluster-kubernetes) project for the full infrastructure detail). The CI/CD pipeline handles building, scanning, and deploying on every push through the multi-stage GitLab pipeline.

Secrets (database credentials, JWT signing key) are injected at runtime via **AWS Secrets Manager** through the Secrets Store CSI Driver, keeping them out of the image and out of version control entirely.
