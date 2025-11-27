---
title: "Mise à jour en version 7.5.0 du module PowerShell Teams"
meta_title: ""
description: ""
date: 2025-11-14T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_7_5_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 7.5.0 du module PowerShell pour Microsoft Teams.

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
La version 7.5.0 contient les mises à jour suivantes :

- Ajoute les paramètres *PickUpHeldCalls* et *JoinActiveCalls* aux applets de commande *[New|Set]-CsUserCallingDelegate* et les attributs de sortie correspondants à l'applet de commande *Get-CsUserCallingSettings*.
- Ajoute les attributs de sortie *AssignmentBlockedState* et *AssignmentBlockedUntil* à l'applet de commande *[Get]-CsPhoneNumberAssignment*.
- Supprime les applets de commande *[Set|Remove]-CsPhoneNumberAssignmentBlock*.
- Ajoute le paramètre *DynamicCallerIdMode* aux applets de commande *[Get|Set]-CsOnlineDialInConferencingTenantSettings*.
- Ajoute le paramètre *BackroomChat* aux applets de commande *[New|Set]-CsTeamsMeetingPolicy* et *[New|Set]-CsTeamsEventsPolicy*.
- Ajoute le paramètre *UseUnifiedDomain* à l'applet de commande *Set-CsTeamsClientConfiguration*.
- [CHANGEMENT MAJEUR] Remplace le paramètre *MaxResolutionForTownhall* par *TownhallMaxResolution* dans les applets de commande *[Get|Set|New|Remove]-CsTeamsEventsPolicy*.
- Ajoute le paramètre *ExternalPresenterJoinVerification* aux applets de commande *[Set|New]-CsTeamsEventsPolicy*.
- Ajoute le paramètre *PasiveVoiceEnrollment* aux applets de commande *[New|Set]-CsTeamsAIPolicy*.
- Ajoute le paramètre *SetRecordingAndTranscriptOwnership* aux applets de commande *[New|Set]-CsTeamsMeetingPolicy*.
- Ajoute les paramètres *EnableRecordingAndTranscriptionCustomMessage* et *RecordingAndTranscriptionCustomMessageIdentifier* aux applets de commande *[New|Set]-CsTeamsMeetingPolicy* et *[New|Set]-CsTeamsCallingPolicy*.
- Publie l'applet de commande *Get-CsTeamsRecordingAndTranscriptionCustomMessagesConfiguration*.
- Ajoute les applets de commande *[Get|Set|New|Remove]-CsTeamsRecordingAndTranscriptionCustomMessage*.
- Ajoute *Voicemail* comme valeur prise en charge pour le paramètre *Type* des applets de commande *[New|Set]-CsAutoAttendantCallableEntity*.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Teams pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[Microsoft Learn - Notes de publication](https://learn.microsoft.com/fr-ca/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/7.5.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.