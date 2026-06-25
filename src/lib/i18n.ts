export type Lang = 'en' | 'fr';

export const translations = {
  en: {
    nav_projects: 'projects',
    nav_about: 'about',
    cv_btn: 'Download CV',
    hero_role: 'DevOps Engineer · Monastir, TN',
    hero_tagline:
      'I build and ship infrastructure — Kubernetes clusters, CI/CD pipelines, and cloud-native systems that stay up.',
    stack_label: 'core stack',
    proj_heading: 'Projects',
    live: 'live',
    completed: 'completed',
    view: 'view →',
    p1_title: 'Dual-Cluster Kubernetes on AWS EKS',
    p1_desc:
      'Production EKS cluster + self-managed EC2 test cluster with full CI/CD, observability, and secrets management at DEVOPRO. Resolved layered OIDC + CSI driver issues live.',
    p2_title: 'GitLab CI/CD Pipeline',
    p2_desc:
      'Multi-stage pipeline with SAST (SonarQube), container scanning (Trivy), and zero-downtime Kubernetes rolling deployments. 60% faster than the previous manual process.',
    p3_title: 'Hybrid AWS / On-Premises',
    p3_desc:
      'VPN-bridged hybrid infrastructure at Mobelite with Ansible automation across both environments. 70% reduction in manual ops. Unified observability with Prometheus + Grafana.',
    p4_title: 'CoachConnect Platform',
    p4_desc:
      'Full DevOps implementation for a coaching web app — Angular + Spring Boot containerised with Docker, deployed on Kubernetes via GitLab CI/CD and AWS Secrets Manager.',
    footer_copy: '© 2025 Adam Mheni',
  },
  fr: {
    nav_projects: 'projets',
    nav_about: 'à propos',
    cv_btn: 'Télécharger CV',
    hero_role: 'Ingénieur DevOps · Monastir, TN',
    hero_tagline:
      'Je conçois et déploie des infrastructures — clusters Kubernetes, pipelines CI/CD, et systèmes cloud-native robustes.',
    stack_label: 'stack technique',
    proj_heading: 'Projets',
    live: 'en ligne',
    completed: 'terminé',
    view: 'voir →',
    p1_title: 'Double Cluster Kubernetes sur AWS EKS',
    p1_desc:
      "Cluster EKS en production + cluster de test auto-géré sur EC2 avec CI/CD complet, observabilité et gestion des secrets chez DEVOPRO. Résolution d'incidents OIDC + CSI Driver en conditions réelles.",
    p2_title: 'Pipeline GitLab CI/CD',
    p2_desc:
      "Pipeline multi-étapes avec analyse SAST (SonarQube), scan de conteneurs (Trivy) et déploiements Kubernetes sans interruption. 60% plus rapide qu'avant.",
    p3_title: 'Infrastructure Hybride AWS / On-Premises',
    p3_desc:
      'Infrastructure hybride chez Mobelite avec tunnel VPN et automatisation Ansible. Réduction de 70% des opérations manuelles. Observabilité unifiée avec Prometheus + Grafana.',
    p4_title: 'Plateforme CoachConnect',
    p4_desc:
      'Implémentation DevOps complète pour une app de coaching — Angular + Spring Boot conteneurisé avec Docker, déployé sur Kubernetes via GitLab CI/CD et AWS Secrets Manager.',
    footer_copy: '© 2025 Adam Mheni',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type TranslationKey = keyof (typeof translations)['en'];
