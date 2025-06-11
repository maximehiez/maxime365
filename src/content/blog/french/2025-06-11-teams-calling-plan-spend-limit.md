---
title: "Comment configurer une limite de plan d'appels dans Teams"
meta_title: ""
description: ""
date: 2025-06-11T11:00:00-05:00
image: "/images/blog/teams/tuto/teams_calling_plan_spend_limit_thumbnail.png"
categories: ["Teams", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Licences", "Téléphonie", "Calling Plan", "Pay-As-You-Go"]
draft: false
---
---

##### Introduction
Les entreprises souhaitant utiliser Microsoft Teams comme fournisseur unique pour leurs services de téléphonie, mais réticentes en raison du coût élevé des plans d'appels, peuvent choisir une approche de facturation à l'utilisation (*Pay-As-You-Go*), facilitant ainsi leur migration PBX vers Teams. Les utilisateurs disposant d’une licence peuvent recevoir des appels gratuitement, alors que les appels sortants vers des numéros locaux et internationaux sont facturés à la minute via les *Crédits de communication* ou en post-utilisation. En appliquant une limite de consommation, il est désormais possible de contrôler la consommation pour ne pas dépasser une limite définie.

---

##### Prérequis
**<u>Téléphonie Microsoft Teams activée</u>**
- La configuration *Calling Plan* en mode *Pay-As-You-Go*.

**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* ou *Administrateur Teams* pour accéder au Microsoft Teams Admin Center.

---

##### Étape 1 : Se connecter au Microsoft Teams Admin Center
Connectez vous au Microsoft Teams Admin Center en ouvrant votre navigateur web sur https://admin.teams.microsoft.com.

---

##### Étape 2 : Activer la limite de dépense mensuelle
Dans le menu de gauche, cliquez sur *<u>Voice</u>*, puis sur *<u>Calling policies</u>*, et éditez la calling policy par défaut (vous pouvez aussi en créer une nouvelle).

![image](/images/blog/teams/tuto/teams_calling_plan_spend_limit_001.png)

Activez l'interrupteur *Enable calling plans spend limit* et entrez la valeur correspondant au montant (en devise locale) après lequel vous souhaitez bloquer les appels.

![image](/images/blog/teams/tuto/teams_calling_plan_spend_limit_002.png)

---

##### Configuration en mode PowerShell
Vous pouvez configurer le nouvel attribut *CallingSpendUserLimit* via les commandes PowerShell suivantes :
```powershell
Connect-MicrosoftTeams

Set-CsTeamsCallingPolicy -Identity Global -CallingSpendUserLimit 150 -EnableSpendLimits $true
```

La configuration peut prendre plusieurs minutes avant d'être effective.

---

##### Expérience pour l'utilisateur
Avec cette nouvelle configuration, un utilisateurs ne sera plus en mesure de faire des appels PSTN sortants dès qu'il aura atteint la limite fixée.

---

##### Conclusion
Vous savez maintenant comment contrôler les consommations téléphoniques de vos utilisateurs dans Teams.

---

##### Sources
[Microsoft Learn - Plans d'appel de Microsoft Teams](https://learn.microsoft.com/fr-ca/microsoftteams/calling-plans-for-office-365)

[Microsoft Learn - Set-CsTeamsCallingPolicy](https://learn.microsoft.com/fr-ca/powershell/module/teams/set-csteamscallingpolicy?view=teams-ps)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.