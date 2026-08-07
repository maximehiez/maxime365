---
title: "Mise à jour en version 7.7.0 du module PowerShell Teams"
meta_title: ""
description: ""
date: 2026-04-10T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_7_7_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 7.7.0 du module PowerShell pour Microsoft Teams.

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
La version 7.7.0 contient les mises à jour suivantes :

- Correction du paramètre *IPAddressVersion* dans les applets de commande *[Set|New]-CsOnlinePstnGateway*.
- Suppression des applets de commande *[Set|Remove]-CsPhoneNumberSmsActivation*.
- Ajout de l'attribut de sortie *SmsActivationState* à l'applet de commande *Get-CsPhoneNumberAssignment*.
- Ajout de la prise en charge de l'authentification basée sur l'application dans l'applet de commande *Set-CsTeamsSettingsCustomApp*.
- Mise à jour de l'applet de commande *Get-Team* pour améliorer les performances et la fiabilité.
- [CHANGEMENT MAJEUR] Renomme le paramètre *ConfigurationId* dans l'applet de commande *Get-CsMainline AttendantFlow* en *RelatedConfigurationId*.
- Ajout des applets de commande *Get-CsMainline AttendantTenantInformation*, *Get-CsMainline AttendantSupportedLanguages* et *Get-CsMainline AttendantSupportedVoices*.
- Ajout des paramètres *AgentId*, *AgentIds*, *ContinuationToken*, *DisplayNameContains*, *DisplayNamePrefix*, *MaxResult* et *ShowCount* à l'applet de commande *Get-CsAiAgents*.
- Ajout de la prise en charge des descriptions basées sur les URL dans les applets de commande *[New|Set]-CsMainline AttendantQuestionAnswerFlow*.
- [CHANGEMENT MAJEUR] Renomme le paramètre *DomainBlockingForMDOAdminsInTeams* de l'applet de commande *Set-CsTenantFederationConfiguration* en *SecurityTeamAllowBlockListDelegation*.
- Introduition  des applets de commande *[Get|New|Set|Remove]-CsAgent* pour la gestion de l'agent IA lors de l'intégration des comptes de ressources.
- Ajout du paramètre *IncomingRedirectedCalls* à l'applet de commande *New-CsSharedCallQueueHistoryTemplate*.
- Introduition des applets de commande *[Get|New|Set|Remove]-CsSharedCallHistoryTemplate*. Ces applets de commande remplaceront les applets de commande *[Get|New|Set|Remove]-CsSharedCallQueueHistoryTemplate* ultérieurement.
- Ajout du paramètre *SharedVoicemailHistoryTemplateId* à l'applet de commande *New-CsAutoAttendantCallableEntity*.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Teams pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[Microsoft Learn - Notes de publication](https://learn.microsoft.com/fr-ca/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/7.7.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.