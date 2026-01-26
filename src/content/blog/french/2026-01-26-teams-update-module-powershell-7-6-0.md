---
title: "Mise à jour en version 7.6.0 du module PowerShell Teams"
meta_title: ""
description: ""
date: 2026-01-26T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_7_6_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 7.6.0 du module PowerShell pour Microsoft Teams.

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
La version 7.6.0 contient les mises à jour suivantes :

- Publie l'applet de commande *Get-CsAiAgents*.
- Publie  l'applet de commande *New-CsPhoneNumberBulkUpdateTagsOrder*.
- Publie les applets de commande *[Get|Set|Remove]-CsPhoneNumberTenantConfiguration*.
- Publie les applets de commande *[New|Get|Set|Remove]-CsAutoRecordingTemplate*.
- Ajoute le paramètre *AutoRecordingTemplateId* aux applets de commande *[New|Set]-CsCallQueue*.
- Ajoute le paramètre *ResourceAccount* aux applets de commande *[New|Set]-InboundBlockedNumberPattern*.
- Ajoute le paramètre *CallerNumber* aux applets de commande *[Get|Test]-CsEffectiveTenantDialPlan*.
- Ajoute le paramètre *LinksInTeams* aux applets de commande *[Set|New]-CsTeamsMobilityPolicy*.
- Ajoute le paramètre *ReportCall* aux applets de commande *[Set|New]-CsTeamsCallingPolicy*.
- Ajoute les paramètres *AllowMultipleScreenshare* et *PasscodeComplexity* aux applets de commande *[Set|New]-CsTeamsMeetingPolicy*.
- Ajoute le paramètre *Registration* aux applets de commande *[Set|New]-CsTeamsEventsPolicy*.
- Ajoute le paramètre *UserSettingsDefault* aux applets de commande *[Set|New]-CsTeamsWorkLocationDetectionPolicy*.
- Ajoute le paramètre *ResourceAccount* à l'applet de commande *Test-InboundBlockedNumberPattern*.
- Ajoute le paramètre *AllowMultipleScreenshare* à l'applet de commande *Set-CsTeamsGuestMeetingConfiguration*.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Teams pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[Microsoft Learn - Notes de publication](https://learn.microsoft.com/fr-ca/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/7.6.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.