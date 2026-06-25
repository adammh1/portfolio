---
title: OCR Translation Mobile App
tagline: Cross-platform Flutter application for extracting text from images, translating it in real time, and storing translation history through an Express + MongoDB backend.

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
    label: 'image sources (camera / gallery)'

  - value: '100%'
    label: 'translation history persisted'

  - value: '3'
    label: 'development sprints delivered'

coverImage: /images/mobcover.png

screenshots:
  - src: /images/auth.png
    caption: User authentication flow

  - src: /images/profmag.png
    caption: Profile management and preferences

  - src: /images/TRAD.png
    caption: OCR extraction and translation interface 1
  - src: /images/trad2.png
    caption: OCR extraction and translation interface 2
repoUrl:
demoUrl:
---

## Overview

OCR Translation Mobile App is a cross-platform application built with **Flutter** to simplify multilingual communication directly from images.

Users can capture a photo or upload an existing image, extract text using OCR, translate it into another language, and keep a persistent history of previous translations.

Unlike a standalone mobile application, this project follows a client-server architecture where the Flutter mobile client communicates with an **Express.js backend** connected to **MongoDB** for authentication, profile management, and translation storage.

The objective was to create a fast workflow for users who frequently interact with multilingual documents without requiring manual transcription.

## Mobile Application

The frontend was implemented using **Flutter** and optimized for a mobile-first experience.

Users can:

- Register and authenticate securely
- Upload existing images from storage
- Select source and target languages
- View and manage translation history
- Personalize profile information

The UI was designed to minimize interaction steps and keep translation accessible in only a few screens.

## Backend Architecture

The backend was developed with **Express.js** and exposes REST endpoints consumed by the Flutter application.

Core backend responsibilities include:

- User authentication
- Translation request processing
- History management
- Profile persistence
- API orchestration

The backend acts as the bridge between OCR processing, translation services, and mobile interactions.

## Database Layer

**MongoDB** stores application data using a document-oriented model.

Stored collections include:

- Users
- Translation history
- Extracted OCR text
- Language metadata
- User preferences

Using MongoDB allowed flexible storage of translation sessions while keeping user-related data easy to evolve.

## OCR & Translation Flow

The application follows a simple processing pipeline:

1. User uploads or captures an image
2. OCR extracts the visible text
3. Flutter sends the request to Express
4. Translation is generated through Helsinki NLP
5. Results are returned to the mobile interface
6. Translation history is saved in MongoDB

This architecture separates UI, business logic, and persistence while maintaining a responsive mobile experience.

## Key Outcomes

- Built a complete **Flutter + Express + MongoDB** architecture
- Implemented OCR-driven text extraction
- Added multilingual translation workflows
- Delivered persistent translation history
- Designed a mobile experience focused on speed and usability

This project combines mobile development, backend engineering, OCR, and NLP into a complete end-to-end translation platform.
