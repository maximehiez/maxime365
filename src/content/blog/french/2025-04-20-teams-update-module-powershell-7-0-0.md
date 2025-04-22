---
title: "Mise à jour en version 7.0.0 du module PowerShell Teams"
meta_title: ""
description: ""
date: 2025-04-20T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_7_0_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 7.0.0 du module PowerShell pour Microsoft Teams.

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
La version 7.0.0 contient les mises à jour suivantes :

- Ajoute les paramètres *ShiftsTeamId* et *ShiftsSchedulingGroupId* à l’applet de commande *[New|Set]-CsCallQueue*.
- [CHANGEMENT MAJEUR] Déprécie le paramètre *CustomizeFederation* de l’applet de commande *[Get|Set]-CsTenantFederationConfiguration*.
- Ajoute le paramètre *TownhallEventAttendeeAccess* à l’applet de commande *[New|Set]-CsTeamsEventsPolicy*.
- Ajoute les paramètres *AllowedUsersForMeetingDetails* et *RealTimeText* à l’applet de commande *[New|Set]-CsTeamsMeetingPolicy*.
- Ajoute le paramètre *RealTimeText* à l’applet de commande *[New|Set]-CsTeamsCallingPolicy*.
- Ajoute les paramètres *UsersCanDeleteBotMessages*, *ContentBasedPhishingCheck* et *ReportIncorrectSecurityDetections* à l’applet de commande *[New|Set]-CsTeamsMessagingConfiguration*.
- Ajoute le paramètre *SpeakerAttributionForBYOD* à l’applet de commande *[New|Set]-CsTeamsAIPolicy*.
- [CHANGEMENT MAJEUR] Supprime l’attribut de sortie *OptionFlags* de l’applet de commande *Get-CsOnlineUser*.
- Publie les applets de commande *[New|Set|Remove|Get]-CsComplianceRecordingForCallQueueTemplate*.
- Ajoute les paramètres associés à l’enregistrement de conformité (*ComplianceRecordingForCallQueueTemplateId*, *TextAnnouncementForCR*, *CustomAudioFileAnnouncementForCR*, *TextAnnouncementForCRFailure*, *CustomAudioFileAnnouncementForCRFailure*) à l’applet de commande *[New|Set]-CsCallQueue* et les attributs de sortie correspondants sur *Get-CsCallQueue*.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Teams pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[Microsoft Learn - Notes de publication](https://learn.microsoft.com/fr-ca/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/7.0.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.