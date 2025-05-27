---
title: "Gestion des priorités d’appel dans les files d’attente Teams"
meta_title: ""
description: ""
date: 2025-05-27T10:00:00-05:00
image: "/images/blog/teams/teams_call_queue_priority_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Téléphonie", "Direct Routing", "Calling Plan", "Operator Connect", "File d'attente"]
draft: false
---
---

##### Introduction
Avec l’évolution des usages de Microsoft Teams comme solution de téléphonie d’entreprise, Microsoft introduit une fonctionnalité très attendue : la gestion des priorités d’appel dans les files d'attente. Cette nouveauté permet aux organisations de mieux contrôler l’ordre de traitement des appels entrants, en fonction de leur importance ou de leur origine.

---

##### Priorisation des appels dans les files d’attente
Jusqu’à présent, les appels entrants dans une file d’attente étaient traités selon une logique *FIFO* (*First In, First Out*), c’est-à-dire dans l’ordre d’arrivée. Cela posait problème dans certains scénarios métiers où certains appels devaient être traités plus rapidement que d’autres (clients VIP, urgences, services critiques, ...).

Avec cette nouvelle fonctionnalité, il est désormais possible d’assigner une priorité à chaque appel, ce qui permet de réorganiser dynamiquement la file d’attente en fonction de cette priorité en garantissant que les appels les plus critiques sont traités en premier.

Les priorités peuvent être attribuées sur une échelle de 1 à 5 :
- 1 – Très élevée
- 2 – Élevée
- 3 – Normale (par défaut)
- 4 – Faible
- 5 – Très faible

Lorsqu'un agent devient disponible pour prendre un appel, il reçoit l'appel prioritaire le plus ancien. Si plusieurs appels ont le même niveau de priorité, celui qui attend le plus longtemps est présenté en premier à l'agent.

---

##### Configuration via PowerShell
Actuellement, la configuration des priorités s’effectue exclusivement via PowerShell. Il est important de noter que toute modification ultérieure via le Microsoft Teams Admin Center réinitialisera la priorité à la valeur par défaut. Comme pour toutes les autres nouvelles fonctionnalités de Teams, elle deviendra disponible via l'interface web rapidement.

---

##### Exemples
Prenons l’exemple de *<u>HIEZ IT Support</u>*, qui propose différents niveaux de service à ses clients :
- Support Téléphonie : Priorité 3
- Support Ordinateur : Priorité 2
- Support Mot de passe : Priorité 1
- Support Autres demandes : Priorité 5

![image](/images/blog/teams/teams_call_queue_priority_001.png)

Les clients appelant au numéro de support et faisant l'option 3 (priorité 1) seront ainsi servis avant ceux des autres niveaux, assurant une expérience client conforme aux engagements de service.

---

##### Bonnes pratiques
- Planification : Définissez clairement les niveaux de priorité en fonction des besoins de votre organisation.
- Formation : Assurez-vous que les agents comprennent le système de priorisation pour une gestion efficace des appels.
- Surveillance : Utilisez les outils d’analyse de Teams pour évaluer l’efficacité de la priorisation et ajuster les paramètres si nécessaire.

---

##### Conclusion
La gestion des priorités d’appel dans Microsoft Teams représente une avancée significative pour les entreprises souhaitant optimiser le traitements de leurs appels entrants. En permettant une distribution intelligente des appels, cette fonctionnalité contribue à améliorer la satisfaction client et l’efficacité opérationnelle.

---

##### Sources
[Microsoft Learn - Priorités d'appels pour les files d’attente](https://learn.microsoft.com/fr-ca/microsoftteams/aa-cq-call-priorities)

[Microsoft Learn - New-CsAutoAttendantCallableEntity](https://learn.microsoft.com/fr-ca/powershell/module/teams/new-csautoattendantcallableentity?view=teams-ps)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.