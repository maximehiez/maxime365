---
title: "Mise à jour en version 7.2.0 du module PowerShell Teams"
meta_title: ""
description: ""
date: 2025-07-08T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_7_2_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 7.2.0 du module PowerShell pour Microsoft Teams.

---

##### Installation
Vous pouvez vérifier la version du module installé via la commande PowerShell suivante :
```powershell
Get-InstalledModule -Name "MicrosoftTeams"
```

Vous pouvez installer le module MicrosoftTeams via la commande PowerShell suivante :
```powershell
Install-Module -Name MicrosoftTeams
```

Vous pouvez mettre à jour le module MicrosoftTeams via la commande PowerShell suivante :
```powershell
Update-Module MicrosoftTeams
```

---

##### Quoi de neuf ?
La version 7.2.0 contient les mises à jour suivantes :

- Ajoute l’attribut *EffectivePolicyAssignments* à l’applet de commande *Get-CsOnlineUser*. Cet attribut est actuellement pris en charge uniquement dans les environnements commerciaux.
- Résout les problèmes liés au paramètre *AccountType* (valeurs *SfbOnPremUser* et *In eligibleUser*) dans l’applet de commande *Get-CsOnlineUser*.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Teams pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[Microsoft Learn - Notes de publication](https://learn.microsoft.com/fr-ca/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/7.2.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.