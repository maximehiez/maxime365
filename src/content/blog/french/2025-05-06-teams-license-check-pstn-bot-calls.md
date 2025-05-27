---
title: "Vérification des licences pour les appels bot PSTN dans Teams"
meta_title: ""
description: ""
date: 2025-05-06T10:00:00-05:00
image: "/images/blog/teams/teams_license_check_pstn_bot_calls_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Licences", "Téléphonie"]
draft: false
---
---

##### Introduction
Microsoft a annoncé une mise à jour importante concernant la vérification de licence pour les appels bot PSTN vers les utilisateurs dans Microsoft Teams. Cette mise à jour vise à aligner les exigences de licence pour les utilisateurs de Teams avec les fonctionnalités *Teams Phone*, garantissant ainsi une utilisation conforme et sécurisée des services de téléphonie.

---

##### Contexte de la mise à jour
Actuellement, les utilisateurs de Teams peuvent transférer des appels à d'autres utilisateurs de Teams, même s'ils ne disposent pas de la licence de téléphonie Teams. Cette flexibilité a créé une lacune dans le système, permettant aux bots d'initier des transferts d'appels (depuis les standards automatiquess par exemple) et des demandes d'ajout de participants.

---

##### Changements apportés
À partir du 30 Septembre 2025, la vérification des licences s'appliquera pour les appels initiés par un bot. Voici les principaux changements :
- Transferts manuels : Les utilisateurs de Teams pourront toujours transférer des appels à d'autres utilisateurs de Teams manuellement, même s'ils ne disposent pas d'une licence de téléphonie Teams.
- Transferts initiés par bot : Les transferts d'appels et les demandes d'ajout de participants à des utilisateurs non licenciés seront bloqués.

---

##### Actions requises
Les administrateurs et les développeurs doivent prendre les mesures suivantes pour se préparer à ces changements :
1. Revue des applications : Examiner et mettre à jour toutes les applications utilisant les API de transfert et d'ajout de participants pour s'assurer qu'elles tiennent compte du nouveau comportement par défaut.
2. Communication aux clients : Informer les clients de la modification du comportement afin qu'ils ne subissent pas de perturbations de service.
3. Vérification des licences : S'assurer que tous les utilisateurs de Teams derrière les applications, telles que les applications de file d'attente, disposent d'une licence de téléphonie Teams.

---

##### Impact sur les utilisateurs
Ces changements visent à renforcer la sécurité et la conformité des services de téléphonie dans Microsoft Teams. En appliquant les vérifications de licences, Microsoft garantit que seuls les utilisateurs autorisés peuvent bénéficier des fonctionnalités avancées de téléphonie, réduisant ainsi les risques de sécurité et les abus potentiels.

---

##### Conclusion
L'application des vérifications de licences pour les appels bot initiés via PSTN dans Microsoft Teams représente une étape importante pour améliorer la sécurité et la conformité des services de téléphonie. Les administrateurs et les développeurs doivent se préparer à ces changements en mettant à jour leurs applications et en informant leurs clients.

---

##### Sources
[Microsoft 365 - Developer Blog](https://devblogs.microsoft.com/microsoft365dev/enforcement-of-license-checks-for-pstn-bot-calls)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.