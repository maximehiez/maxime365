---
title: "Mise à jour en version 8.0.0 du module PowerShell Teams"
meta_title: ""
description: ""
date: 2026-09-16T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_8_0_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 8.0.0 du module PowerShell pour Microsoft Teams.

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
La version 8.0.0 contient les mises à jour suivantes :

- [CHANGEMENT MAJEUR] Rend les paramètres *RecordingEnabled*, *TranscriptionEnabled* et *AgentViewPermission* obligatoires sur l'applet de commande *New-CsAutoRecordingTemplate*.
- Ajout des paramètres *AppointmentBookingPlatform* et *BookingLink* aux applets de commande *[New|Set]-CsMainlineAttendantAppointmentBookingFlow*.
- Publication des applets de commande *[Get|New|Set|Remove]-CsMainlineAttendantSpamDetectionTemplate*.
- Ajout des paramètres *TimeoutThreshold*, *TimeoutDisconnectPromptType*, *TimeoutDisconnectPromptCustomText*, *AiDisclaimerType* et *AiDisclaimerCustomText* à l'applet de commande *New-CsAutoAttendantCallFlow*.
- Ajout des paramètres *LocationId*, *AcquiredCapability*, *NetworkSiteId*, *ReverseNumberLookup* et *Tag* à l'applet de commande *New-CsOnlineDirectRoutingTelephoneNumberUploadOrder*.
- Ajout de *TeamsPersonalAttendantPolicy* à la sortie de l'applet de commande *Get-CsOnlineUser*.
- Ajout de la propriété *AutoRecordingAnnouncementAudioFileName* à l'applet de commande *Get-CsAutoRecordingTemplate*.
- Met à jour les applets de commande *[New|Set]-CsAutoAttendant* pour permettre aux modèles d'enregistrement automatique d'utiliser des annonces sous forme de fichier audio.
- Ajout du paramètre *BusyOnBusyOption* à l'applet de commande *Set-CsUserCallingSettings*, avec les valeurs *PlayBusySignal*, *RedirectAsUnansweredCall* et *RingUser*.
- Ajout de l'attribut de sortie *BusyOnBusyOption* à l'applet de commande *Get-CsUserCallingSettings*.
- Ajout des paramètres *UrgencyDetectionEnabled*, *CategoryDetectionEnabled*, *CallToActionDetectionEnabled* et *VoiceToTextSummaryEnabled* aux applets de commande *[Get|Set]-CsOnlineVoicemailUserSettings*. Ces paramètres permettent aux administrateurs de gérer les fonctionnalités de tri par IA de la messagerie vocale personnelle par utilisateur.
- Ajout des paramètres *EnableExternalRecordingDetection*, *AllowIntelligentRecap* et *IntelligentRecapDocxFileExpirationDays* aux applets de commande *[New|Set]-CsTeamsMeetingPolicy*.
- Ajout du paramètre *DefaultChannelTypeOnCreation* aux applets de commande *[New|Set]-CsTeamsChannelsPolicy*.
- Ajout du paramètre *MaximumConcurrentCalls* aux applets de commande *[Get|Set]-CsUserCallingSettings*.
- Ajout du paramètre *SpamDetectionTemplateId* à l'applet de commande *New-CsAutoAttendant*.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Teams pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[Microsoft Learn - Notes de publication](https://learn.microsoft.com/fr-ca/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/8.0.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.