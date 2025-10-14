---
title: "Protection contre les URL malveillantes dans Teams"
meta_title: ""
description: ""
date: 2025-10-14T10:00:00-05:00
image: "/images/blog/teams/teams_malicious_url_protection_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Safe Links", "Phishing"]
draft: false
---
---

##### Introduction
Dans un monde où les cyberattaques par *hameçonnage* (*phishing*) et les liens malveillants sont en constante augmentation, Microsoft renforce la sécurité de Microsoft Teams avec une fonctionnalité native de protection contre les URL malveillantes. Cette nouvelle option permet de détecter, bloquer et signaler les liens dangereux partagés dans les conversations Teams.

---

##### Comment ça fonctionne ?
Lorsqu'un utilisateur envoie un message contenant une URL dans une conversation, un canal ou une conversation de réunion, l'URL est automatiquement analysée en utilisant la base de données de renseignement sur les menaces de *Microsoft Defender*. Si un lien dangereux est détecté, Teams affiche un avertissement à l’expéditeur et à tous les destinataires de la conversation.

![image](/images/blog/teams/teams_malicious_url_protection_001.png)

---

##### Comment l'activer ?
La fonctionnalité est encore en *Public Preview* et nécessite qu'un administrateur l'active, mais elle sera activée par défaut une fois la *General Availability*.

1. Connectez-vous au Microsoft Teams Admin Center.
2. Dans le menu de gauche, cliquez sur *<u>Messaging</u>*, puis sur *<u>Messaging settings</u>*, et activez l'option *Scan messages for unsafe links*.
3. Sauvegardez pour appliquer les modifications.

![image](/images/blog/teams/teams_malicious_url_protection_002.png)

---

##### Configuration en mode PowerShell
Vous pouvez aussi configurer la fonctionnalité de protection via les commandes PowerShell suivantes :
```powershell
Connect-MicrosoftTeams

Set-CsTeamsMessagingConfiguration -Identity Global -UrlReputationCheck "Enabled"
```

---

##### Conclusion
Avec la protection contre les URL malveillantes dans Teams, Microsoft renforce sa stratégie de sécurité intégrée au sein de Microsoft 365. Cette fonctionnalité permet aux organisations de mieux protéger leurs utilisateurs contre les menaces en ligne, sans compromettre la productivité ni l’expérience de collaboration. Une avancée essentielle pour sécuriser les communications dans un environnement de travail hybride.

---

##### Sources
[Microsoft Learn - Protection contre les URL malveillantes](https://learn.microsoft.com/fr-ca/microsoftteams/malicious-url-protection-teams)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.