---
title: "Détection de contenu sensible dans les rencontres Teams"
meta_title: ""
description: ""
date: 2025-09-25T10:00:00-05:00
image: "/images/blog/teams/teams_sensitive_content_detection_in_meetings_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Rencontre", "Protection de données", "Gouvernance", "PII", "DLP"]
draft: false
---
---

##### Introduction
Dans un monde où les échanges professionnels se font de plus en plus en visioconférence, la sécurité des informations partagées en réunion devient un enjeu majeur. Microsoft répond à ce besoin avec la *General Availability* de la détection de contenu sensible dans les réunions Teams, une fonctionnalité qui s’inscrit dans la stratégie de protection des données en temps réel.

---

##### Qu’est-ce que la détection de contenu sensible dans Teams ?
Cette fonctionnalité permet à Microsoft Teams de surveiller automatiquement les partages de contenu afin de détecter la divulgation potentielle de données sensibles telles que :
- Numéros de carte bancaire
- Informations personnelles identifiables (PII)
- Mot de passe
- Informations confidentielles d’entreprise

Lorsqu’un contenu sensible est détecté, Teams alerte automatiquement le présentateur.

---

##### Une protection en temps réel, intégrée à Microsoft Purview
Cette fonctionnalité repose sur les capacités de *Microsoft Purview Data Loss Prevention* (*DLP*), déjà utilisées pour surveiller les emails, les fichiers et les messages Teams. Elle s’étend désormais aux réunions en direct, offrant une couche de sécurité proactive.

---

##### Comment ça fonctionne ?
La fonctionnalité est disponible pour les clients disposant de la licence *Microsoft Teams Premium* et est à activer dans le Microsoft Teams Admin Center.

![image](/images/blog/teams/teams_sensitive_content_detection_in_meetings_001.png)

Une fois activée, les utilisateurs pourront activer la fonctionnalité *Detect sensitive content during screen sharing* sur les nouvelles rencontres ou celles existantes.

![image](/images/blog/teams/teams_sensitive_content_detection_in_meetings_002.png)

Si du contenu sensible est détecté à l'écran, le présentateur recevra immédialement une alerte.

![image](/images/blog/teams/teams_sensitive_content_detection_in_meetings_003.png)

Pour l'exemple, voici ce que j'essayais de partager.

![image](/images/blog/teams/teams_sensitive_content_detection_in_meetings_004.png)

---

##### Cas d’usage concrets
- Secteur financier : Empêcher la divulgation de numéros de compte ou de données bancaires.
- Santé : Bloquer le partage non autorisé de données médicales.
- Industrie : Surveiller les échanges contenant des secrets industriels ou des plans confidentiels.
- RH et juridique : Éviter les fuites d’informations sensibles lors de réunions internes.

---

##### Conclusion
La détection de contenu sensible dans les réunions Teams représente une avancée majeure en matière de sécurité proactive et de conformité réglementaire. En intégrant cette fonctionnalité directement dans les flux de collaboration, Microsoft permet aux organisations de prévenir les fuites de données, renforcer la conformité et protéger les utilisateurs, sans compromettre la fluidité des échanges. Une fonctionnalité essentielle pour les environnements professionnels exigeants.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/microsoftteamsblog/protecting-you-in-meetings-sensitive-content-detection-in-teams-is-now-ga-%F0%9F%8E%89/4440391)

[Microsoft Learn - Détecter du contenu sensible lors du partage d’écran](https://learn.microsoft.com/fr-ca/microsoftteams/detect-sensitive-content)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.