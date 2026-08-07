---
title: "Mise à jour en version 7.3.0 du module PowerShell Teams"
meta_title: ""
description: ""
date: 2025-08-12T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_7_3_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 7.3.0 du module PowerShell pour Microsoft Teams.

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
La version 7.3.0 contient les mises à jour suivantes :

- Ajout du paramètre *Notify* aux applets de commande *[Set|Remove]-CsPhoneNumberAssignment*.
- Publication des applets de commande *[New|Set|Remove|Get|Grant]-CsTeamsPersonalAttendantPolicy*.
- Ajout du paramètre *OCDIRedirect* aux applets de commande *[Set|Remove]-CsTeamsUpdateManagementPolicy*.
- Ajout de l'attribut de sortie *AppName* aux applets de commande *Get-M365TeamsApp* et *Get-AllM365TeamsApps*.
- Inclut une nouvelle implémentation de *[Get|Set]-CsTeamsAcsFederationConfiguration*. Les fonctionnalités restent identiques à l'implémentation précédente.
- Ajout des paramètres *HideBannerForAllowedAcsUsers* et *LabelForAllowedAcsUsers* à l'applet de commande *Set-CsTeamsAcsFederationConfiguration*.
- [CHANGEMENT MAJEUR] Supprime les applets de commande *Get-CsOnlinePowerShellEndpoint* et *Set-CsInternalOnlinePowerShellEndpoint*.
- Ajout des paramètres *MainlineAttendantFlow* et *MainlineAttendantTarget* à l'applet de commande *New-CsAutoAttendantMenuOption*.
- Ajout du paramètre *EnableMainlineAttendant* aux applets de commande *[New|Set]-CsAutoAttendant*.
- Libère les applets de commande *New-CsMainlineAttendantAppointmentBookingFlow*, *New-CsMainlineAttendantQuestionAnswerFlow* et *Get-CsMainlineAttendantFlow*.
- Publication des applets de commande *[Get|Set]-CsPersonalAttendantSettings*.
- Correction de l'erreur avec l'applet de commande *Set-CsTeamsSettingsCustomApp*.
- Ajout des paramètres *UseMicrosoftECDN* et *RecordingForTownhall* aux applets de commande *[New|Set]-CsTeamsEventsPolicy*.
- Ajout du paramètre *ExplicitRecordingConsent* aux applets de commande *[New|Set]-CsTeamsCallingPolicy*.
- Ajout des paramètres *EduGenerativeAIEnhancements* et *AutoShareFilesInExternalChats* aux applets de commande *[New|Set]-CsTeamsMessagingPolicy*.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Teams pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[Microsoft Learn - Notes de publication](https://learn.microsoft.com/fr-ca/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/7.3.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.