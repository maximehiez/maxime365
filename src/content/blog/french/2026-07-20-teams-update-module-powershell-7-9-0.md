---
title: "Mise à jour en version 7.9.0 du module PowerShell Teams"
meta_title: ""
description: ""
date: 2026-07-20T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_7_9_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 7.9.0 du module PowerShell pour Microsoft Teams.

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
La version 7.9.0 contient les mises à jour suivantes :

- Met à jour l'applet de commande *Connect-MicrosoftTeams* pour utiliser le *Web Account Manager* (*WAM*) pour l'authentification, afin de renforcer la sécurité.
- Ajoute le paramètre de commutateur *DisableWAM* à l'applet de commande *Connect-MicrosoftTeams* pour désactiver l'authentification basée sur WAM. Ce paramètre est temporaire et sera obsolète dans une version ultérieure.
- Publie les applets de commande *[Get|New|Set|Remove]-CsSharedVoicemailTriageSettingsTemplate*.
- Ajoute le paramètre *SharedVoicemailTriageSettingsTemplateId* aux applets de commande *[New|Set]-CsAutoAttendant*.
- Ajoute le paramètre *SharedVoicemailTriageSettingsTemplateId* aux applets de commande *[New|Set]-CsCallQueue*.
- Ajoute le paramètre *Channel* à l'applet de commande *Get-CsAiAgents*.
- Met à jour les applets de commande *[Get|Set|Remove]-CsPhoneNumberAssignment* pour utiliser *-TelephoneNumber* et *-NumberType* comme noms de paramètres principaux, tout en conservant *-PhoneNumber* et *-PhoneNumberType* comme alias pour la compatibilité ascendante.
- Ajoute les paramètres *AllowCreateChannel*, *AllowCreateClassicChannel*, *AllowCreatePrivateChannel*, *AllowCreateSharedChannel*, *CreateSharedChannelsByDefault*, *AllowUsersFromOutsideTeam*, *AllowGuestsFromOutsideTeam*, *AllowUsersFromOutsideTeamInPrivateChannel*, *AllowGuestsFromOutsideTeamInPrivateChannel*, *AllowSharingWithTeamInOrg* et *AllowSharingPrivateChannelWithTeamInOrg* aux applets de commande *[New|Set]-CsTeamsChannelsPolicy*.
- Ajoute les paramètres *SyntheticMediaDetection*, *SyntheticMediaDetectionAppId*, *ConditionalAccessAttendeeVerification*, *EnablePreMeetingConsent* et *PreMeetingConsentContentIdentifier* aux applets de commande *[New|Set]-CsTeamsMeetingPolicy*.
- Ajoute les paramètres *PublishedEntraAuthenticationContexts*, *EnableAttributedTranscripts* et *EnableGraphTranscriptAccess* à l'applet de commande *Set-CsTeamsMeetingConfiguration*.
- Ajoute les paramètres *AllowMeetingKnowledgeGeneration* et *VoicePhishingDetection* aux applets de commande *[New|Set]-CsTeamsCallingPolicy*.
- Ajoute les paramètres *AllowEngagementReport* et *InfoShownInReportMode* aux applets de commande *[New|Set]-CsTeamsEventsPolicy*.
- Ajoute le paramètre *EnableVoicemailTriage* aux applets de commande *[New|Set]-CsOnlineVoicemailPolicy*.
- [CHANGEMENT MAJEUR] Suppression des applets de connexion Teams Shifts : *[Get|New|Set|Remove|Update]-CsTeamsShiftsConnection*, *[Get|New|Set|Remove|Update]-CsTeamsShiftsConnectionInstance*, *[Get|Remove]-CsTeamsShiftsConnectionTeamMap*, *New-CsTeamsShiftsConnectionBatchTeamMap*, *Get-CsTeamsShiftsConnectionConnector*, *Get-CsTeamsShiftsConnectionOperation*, *Get-CsTeamsShiftsConnectionSyncResult*, *[Get|Disable]-CsTeamsShiftsConnectionErrorReport*, *Get-CsTeamsShiftsConnectionWfmTeam*, *Get-CsTeamsShiftsConnectionWfmUser* et *Test-CsTeamsShiftsConnectionValidate*. Ces applets ne sont plus pris en charge.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Teams pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[Microsoft Learn - Notes de publication](https://learn.microsoft.com/fr-ca/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/7.9.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.