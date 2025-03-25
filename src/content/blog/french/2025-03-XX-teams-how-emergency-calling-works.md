---
title: "Comment configurer et analyser les appels d'urgence dans Teams"
meta_title: ""
description: ""
date: 2025-03-25T11:00:00-05:00
image: "/images/blog/teams/tuto/teams_how_emergency_calling_works_thumbnail.png"
categories: ["Teams", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Téléphonie", "Direct Routing", "Syslogs", "Appel d'urgence", "911"]
draft: true
---
---

##### Introduction
La téléphonie Microsoft Teams offre une fonctionnalité essentielle pour les entreprises : la gestion des appels d'urgence. Cette fonctionnalité permet aux utilisateurs de passer des appels d'urgence tout en fournissant des informations précises sur leur localisation aux services de secours, et ce, de manière dynamique. Voici un aperçu détaillé de son fonctionnement et des meilleures pratiques pour sa mise en œuvre.

---

##### Qu'est-ce qu'un appel d'urgence ?
Les appels d'urgence dans Teams permettent aux utilisateurs de contacter les services de secours en composant des numéros d'urgence tels que le 911 aux États-Unis / Canada ou le 112 en Europe. Lorsqu'un appel d'urgence est passé, Teams transmet des informations de localisation précises pour aider les services de secours à localiser l'appelant rapidement.

Teams permet de configurer et de router les appels d'urgence en fonction de la localisation du client Teams lorsqu'il est connecté sur un emplacement de son organisation. Cette fonctionnalité utilise des informations de connectivité réseau pour déterminer la localisation de l'utilisateur et router l'appel vers la centrale 911 appropriée.

---

##### Prérequis
**<u>Téléphonie Microsoft Teams activée</u>**
- Le mode Direct Routing configuré.

**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* ou *Administrateur Teams* pour accéder au Microsoft Teams Admin Center.

---

##### Étape 1 : Se connecter au Microsoft Teams Admin Center
Connectez vous au Microsoft Teams Admin Center en ouvrant votre navigateur web sur https://admin.teams.microsoft.com.

---

##### Étape 2 : Créer les adresses d'urgence
Dans le menu de gauche, cliquez sur *<u>Locations</u>*, puis sur *<u>XXXX</u>*.


---

##### Fonctionnement des appels d'urgence dynamiques
Lorsqu'un utilisateur passe un appel d'urgence, le client Teams envoie une requête de localisation contenant ses informations de connectivité réseau au LIS. Si une correspondance est trouvée, le LIS renvoie une localisation au client Teams, qui inclut ces données dans l'appel d'urgence. Ces informations sont ensuite utilisées par le fournisseur de services d'urgence pour déterminer le PSAP approprié et router l'appel2.

---

##### Avantages des appels d'urgence dynamiques
- Localisation précise : Fournit des informations de localisation précises basées sur la connectivité réseau actuelle de l'utilisateur.
- Notification : Permet de notifier le personnel de sécurité interne en cas d'appel d'urgence.
- Conformité réglementaire : Aide les entreprises à se conformer aux réglementations locales en matière de sécurité.

---

##### Conclusion
La gestion des appels d'urgence dans la téléphonie Teams est une fonctionnalité cruciale pour assurer la sécurité des utilisateurs. En configurant correctement les adresses d'urgence et en utilisant les appels d'urgence dynamiques, les entreprises peuvent garantir que les informations de localisation précises sont fournies aux services de secours, améliorant ainsi la réactivité et la sécurité.

---

##### Sources
[Microsoft Learn - Gérer les appels d’urgence](https://learn.microsoft.com/fr-ca/microsoftteams/what-are-emergency-locations-addresses-and-call-routing)

[Audiocodes - Syslog Viewer](https://tools.audiocodes.com/install)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.