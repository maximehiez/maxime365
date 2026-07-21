---
title: "Protection contre les bots dans les réunions Microsoft Teams"
meta_title: ""
description: ""
date: 2026-07-21T10:00:00-05:00
image: "/images/blog/teams/teams_bot_protection_meetings_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Sécurité", "Rencontre", "IA", "PowerShell", "Bot"]
draft: false
---
---

##### Introduction
Les outils de prise de notes automatisée par intelligence artificielle comme *Read.ai*, *Fireflies.ai* ou *Otter.ai* rejoignent les réunions en tant que participants externes. Pour les organisateurs, cela pose un défi de contrôle réel : lorsque la salle d'attente est configurée pour laisser passer automatiquement certains types de participants, ces bots peuvent rejoindre sans action délibérée. *Microsoft Teams* introduit une nouvelle couche de protection pour permettre aux administrateurs et aux organisateurs de reprendre le contrôle sur l'accès des bots aux réunions de leur organisation.

---

##### Nouveau mécanisme de protection
Microsoft active, par défaut, le nouveau mécanisme de *détection comportementale des bots*. Teams analyse des signaux d'infrastructure et comportementaux lors de la connexion à une réunion pour identifier les bots externes. Les participants identifiés comme bots sont automatiquement placés en salle d'attente, indépendamment des règles de contournement configurées, et l'organisateur doit les admettre explicitement.

![image](/images/blog/teams/teams_bot_protection_meetings_001.png)

---

##### Détection des bots : comment ça fonctionne ?
La détection repose sur une combinaison de signaux analysés pendant le processus de connexion à la réunion. Lorsqu'un participant est identifié comme bot externe, plusieurs comportements s'appliquent automatiquement :
- <u>Placement en salle d'attente</u> : Le bot est retenu en salle d'attente, même si la stratégie de réunion autorise le contournement pour les participants externes ou les invités. La détection prend le dessus sur la configuration habituelle de la salle d'attente.
- <u>Étiquetage visible</u> : L'organisateur voit le participant identifié comme bot dans la vue salle d'attente, avec un indicateur distinct qui le différencie des participants humains.
- <u>Admission explicite requise</u> : Le bot ne peut rejoindre la réunion qu'après une action délibérée de l'organisateur. Un rappel des risques s'affiche lors de l'admission de participants depuis la salle d'attente.

![image](/images/blog/teams/teams_bot_protection_meetings_002.png)

Microsoft reconnaît que la détection peut occasionnellement classer un participant humain comme bot. Dans ce cas, l'organisateur dispose d'une option *"This is not a bot"* qui corrige la représentation pour la réunion en cours et contribue à améliorer la précision de la détection à l'avenir.

<Notice type="note">Cette fonctionnalité s'applique aux réunions uniquement, pas aux webinaires ni aux assemblées générales.</Notice>

---

##### Configuration par l'administrateur
La fonctionnalité est activée par défaut, sans configuration requise. Pour y accéder :
1. Accédez au Microsoft Teams Admin Center à l'adresse https://admin.teams.microsoft.com.
2. Dans le menu de gauche, cliquez sur *Meetings*, puis sur *Meeting policies*.
3. Sélectionnez la politique que vous souhaitez modifier et éditez l'option *Manage external bots and their access to meetings*.
<br/>

Le paramètre de détection des bots, *"Gérer les bots externes et leur accès aux réunions"*, propose deux valeurs :
- <u>When detected, require approval before joining</u> : Valeur par défaut. Les bots détectés sont placés en salle d'attente et doivent être admis explicitement par l'organisateur.
- <u>Do not detect bots</u> : La détection est désactivée. Les bots externes sont traités comme des participants externes ordinaires.
<br/>

En PowerShell, ce paramètre se configure via *Set-CsTeamsMeetingPolicy* avec l'argument *-ExternalBotAccessMode*. La valeur par défaut étant *RequireApprovalWhenDetected*, la détection est activée pour toutes les stratégies sans intervention de l'administrateur.
<br/>

Microsoft recommande également de configurer la salle d'attente de façon à ce que seuls l'organisateur et les co-organisateurs puissent admettre les participants, afin de limiter les admissions accidentelles de bots.

<Notice type="note">La documentation Microsoft sur la page *manage-external-bots* cite par erreur *Set-CsTeamsEventsPolicy* dans ses exemples PowerShell. Le paramètre *-ExternalBotAccessMode* appartient à *Set-CsTeamsMeetingPolicy*, confirmé par la référence officielle des applets de commande.</Notice>

---

##### Disponibilité
Le déploiement de la détection comportementale des bots suit un calendrier progressif selon les environnements :
- <u>Worldwide</u> : Disponibilité générale depuis environ Juin 2026, avec une version ciblée disponible depuis mi-Mai 2026.
- <u>GCC</u> : Disponibilité générale depuis le 1er Juillet 2026.
- <u>GCC High et DoD</u> : Aucune date confirmée dans les notes de version gouvernementales.

Microsoft a également annoncé le programme *Teams Bot Identification Program*, qui permettra aux éditeurs de logiciels indépendants d'enregistrer leurs bots afin qu'ils soient reconnus comme conformes au sein de Teams. La page d'inscription est annoncée pour bientôt, sans date précise.

---

##### Conclusion
La détection des bots est activée par défaut dans toutes les stratégies de réunion, sans action requise de l'administrateur. Il est conseillé de vérifier la configuration de la salle d'attente pour s'assurer que seuls l'organisateur et les co-organisateurs peuvent admettre les participants, ce qui évite qu'un bot soit admis par inadvertance. Le futur Teams Bot Identification Program mérite d'être suivi de près pour les organisations qui utilisent des outils de transcription approuvés par leur département informatique.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/microsoftteamsblog/introducing-smarter-bot-protection-in-microsoft-teams-meetings/4531375)

[Microsoft Learn - Gérer les bots externes](https://learn.microsoft.com/fr-ca/microsoftteams/manage-external-bots)

[Microsoft Learn - Teams Bot Identification Program](https://learn.microsoft.com/fr-ca/microsoftteams/teams-bot-identification)

[Microsoft Learn - Set-CsTeamsMeetingPolicy](https://learn.microsoft.com/fr-ca/powershell/module/microsoftteams/set-csteamsmeetingpolicy)

---

Vous avez apprécié cet article ? Si vous avez des questions, des commentaires ou des suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.