---
title: "Mise à jour en version 7.4.0 du module PowerShell Teams"
meta_title: ""
description: ""
date: 2025-10-14T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_7_4_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 7.4.0 du module PowerShell pour Microsoft Teams.

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
La version 7.4.0 contient les mises à jour suivantes :

- Publie l'applet de commande *Get-TeamsArtifacts*.
- Ajoute le paramètre *MainlineAttendantAgentVoiceId* l'applet de commande *New-CsAutoAttendant*.
- Publie les applets de commande *[New|Set|Remove|Get]-CsTagsTemplate*.
- Publie l'applet de commande *New-CsTag*.
- [CHANGEMENT MAJEUR] Renomme les paramètres *BotId* et *PairedApplication* dans les applets de commande *[New|Set|Get]-CsComplianceRecordingForCallQueueTemplate* à *BotApplicationInstanceObjectId* et *PairedApplicationInstanceObjectId*.
- Publie les applets de commande *Get-TeamsRemoteLogCollectionConfiguration* et *[Get|Set|New|Remove]-TeamsRemoteLogCollectionDevice*.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Teams pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[Microsoft Learn - Notes de publication](https://learn.microsoft.com/fr-ca/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/7.4.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.