export type Lang = 'en' | 'fr';

export const translations = {
  en: {
    nav_skills: 'skills',
    nav_projects: 'projects',
    nav_contact: 'contact',
    cv_btn: 'resume',
    hero_role: 'DevOps Engineer · Monastir, TN',
    hero_title: 'I build infrastructure that ships cleanly.',
    hero_body:
      'I build and ship infrastructure — Kubernetes clusters, CI/CD pipelines, and cloud-native systems that stay up.',
    hero_primary: 'View Projects',
    hero_secondary: 'Contact Me',
    stack_label: 'core stack',
    stack_title: 'Technical Competencies',
    stack_description:
      'A focused grouping of tools I use to automate delivery, operate cloud workloads, and keep systems observable.',
    proj_featured: 'Featured Work',
    proj_heading: 'Projects that showcase my skills and experience',
    proj_total_suffix: 'total',
    contact_label: 'Contact',
    contact_heading: 'Let’s build something reliable',
    contact_body:
      'Available for DevOps, cloud automation, Kubernetes, CI/CD, and platform engineering work.',
    contact_email: 'Send email',
    contact_github: 'GitHub',
    contact_linkedin: 'LinkedIn',
    footer_copy: '© 2026 Adam Mheni',
    cv_panel_title: 'DOWNLOAD',
    cv_panel_body: 'Select your language',
    cv_english: 'English',
    cv_french: 'Français',
    project_featured: 'Featured Project',
    project_single: 'Project',
    project_back: '← back to knowing more about me',
    project_view_repository: 'View repository',
    project_repo_private: 'repo: private',
    project_live_demo: 'Live demo',
    project_placeholder: 'placeholder',
    status_deployed: 'deployed',
    status_in_progress: 'in progress',
    status_demo_pending: 'demo pending',
    status_archived: 'archived',
    status_live: 'live',
    status_completed: 'completed',
    status_paused: 'paused',
    status_cancelled: 'cancelled',
    lang_en: 'EN',
    lang_fr: 'FR',
  },
  fr: {
    nav_skills: 'compétences',
    nav_projects: 'projets',
    nav_contact: 'contact',
    cv_btn: 'CV',
    hero_role: 'Ingénieur DevOps · Monastir, TN',
    hero_title: 'Je construis des infrastructures qui se déploient proprement.',
    hero_body:
      'Je conçois et déploie des infrastructures — clusters Kubernetes, pipelines CI/CD, et systèmes cloud-native robustes.',
    hero_primary: 'Voir les projets',
    hero_secondary: 'Me contacter',
    stack_label: 'stack technique',
    stack_title: 'Compétences techniques',
    stack_description:
      'Un ensemble ciblé d’outils que j’utilise pour automatiser la livraison, exploiter des charges cloud et garder les systèmes observables.',
    proj_featured: 'Travaux en vedette',
    proj_heading:
      'Des projets qui mettent en valeur mes compétences et mon expérience',
    proj_total_suffix: 'au total',
    contact_label: 'Contact',
    contact_heading: 'Construisons quelque chose de fiable',
    contact_body:
      'Disponible pour des missions DevOps, d’automatisation cloud, Kubernetes, CI/CD et ingénierie plateforme.',
    contact_email: 'Envoyer un email',
    contact_github: 'GitHub',
    contact_linkedin: 'LinkedIn',
    footer_copy: '© 2025 Adam Mheni',
    cv_panel_title: 'TÉLÉCHARGER',
    cv_panel_body: 'Sélectionnez votre langue',
    cv_english: 'English',
    cv_french: 'Français',
    project_featured: 'Projet vedette',
    project_single: 'Projet',
    project_back: '← retour vers plus de détails sur moi',
    project_view_repository: 'Voir le dépôt',
    project_repo_private: 'dépôt : privé',
    project_live_demo: 'Démo en ligne',
    project_placeholder: 'placeholder',
    status_deployed: 'déployé',
    status_in_progress: 'en cours',
    status_demo_pending: 'démo en attente',
    status_archived: 'archivé',
    status_live: 'en ligne',
    status_completed: 'terminé',
    status_paused: 'en pause',
    status_cancelled: 'annulé',
    lang_en: 'EN',
    lang_fr: 'FR',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type TranslationKey = keyof (typeof translations)['en'];

const projectTranslations = {
  'coaching-platform': {
    en: {
      title: 'CoachConnect Platform',
      tagline:
        'Full-stack coaching and booking web app — Angular frontend, Spring Boot backend, deployed end-to-end with Docker and GitLab CI/CD.',
    },
    fr: {
      title: 'Plateforme CoachConnect',
      tagline:
        'Application web complète de coaching et de réservation — frontend Angular, backend Spring Boot, déployée de bout en bout avec Docker et GitLab CI/CD.',
    },
  },
  'dual-cluster-kubernetes': {
    en: {
      title: 'Dual-Cluster Kubernetes on AWS',
      tagline:
        'Production EKS cluster + self-managed EC2 test cluster with full CI/CD, monitoring, and secrets management at DEVOPRO.',
    },
    fr: {
      title: 'Double cluster Kubernetes sur AWS',
      tagline:
        'Cluster EKS de production + cluster de test auto-géré sur EC2 avec CI/CD complet, supervision et gestion des secrets chez DEVOPRO.',
    },
  },
  'gitlab-cicd-pipeline': {
    en: {
      title: 'GitLab CI/CD Pipeline',
      tagline:
        'Multi-stage pipeline with SAST, container scanning, and zero-downtime Kubernetes deployments.',
    },
    fr: {
      title: 'Pipeline GitLab CI/CD',
      tagline:
        'Pipeline multi-étapes avec SAST, scan de conteneurs et déploiements Kubernetes sans interruption.',
    },
  },
  'hybrid-aws-onprem': {
    en: {
      title: 'Hybrid AWS / On-Premises Infrastructure',
      tagline:
        'Designed a hybrid cloud solution at Mobelite — Ansible automation, GitHub Actions CI, and Prometheus/Grafana observability.',
    },
    fr: {
      title: 'Infrastructure hybride AWS / On-Premises',
      tagline:
        'Conception d’une solution cloud hybride chez Mobelite — automatisation Ansible, CI GitHub Actions et observabilité Prometheus/Grafana.',
    },
  },
  'ocr-translation-platform': {
    en: {
      title: 'OCR Translation Mobile App',
      tagline:
        'Cross-platform Flutter application for extracting text from images, translating it in real time, and storing translation history through an Express + MongoDB backend.',
    },
    fr: {
      title: 'Application mobile OCR et traduction',
      tagline:
        'Application Flutter multiplateforme pour extraire du texte depuis des images, le traduire en temps réel et conserver l’historique via un backend Express + MongoDB.',
    },
  },
} as const;

export type ProjectSlug = keyof typeof projectTranslations;

export function getProjectCopy(slug: string, lang: Lang) {
  const copy = projectTranslations[slug as ProjectSlug];

  if (!copy) return null;

  return copy[lang];
}
